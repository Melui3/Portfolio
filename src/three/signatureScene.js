import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

// A solid, twisting ribbon with separate faces and gold-cut edges.
function ribbonGeometry(curve, width, twist, thickness = 0.055) {
  const positions = []
  const indices = []
  const steps = 72
  const tangent = new THREE.Vector3()
  const side = new THREE.Vector3()
  const normal = new THREE.Vector3()
  const forward = new THREE.Vector3(0, 0, 1)

  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const center = curve.getPoint(t)
    tangent.copy(curve.getTangent(t)).normalize()
    side.crossVectors(tangent, forward).normalize().applyAxisAngle(tangent, twist(t))
    normal.crossVectors(side, tangent).normalize()
    const taper = 0.66 + 0.34 * Math.sin(Math.PI * t) ** 0.6
    for (const [u, v] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
      const point = center.clone().addScaledVector(side, width * taper * u / 2).addScaledVector(normal, thickness * v / 2)
      positions.push(point.x, point.y, point.z)
    }
  }

  const geometry = new THREE.BufferGeometry()
  const faces = [[0, 1, 4, 1, 5, 4], [2, 6, 3, 3, 6, 7]]
  for (const face of faces) {
    const start = indices.length
    for (let i = 0; i < steps; i++) face.forEach((n) => indices.push(i * 4 + n))
    geometry.addGroup(start, indices.length - start, 0)
  }
  const edgeStart = indices.length
  for (let i = 0; i < steps; i++) {
    const p = i * 4
    ;[0, 4, 2, 2, 4, 6, 1, 3, 5, 3, 7, 5].forEach((n) => indices.push(p + n))
  }
  indices.push(0, 2, 1, 1, 2, 3)
  const end = steps * 4
  indices.push(end, end + 1, end + 2, end + 1, end + 3, end + 2)
  geometry.addGroup(edgeStart, indices.length - edgeStart, 1)
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  return geometry
}

function makeSculpture() {
  const group = new THREE.Group()
  const gold = new THREE.MeshPhysicalMaterial({ color: '#d9ac60', metalness: 0.94, roughness: 0.25, clearcoat: 0.45, side: THREE.DoubleSide })
  const carmin = new THREE.MeshPhysicalMaterial({ color: '#710912', metalness: 0.64, roughness: 0.26, clearcoat: 1, clearcoatRoughness: 0.18, side: THREE.DoubleSide })
  const darkGold = new THREE.MeshStandardMaterial({ color: '#8a6230', metalness: 0.9, roughness: 0.38 })
  const pieces = []
  const paths = [
    { points: [[-1.14, -1.5, 0], [-1.26, -0.75, -0.12], [-1.18, 0.48, 0], [-1.34, 1.5, 0.03]], width: 0.56, twist: (t) => -0.28 + t * 0.9, material: carmin, travel: [-0.52, 0.16, 0.38] },
    { points: [[-1.44, 1.5, 0.07], [-0.82, 1.06, 0.25], [0, 0.02, 0.48], [0.85, -1.11, 0.18], [1.38, -1.5, 0.06]], width: 0.65, twist: (t) => 0.26 * Math.sin(t * Math.PI * 2), material: gold, travel: [0, 0.22, 1.05] },
    { points: [[1.17, -1.5, 0], [1.22, -0.4, -0.1], [1.16, 0.78, -0.16], [1.37, 1.5, 0.04]], width: 0.54, twist: (t) => 0.5 - t * 0.95, material: carmin, travel: [0.52, -0.1, 0.12] },
  ]

  paths.forEach(({ points, width, twist, material, travel }, index) => {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)))
    const mesh = new THREE.Mesh(ribbonGeometry(curve, width, twist), [material, gold])
    group.add(mesh)
    pieces.push({ mesh, travel: new THREE.Vector3(...travel), turn: (index - 1) * 0.22 })

    // Hairline inlays follow the fold, catching the light as the face turns.
    for (const offset of [-0.43, 0.43]) {
      const inlayPoints = []
      for (let i = 0; i <= 72; i++) {
        const t = i / 72
        const point = curve.getPoint(t)
        const tangent = curve.getTangent(t).normalize()
        const side = new THREE.Vector3().crossVectors(tangent, new THREE.Vector3(0, 0, 1)).normalize().applyAxisAngle(tangent, twist(t))
        const normal = new THREE.Vector3().crossVectors(side, tangent).normalize()
        point.addScaledVector(side, width * (0.66 + 0.34 * Math.sin(Math.PI * t) ** 0.6) * offset).addScaledVector(normal, 0.031)
        inlayPoints.push(point)
      }
      mesh.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(inlayPoints), 72, 0.009, 5, false), gold))
    }
  })

  const halo = new THREE.Group()
  for (const [radius, tube, arc, rotation, material] of [
    [2.08, 0.028, Math.PI * 1.63, -0.52, gold],
    [2.19, 0.007, Math.PI * 1.33, 0.28, gold],
    [1.99, 0.013, Math.PI * 0.7, 2.72, darkGold],
  ]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 8, 128, arc), material)
    ring.rotation.z = rotation
    halo.add(ring)
  }
  const tickGeometry = new THREE.BoxGeometry(0.008, 0.053, 0.012)
  const ticks = new THREE.InstancedMesh(tickGeometry, darkGold, 64)
  const dummy = new THREE.Object3D()
  for (let i = 0; i < 64; i++) {
    const angle = i / 64 * Math.PI * 1.63 - 0.52
    dummy.position.set(Math.cos(angle) * 2.14, Math.sin(angle) * 2.14, 0)
    dummy.rotation.z = angle - Math.PI / 2
    dummy.updateMatrix()
    ticks.setMatrixAt(i, dummy.matrix)
  }
  halo.add(ticks)
  halo.position.z = -0.35
  halo.rotation.set(0.13, -0.3, -0.12)
  group.add(halo)

  // Four cut-metal points echo the personal mark without using a flat logo plane.
  const jewelGeometry = new THREE.OctahedronGeometry(0.105)
  const jewels = new THREE.Group()
  for (let i = 0; i < 4; i++) {
    const angle = i * Math.PI / 2 + 0.2
    const jewel = new THREE.Mesh(jewelGeometry, gold)
    jewel.position.set(Math.cos(angle) * 2.08, Math.sin(angle) * 2.08, -0.32)
    jewel.scale.set(0.55, 1.6, 0.55)
    jewel.rotation.z = angle - Math.PI / 2
    jewels.add(jewel)
  }
  group.add(jewels)
  return { group, pieces, halo, jewels }
}

