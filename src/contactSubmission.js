import { SITE_EMAIL } from './seo.js'

export function isSubmissionAccepted(response, result) {
  return response.ok && (result?.success === true || result?.success === 'true')
}

export async function submitContact(payload, { signal, fetcher = fetch } = {}) {
  const response = await fetcher(`https://formsubmit.co/ajax/${SITE_EMAIL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
    signal,
  })
  const result = await response.json()
  if (!isSubmissionAccepted(response, result)) throw new Error('Submission not confirmed')
}
