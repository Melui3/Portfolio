export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <div className="mb-14">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">À propos</p>
        <h1 className="font-display text-5xl text-cream mb-4">Qui je suis</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Texte principal */}
        <div className="md:col-span-2 space-y-6 font-body text-parchment/80 leading-relaxed">
          <p>
            Je suis développeur web freelance, spécialisé dans la création de sites
            et d'applications sur-mesure. Mon approche est simple : comprendre vos
            besoins réels, vous expliquer ce que je fais en langage humain, et
            livrer quelque chose qui fonctionne vraiment.
          </p>
          <p>
            J'ai choisi le freelance parce que je crois aux relations directes, sans
            intermédiaire. Quand vous travaillez avec moi, vous avez affaire à la
            personne qui code votre site — pas à un commercial qui transmet à une
            équipe.
          </p>
          <p>
            Mon terrain de jeu : React pour des interfaces modernes, Django pour
            des backends robustes, et une attention particulière au design — parce
            qu'un beau site qui convertit, c'est pas incompatible.
          </p>
        </div>

        {/* Sidebar infos */}
        <div className="space-y-6">
          <div>
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Stack</p>
            <ul className="font-body text-sm text-muted space-y-1">
              <li>React + Vite</li>
              <li>TailwindCSS</li>
              <li>Django REST Framework</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm text-gold tracking-widest uppercase mb-3">Pour qui</p>
            <ul className="font-body text-sm text-muted space-y-1">
              <li>Indépendants & freelances</li>
              <li>Associations</li>
              <li>Petites entreprises</li>
              <li>Artisans & commerçants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