export function createSignatureScene(canvas, host, { paused: initiallyPaused, onUnavailable }) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' })
  renderer.setClearColor(0x0d0d0d, 0)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.3
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
  camera.position.z = 10

  const environmentScene = new RoomEnvironment()
  const pmrem = new THREE.PMREMGenerator(renderer)
  const environment = pmrem.fromScene(environmentScene, 0.04)
  scene.environment = environment.texture
  environmentScene.dispose()
  pmrem.dispose()

  const key = new THREE.DirectionalLight('#fff1d6', 4.5)
  key.position.set(-3, 5, 5)
  scene.add(key)
  const rim = new THREE.DirectionalLight('#ffb366', 2)
  rim.position.set(4, -1, 2)
  scene.add(rim)
  const fill = new THREE.DirectionalLight('#d4e5ef', 1.8)
  fill.position.set(-4, 0, -1)
  scene.add(fill)

  const sculpture = makeSculpture()
  const stage = new THREE.Group()
  stage.add(sculpture.group)
  scene.add(stage)

  let paused = initiallyPaused
  let expanded = false
  let visible = true
  let disposed = false
  let contextLost = false
  let raf = 0
  let lastFrame = 0
  let time = 0
  let deployment = initiallyPaused ? 0 : 1.2
  let scroll = 0
  let compact = false
  let originY = 0
  let drag = null
  let rotation = 0
  let easedRotation = 0
  const pointer = new THREE.Vector2()
  const easedPointer = new THREE.Vector2()
  const targetPointer = new THREE.Vector2()

  const draw = (dt = 0) => {
    if (disposed || contextLost) return
    if (!paused) time += dt
    const ease = paused ? 1 : 1 - Math.exp(-dt * 4)
    deployment = THREE.MathUtils.lerp(deployment, expanded ? 1 : scroll * 0.9, ease)
    if (paused) targetPointer.set(0, 0)
    else targetPointer.copy(pointer)
    easedPointer.lerp(targetPointer, ease)
    easedRotation = THREE.MathUtils.lerp(easedRotation, rotation, ease)
    sculpture.group.rotation.set(
      0.04 + easedPointer.y * 0.1,
      -0.2 + easedPointer.x * 0.2 + Math.sin(time * 0.28) * 0.1 + deployment * 0.16 + easedRotation,
      -0.08 + Math.sin(time * 0.36) * 0.026 - deployment * 0.1,
    )
    sculpture.group.position.y = originY + Math.sin(time * 0.7) * 0.052 + (paused ? 0 : scroll * 0.15)
    sculpture.pieces.forEach(({ mesh, travel, turn }) => {
      mesh.position.copy(travel).multiplyScalar(deployment)
      mesh.rotation.y = turn * deployment
      mesh.rotation.z = turn * deployment * 0.5
    })
    sculpture.halo.rotation.z = -0.12 + time * 0.045 + deployment * 0.5
    sculpture.halo.rotation.y = -0.3 + deployment * 0.5
    sculpture.jewels.rotation.z = time * 0.045
    renderer.render(scene, camera)
  }

  const animate = (now) => {
    raf = 0
    if (disposed || contextLost || paused || !visible || document.hidden) return
    const elapsed = now - lastFrame
    if (elapsed >= (compact ? 1000 / 30 : 1000 / 45)) {
      lastFrame = now
      draw(Math.min(elapsed / 1000, 0.05))
    }
    raf = requestAnimationFrame(animate)
  }
  const wake = () => {
    if (!raf && !disposed && !contextLost && !paused && visible && !document.hidden) {
      lastFrame = performance.now()
      raf = requestAnimationFrame(animate)
    }
  }
  const stop = () => { cancelAnimationFrame(raf); raf = 0 }

  const resize = () => {
    const { width, height } = host.getBoundingClientRect()
    if (!width || !height) return
    compact = width < 760
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compact ? 1.4 : 1.65))
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    const worldHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z
    const worldWidth = worldHeight * camera.aspect
    // Match the reserved visual area, including on narrow and ultrawide screens.
    const availableWidth = compact ? width * 0.84 : Math.min(width * 0.49, 760)
    const shortMobile = compact && window.innerHeight < 740
    const availableHeight = compact ? (shortMobile ? 150 : 245) : height * 0.82
    const scale = Math.min(availableWidth / width * worldWidth / 5.05, availableHeight / height * worldHeight / 5.05)
    stage.scale.setScalar(scale)
    const contentWidth = Math.min(width - (width < 1100 ? 48 : 80), 1320)
    stage.position.x = compact ? worldWidth * 0.06 : contentWidth / width * worldWidth * 0.26
    stage.position.y = compact ? worldHeight * (0.5 - (shortMobile ? 99 : 152) / height) : worldHeight * 0.012
    originY = 0
    draw()
    wake()
  }
  const onPointer = (event) => {
    if (paused) return
    if (drag && event.pointerId === drag.id) {
      rotation = THREE.MathUtils.clamp(drag.rotation + (event.clientX - drag.x) * 0.006, -0.9, 0.9)
    }
    if (event.pointerType === 'touch') return
    const bounds = host.getBoundingClientRect()
    pointer.set((event.clientX - bounds.left) / bounds.width * 2 - 1, (event.clientY - bounds.top) / bounds.height * 2 - 1)
  }
  const onLeave = () => pointer.set(0, 0)
  const onPointerDown = (event) => {
    if (paused || !event.target.closest('.signature-hitarea') || event.button !== 0) return
    drag = { id: event.pointerId, x: event.clientX, rotation }
    event.target.setPointerCapture(event.pointerId)
  }
  const onPointerEnd = () => { drag = null }
  const onScroll = () => {
    if (paused || !visible) return
    const bounds = host.getBoundingClientRect()
    scroll = THREE.MathUtils.clamp(-bounds.top / bounds.height, 0, 1)
  }
  const onVisibility = () => document.hidden ? stop() : wake()
  const onContextLost = (event) => {
    event.preventDefault()
    contextLost = true
    stop()
    onUnavailable()
  }
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) { onScroll(); wake() } else stop()
  }, { threshold: 0 })
  const resizeObserver = new ResizeObserver(resize)
  observer.observe(host)
  resizeObserver.observe(host)
  host.addEventListener('pointermove', onPointer, { passive: true })
  host.addEventListener('pointerleave', onLeave)
  host.addEventListener('pointerdown', onPointerDown)
  host.addEventListener('pointerup', onPointerEnd)
  host.addEventListener('pointercancel', onPointerEnd)
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('visibilitychange', onVisibility)
  canvas.addEventListener('webglcontextlost', onContextLost)
  resize()
  wake()

  return {
    setState(next) {
      paused = next.paused
      expanded = next.expanded
      if (paused) { stop(); draw() } else wake()
    },
    reset() {
      pointer.set(0, 0)
      rotation = 0
      time = 0
      if (paused) draw()
    },
    dispose() {
      disposed = true
      stop()
      observer.disconnect()
      resizeObserver.disconnect()
      host.removeEventListener('pointermove', onPointer)
      host.removeEventListener('pointerleave', onLeave)
      host.removeEventListener('pointerdown', onPointerDown)
      host.removeEventListener('pointerup', onPointerEnd)
      host.removeEventListener('pointercancel', onPointerEnd)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onVisibility)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      const geometries = new Set()
      const materials = new Set()
      scene.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry)
        if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => materials.add(material))
      })
      geometries.forEach((geometry) => geometry.dispose())
      materials.forEach((material) => material.dispose())
      environment.dispose()
      renderer.dispose()
    },
  }
}
