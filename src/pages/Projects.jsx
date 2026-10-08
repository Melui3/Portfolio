import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react'
import { projectCategories, projects, projectsByCategory } from '../data/projects'
import ProjectPreview from '../components/ProjectPreview'
import '../styles/projects.css'

const statusLabels = { live: 'En ligne', demo: 'Démo interactive', wip: 'En cours', soon: 'Bientôt' }
const featured = projects.find((project) => project.id === 'f1-manager-2026')

function ProjectCard({ project, selected, number }) {
  const [open, setOpen] = useState(selected)
  useEffect(() => { if (selected) setOpen(true) }, [selected])
  const canVisit = ['live', 'demo'].includes(project.status) && project.url
  const preview = <ProjectPreview project={project} />
  return (
    <article id={`project-${project.id}`} className="project-card scroll-reveal">
      <div className="project-card-art">
        <span className="project-card-number" aria-hidden="true">{number}</span>
        {canVisit ? <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-preview-link" aria-label={`Découvrir ${project.title} — nouvel onglet`}>{preview}</a> : preview}
      </div>
      <div className="project-card-copy">
        <p className={`project-status ${canVisit ? 'project-status-live' : ''}`}><span aria-hidden="true" />{statusLabels[project.status]}</p>
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label="Caractéristiques du projet">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <div className="project-card-actions">
          {canVisit && <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-visit">{project.ctaLabel || 'Explorer le site'}<ArrowUpRight size={17} aria-hidden="true" /></a>}
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>}
          {project.details && <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`details-${project.id}`} className="project-details-toggle">{open ? 'Fermer la démarche' : 'La démarche'}<ChevronDown size={16} aria-hidden="true" /></button>}
        </div>
        {project.details && <div id={`details-${project.id}`} hidden={!open} className="project-details">{project.details.map((detail) => <div key={detail.label}><h4>{detail.label}</h4><p>{detail.body}</p></div>)}</div>}
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [params] = useSearchParams()
  const selectedProject = projects.find((project) => project.id === params.get('projet'))?.id
  useEffect(() => { if (selectedProject) setFilter('all') }, [selectedProject])
  useEffect(() => {
    if (!selectedProject || filter !== 'all') return
    const frame = requestAnimationFrame(() => document.getElementById(`project-${selectedProject}`)?.scrollIntoView({ block: 'start', behavior: 'instant' }))
    return () => cancelAnimationFrame(frame)
  }, [selectedProject, filter])
  const categories = filter === 'all' ? projectCategories : projectCategories.filter((category) => category.key === filter)
  return (
    <div className="projects-page">
      <section className="projects-intro">
        <div className="projects-intro-copy">
          <p className="projects-eyebrow"><span aria-hidden="true">✦</span> Design & développement · Portfolio</p>
          <h1>Des idées.<br />Du caractère.<br /><em>Des expériences.</em></h1>
          <p>Une saison à gagner, un quotidien à simplifier, une histoire à explorer. Chaque projet a son univers. Chaque interface, sa raison d’être.</p>
          <a href="#collection" className="projects-discover">Explorer les {projects.length} projets <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
        <Link to="/projets?projet=f1-manager-2026" onClick={() => setFilter('all')} className="projects-feature" aria-label="Découvrir le projet F1 Manager 2026">
          <div className="projects-feature-heading"><span><Sparkles size={15} aria-hidden="true" /> À vous de jouer</span><span>La sélection</span></div>
          <ProjectPreview project={featured} priority />
          <div className="projects-feature-caption"><div><p>Gestion · Stratégie · Garage 3D</p><h2>F1 Manager 2026</h2></div><span className="projects-round-arrow"><ArrowUpRight size={25} aria-hidden="true" /></span></div>
        </Link>
      </section>
      <div id="collection" className="projects-collection">
        <div className="projects-collection-heading"><p className="projects-eyebrow">La collection</p><p aria-live="polite">{projectsByCategory(filter).length} projets à découvrir</p></div>
        <div className="project-filters" aria-label="Filtrer les projets">
          {[{ key: 'all', label: 'Tout explorer' }, ...projectCategories.map((category) => ({ key: category.key, label: category.plural }))].map(({ key, label }) => <button key={key} type="button" onClick={() => setFilter(key)} aria-pressed={filter === key}>{label}<span>{projectsByCategory(key).length.toString().padStart(2, '0')}</span></button>)}
        </div>
        <div className="project-sections">{categories.map((category) => {
          const items = projectsByCategory(category.key)
          return <section key={category.key} className="project-category" aria-labelledby={`category-${category.key}`}>
            <div className="project-category-heading"><span aria-hidden="true">{(projectCategories.indexOf(category) + 1).toString().padStart(2, '0')}</span><div><h2 id={`category-${category.key}`}>{category.plural}</h2><p>{category.intro}</p></div></div>
            <div className={`project-grid ${items.length === 1 ? 'project-grid-single' : ''}`}>{items.map((project) => <ProjectCard key={project.id} project={project} selected={project.id === selectedProject} number={(projects.indexOf(project) + 1).toString().padStart(2, '0')} />)}</div>
            {!items.length && <p>{category.empty}</p>}
          </section>
        })}</div>
      </div>
      <section className="projects-contact scroll-reveal"><span className="projects-contact-sigil" aria-hidden="true">✦</span><p className="projects-eyebrow">Le prochain univers, c’est le vôtre.</p><h2>Donnons du caractère<br />à votre projet.</h2><p>Une activité, une idée, un besoin à rendre plus simple.<br />Tout commence par une conversation.</p><Link to="/contact" className="project-visit">Parlons de votre projet <ArrowUpRight size={18} aria-hidden="true" /></Link><Link to="/services" className="projects-services">Découvrir les prestations <ArrowRight size={16} aria-hidden="true" /></Link></section>
    </div>
  )
}
