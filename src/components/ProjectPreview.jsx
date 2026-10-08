import { ArrowUpRight } from 'lucide-react'

export default function ProjectPreview({ project, priority = false }) {
  const image = `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`
  return (
    <div className="project-preview">
      <div className="project-browser" aria-hidden="true">
        <span className="project-browser-dots"><i /><i /><i /></span>
        <span>{project.title}</span><ArrowUpRight size={13} />
      </div>
      <div className="project-preview-screen">
        <img src={image} alt={`Aperçu de ${project.title}`} loading={priority ? 'eager' : 'lazy'} fetchpriority={priority ? 'high' : 'auto'} width="1280" height="720" />
      </div>
    </div>
  )
}
