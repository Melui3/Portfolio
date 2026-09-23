import test from 'node:test'
import assert from 'node:assert/strict'
import { isSubmissionAccepted, submitContact } from '../src/contactSubmission.js'
import { trackContactEvent } from '../src/analyticsEvents.js'
import { services, contactUrlForService } from '../src/data/services.js'
import { SITE_EMAIL } from '../src/seo.js'

test('only explicit service acceptance counts as a submission', () => {
  for (const value of [true, 'true']) assert.equal(isSubmissionAccepted({ ok: true }, { success: value }), true)
  for (const value of [false, 'false', undefined, null, 1, 'success']) assert.equal(isSubmissionAccepted({ ok: true }, { success: value }), false)
  assert.equal(isSubmissionAccepted({ ok: false }, { success: true }), false)
  assert.equal(isSubmissionAccepted({ ok: true }, null), false)
})

test('form uses the configured recipient and forwards abort signal', async () => {
  const signal = new AbortController().signal
  const payload = { name: 'Test', email: 'test@example.com', message: 'Test local' }
  await submitContact(payload, { signal, fetcher: async (url, options) => {
    assert.equal(url, `https://formsubmit.co/ajax/${SITE_EMAIL}`)
    assert.equal(options.method, 'POST')
    assert.equal(options.signal, signal)
    assert.deepEqual(JSON.parse(options.body), payload)
    return { ok: true, json: async () => ({ success: 'true' }) }
  } })
})

test('HTTP failure, refused submission and invalid response remain failures', async () => {
  for (const response of [
    { ok: false, json: async () => ({ success: true }) },
    { ok: true, json: async () => ({ success: 'false' }) },
    { ok: true, json: async () => { throw new Error('Invalid JSON') } },
  ]) await assert.rejects(submitContact({}, { fetcher: async () => response }))
  await assert.rejects(submitContact({}, { fetcher: async () => { throw new Error('Network unavailable') } }))
})

test('every offer has a unique, valid contact link', () => {
  assert.equal(new Set(services.map((service) => service.id)).size, services.length)
  for (const service of services) {
    const url = new URL(contactUrlForService(service), 'https://example.com')
    assert.equal(url.pathname, '/contact')
    assert.equal(url.searchParams.get('service'), service.id)
    assert.ok(service.contactLabel)
  }
})

test('analytics fail closed without explicit consent and never accept arbitrary event data', (t) => {
  const previousWindow = globalThis.window
  t.after(() => {
    if (previousWindow === undefined) delete globalThis.window
    else globalThis.window = previousWindow
  })
  const calls = []
  let consent = null
  globalThis.window = {
    localStorage: { getItem: () => consent },
    gtag: (...args) => calls.push(args),
    clarity: (...args) => calls.push(args),
  }
  for (const value of [null, 'pending', 'refused']) { consent = value; trackContactEvent('generate_lead') }
  assert.deepEqual(calls, [])
  consent = 'accepted'
  trackContactEvent('email_click')
  trackContactEvent('generate_lead')
  trackContactEvent('visitor@example.com')
  assert.deepEqual(calls, [
    ['event', 'email_click', {}], ['event', 'email_click'],
    ['event', 'generate_lead', { lead_source: 'contact_form' }], ['event', 'generate_lead'],
  ])
  window.localStorage.getItem = () => { throw new Error('Storage blocked') }
  assert.doesNotThrow(() => trackContactEvent('generate_lead'))
  assert.equal(calls.length, 4)
})
