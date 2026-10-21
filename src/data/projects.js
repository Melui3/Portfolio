// Projets présentés dans le portfolio. Les concepts et démos sont identifiés explicitement.
export const projectCategories = [
  { key: 'website', label: 'Site vitrine', plural: 'Sites vitrines', intro: "Des identités singulières et des parcours clairs pour présenter une activité ou un univers.", empty: 'Les prochains sites arrivent ici.' },
  { key: 'application', label: 'Application', plural: 'Applications & jeux', intro: "Des expériences interactives où chaque décision fait partie du parcours.", empty: 'Les prochaines applications arrivent ici.' },
  { key: 'tool', label: 'Outil', plural: 'Outils', intro: "Des interfaces conçues pour organiser le travail et simplifier le quotidien.", empty: 'Les prochains outils arrivent ici.' },
]

export const projects = [
  {
    "id": "f1-manager-2026",
    "badges": ["Projet passion"],
    "title": "F1 Manager 2026",
    "tagline": "Le paddock devient votre terrain de jeu",
    "description": "Choisir son écurie, découvrir sa monoplace en 3D et construire sa saison. Un jeu de gestion dans le navigateur où stratégie, budget et décisions de course donnent le rythme.",
    "tags": [
      "Jeu de gestion",
      "Garage 3D",
      "Stratégie de course",
      "Sauvegarde locale"
    ],
    "url": "https://melui3.github.io/F1-Manager-2026/",
    "ctaLabel": "Jouer à F1 Manager",
    "github": null,
    "image": "/projects/f1-manager-2026-refresh.jpg",
    "category": "application",
    "status": "live",
    "details": [
      {
        "label": "L'objectif",
        "body": "Permettre aux passionnés de Formule 1 de vivre une saison depuis le stand : choisir une écurie, miser sur un pilote et faire évoluer son équipe. Je voulais une expérience dans laquelle on prend des décisions, on en voit les conséquences et on retrouve sa progression en revenant jouer."
      },
      {
        "label": "L'identité visuelle",
        "body": "Le noir carbone, le rouge course et les textes blancs reprennent les codes du paddock. Le garage et les courses en 3D apportent le plaisir de découvrir les monoplaces et de suivre l’action, tandis que les couleurs et les repères visuels permettent de distinguer rapidement les équipes et les informations importantes."
      },
      {
        "label": "La démarche UX",
        "body": "Le parcours accompagne le joueur étape par étape : choisir son écurie, sélectionner son pilote, puis retrouver la prochaine course dans le calendrier. Pendant le Grand Prix, les choix de rythme, de pneus et d’arrêt aux stands restent accessibles. Le budget, les classements et la sauvegarde permettent ensuite de comprendre où en est son équipe et de reprendre sa partie."
      },
      {
        "label": "Le responsive",
        "body": "Sur ordinateur, le joueur dispose d’une vue d’ensemble pour comparer les équipes et suivre la course. Sur téléphone, les informations se réorganisent et les commandes restent accessibles au toucher. L’objectif est de pouvoir consulter sa saison et continuer à jouer sans perdre les repères essentiels."
      }
    ]
  },
  {
    "id": "prospect",
    "title": "Prospect",
    "tagline": "Moins de fichiers. Une vue claire sur la prospection.",
    "description": "Recherches locales, fiches prospects, campagnes et historique de contact réunis dans un même espace. La démo permet de découvrir le parcours avec des données fictives et des actions simulées.",
    "tags": [
      "Outil interne",
      "Dashboard",
      "Suivi de campagnes",
      "Démo anonymisée"
    ],
    "url": "https://melui3.github.io/Prospect/?demo=1#/dashboard",
    "ctaLabel": "Ouvrir la démo",
    "github": null,
    "image": "/projects/prospect-demo-refresh.jpg",
    "category": "tool",
    "status": "demo",
    "details": [
      {
        "label": "L'objectif",
        "body": "Créer un outil personnel pour organiser ma prospection sans me disperser entre plusieurs fichiers, recherches et notes. L'idée était de centraliser les prospects, garder une trace des campagnes et savoir rapidement quoi faire ensuite."
      },
      {
        "label": "L'identité visuelle",
        "body": "L'interface reprend une direction sombre, sobre et concentrée, proche de l'univers Nate Os. Le but n'était pas de faire une application décorative, mais un espace de travail clair, lisible et agréable à utiliser longtemps."
      },
      {
        "label": "La démarche UX",
        "body": "Le parcours a été pensé autour d'un vrai usage: chercher des prospects, les classer, consulter leurs informations, suivre les statuts, préparer des messages et garder une vue d'ensemble. La démo montre le fonctionnement sans exposer ma vraie base de données."
      },
      {
        "label": "Le responsive",
        "body": "L'outil devait rester consultable sur mobile pour vérifier une information, suivre une campagne ou consulter une fiche rapidement. Les actions principales restent visibles, mais l'usage principal reste volontairement plus confortable sur ordinateur."
      }
    ]
  },
  {
    "id": "les-pattes-heureuses",
    "title": "Les Pattes Heureuses",
    "tagline": "La confiance commence avant la première visite",
    "description": "Un cabinet vétérinaire fictif à Rennes, présenté avec douceur et clarté. Équipe, soins, tarifs et préparation du rendez-vous accompagnent les propriétaires, du premier doute aux informations pratiques.",
    "tags": [
      "Site vitrine",
      "Santé animale",
      "Parcours de rendez-vous",
      "Responsive"
    ],
    "url": "https://melui3.github.io/les-pattes-heureuses/",
    "github": null,
    "image": "/projects/les-pattes-heureuses-refresh.jpg",
    "category": "website",
    "badges": ["Concept fictif"],
    "status": "live",
    "details": [
      {
        "label": "L’objectif",
        "body": "Rendre un cabinet de proximité immédiatement rassurant : savoir qui accueille son animal, comprendre les soins et préparer sa visite sans chercher les informations essentielles."
      },
      {
        "label": "L’identité visuelle",
        "body": "Un vert profond, des fonds ivoire et des photographies lumineuses installent une atmosphère calme. Les grandes courbes et la typographie mêlant sobriété et italique prolongent cette attention au soin."
      },
      {
        "label": "Le parcours",
        "body": "La présentation de l’équipe, les soins à déplier et les tarifs donnent des repères concrets. Le formulaire prépare un récapitulatif de demande : aucun rendez-vous réel ni envoi de données dans ce concept."
      },
      {
        "label": "Les détails utiles",
        "body": "Horaires, accès et consignes en cas d’urgence sont regroupés pour être retrouvés rapidement. Les conseils de première visite aident à anticiper les questions du propriétaire."
      }
    ]
  },
  {
    "id": "le-coup-de-feu",
    "title": "Le Coup de Feu",
    "tagline": "Une cuisine précise. Une expérience qui a du répondant.",
    "description": "Un restaurant fictif inspiré de Hell’s Kitchen : une carte filtrable, deux brigades à choisir et une réservation transformée en ticket de service. Une identité théâtrale qui reste simple à parcourir.",
    "tags": [
      "Restaurant fictif",
      "Carte interactive",
      "Réservation démo",
      "Direction artistique"
    ],
    "url": "https://melui3.github.io/le-coup-de-feu/",
    "github": null,
    "image": "/projects/le-coup-de-feu-refresh.jpg",
    "category": "website",
    "badges": ["Concept fictif"],
    "status": "live",
    "details": [
      {
        "label": "L’objectif",
        "body": "Faire ressentir l’énergie d’un service avant même de découvrir la carte. Ce concept indépendant joue avec les codes de Hell’s Kitchen et transforme la visite en petite expérience narrative."
      },
      {
        "label": "L’identité visuelle",
        "body": "Charbon, crème et rouge feu, titres condensés et scènes de cuisine donnent le ton. Les photographies de plats équilibrent l’humour et la tension par une présentation gourmande et soignée."
      },
      {
        "label": "Les interactions",
        "body": "Filtrer les plats, rejoindre une brigade rouge ou bleue, choisir sa place et générer un ticket de réservation : chaque interaction prolonge le thème. Le compteur de jours sans incendie ajoute une surprise."
      },
      {
        "label": "Un concept explicite",
        "body": "Le restaurant, les tarifs et les avis sont fictifs. La réservation produit un ticket de démonstration sans envoyer de données, tout en présentant un parcours complet et compréhensible."
      }
    ]
  },
  {
    "id": "piastries",
    "title": "Piastries",
    "tagline": "La gourmandise en pole position",
    "description": "Une pâtisserie fictive aux couleurs papaye et crème, avec la F1 en fil conducteur. Carte de produits, panier, profil invité et pass de retrait composent une expérience de commande entièrement locale.",
    "tags": [
      "Identité de marque",
      "Panier interactif",
      "Commande démo",
      "Univers F1"
    ],
    "url": "https://melui3.github.io/Piastries/",
    "github": null,
    "image": "/projects/piastries-refresh.jpg",
    "category": "website",
    "badges": ["Projet passion", "Concept fictif"],
    "status": "live",
    "details": [
      {
        "label": "L’objectif",
        "body": "Aller au-delà d’une vitrine : donner envie de découvrir les pâtisseries, composer un panier et aller jusqu’au retrait fictif. La référence à Oscar Piastri et McLaren nourrit le ton sans empêcher de comprendre le parcours."
      },
      {
        "label": "L’identité visuelle",
        "body": "Orange papaye, crème et touches sombres mettent les produits au premier plan. Les noms, les badges et le vocabulaire du paddock relient l’identité de marque à chaque étape de la visite."
      },
      {
        "label": "Le parcours de commande",
        "body": "La carte se filtre par catégories. Les produits ajoutés alimentent le panier et le stand de retrait ; le parcours de démonstration mène ensuite à un pass paddock, sans vente réelle."
      },
      {
        "label": "La démo",
        "body": "Un profil invité permet de découvrir l’espace compte sans adresse email. Panier, commandes et profil restent dans le navigateur : une expérience à essayer, avec un statut fictif clairement annoncé."
      }
    ]
  },
  {
    "id": "sunstrider-agency",
    "title": "Sunstrider",
    "tagline": "La mémoire du soleil, racontée à travers une interface",
    "description": "Des archives immersives consacrées à la dynastie des Haut-Soleil. Portraits, chronologie et exploration de Quel’Thalas composent un parcours éditorial où l’histoire reste aussi importante que l’atmosphère.",
    "tags": [
      "Univers Warcraft",
      "Design éditorial",
      "Archives interactives",
      "Direction artistique"
    ],
    "url": "https://melui3.github.io/sunstrider-agency/",
    "github": null,
    "image": "/projects/sunstrider-agency-refresh.jpg",
    "category": "website",
    "badges": ["Projet passion"],
    "status": "live",
    "details": [
      {
        "label": "L’objectif",
        "body": "Raconter la maison Sunstrider à travers ses figures, ses lieux et ses grandes ruptures. Ce projet de fans indépendant propose plusieurs portes d’entrée dans l’univers, y compris pour un visiteur qui le découvre."
      },
      {
        "label": "L’identité visuelle",
        "body": "Ivoire, or patiné et cramoisi accompagnent les illustrations de Quel’Thalas. De grands titres, des respirations généreuses et une composition éditoriale évoquent des archives précieuses plutôt qu’une simple succession de fiches."
      },
      {
        "label": "La navigation",
        "body": "La dynastie, la chronologie, les territoires et l’héritage structurent la visite. Les portraits mènent aux personnages, les époques aux récits ; la recherche dans les archives facilite un accès plus direct."
      },
      {
        "label": "Les sources",
        "body": "Une rubrique dédiée explique les sources et la méthode. Les illustrations sont identifiées comme des interprétations artistiques et le caractère indépendant du projet est clairement indiqué."
      }
    ]
  }
]

export const projectsByCategory = (category) => category === 'all' ? projects : projects.filter((project) => project.category === category)
