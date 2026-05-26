export default function Legal() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <div className="mb-14">
        <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">Informations légales</p>
        <h1 className="font-display text-5xl text-cream mb-4">Mentions légales</h1>
      </div>

      <div className="space-y-10 font-body text-parchment/80 leading-relaxed">

        <section>
          <h2 className="font-display text-xl text-cream mb-3">Éditeur du site</h2>
          <p>Nathaniel Dujardin</p>
          <p>Développeur web freelance — activité en cours de création</p>
          <p>France</p>
          <p>
            <a href="mailto:3d.nathaniel1@gmail.com" className="text-gold hover:text-cream transition-colors duration-200">
              3d.nathaniel1@gmail.com
            </a>
          </p>
        </section>

        <div className="separator" />

        <section>
          <h2 className="font-display text-xl text-cream mb-3">Hébergement</h2>
          <p>GitHub Pages</p>
          <p className="text-muted text-sm">GitHub, Inc. — 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</p>
          <p className="text-muted text-sm">
            <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-parchment transition-colors duration-200">
              pages.github.com
            </a>
          </p>
        </section>

        <div className="separator" />

        <section>
          <h2 className="font-display text-xl text-cream mb-3">Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle via un serveur. Le formulaire de contact
            ouvre votre client mail via le protocole <code className="text-gold/80 text-sm">mailto:</code> — aucune
            information n'est transmise ni stockée par ce site.
          </p>
          <p className="mt-3">
            Aucun cookie tiers, aucun outil de tracking ni de publicité n'est utilisé.
          </p>
        </section>

        <div className="separator" />

        <section>
          <h2 className="font-display text-xl text-cream mb-3">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, visuels, code) est la propriété exclusive de
            Nathaniel Dujardin, sauf mention contraire. Toute reproduction, même partielle, est
            interdite sans autorisation préalable.
          </p>
        </section>

      </div>
    </div>
  )
}
