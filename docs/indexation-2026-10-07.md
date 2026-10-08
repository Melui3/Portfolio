# Contrôle d’indexation — 7 octobre 2026

Domaine : https://nathaniel-dev.fr/

## Observations sur la version publiée

- La recherche Google `site:nathaniel-dev.fr` affiche l’accueil avec le titre « Nathaniel Dujardin - Développeur Web Freelance » et sa description. Un seul résultat était visible lors du contrôle. Cette recherche n’est pas un inventaire exhaustif de l’index Google.
- Les 10 URL du sitemap répondent HTTP 200. Chaque page a un titre et une description dédiés, une URL canonique cohérente et une balise `index, follow`. Aucun en-tête X-Robots-Tag bloquant observé.
- `/projets` aboutit à `/projets/`, conformément à l’URL canonique.
- `robots.txt` autorise l’exploration et déclare le sitemap. Le sitemap est accessible et liste les 10 routes publiques.
- Une URL inexistante répond HTTP 404 avec `noindex, follow` dans le HTML initial.
- Après exécution de React, deux blocs JSON-LD Person/WebSite/WebPage sont présents. Le bloc initial reste figé lors des navigations ; le second est mis à jour.
- Le code client applique systématiquement `index, follow`, y compris à une URL inconnue, et lui attribue les métadonnées de l’accueil.
- Les fichiers HTML initiaux contiennent un conteneur React vide. Le texte des pages nécessite donc le rendu JavaScript. Cela ne prouve pas une absence d’indexation ; un prérendu statique au build serait une amélioration possible sans backend d’hébergement.
- La version en ligne présente encore Honey Group : les modifications locales de ce chantier ne sont pas publiées.

## Corrections locales effectuées

- Un seul bloc JSON-LD identifié par `structured-data`, réutilisé à chaque navigation.
- Métadonnées spécifiques pour les pages inconnues, maintenues en `noindex, follow`.
- Véritable écran « Page introuvable » et mise à jour des métadonnées du fichier de secours 404.html.
- Huit tests automatisés passent ; les métadonnées générées des dix pages et de la 404 sont vérifiées.

## Limite du contrôle

Search Console n’est pas connecté dans le navigateur disponible. Le nombre exact de pages indexées, les motifs d’exclusion, la dernière exploration et la canonique choisie par Google ne sont donc pas vérifiés.

Après publication, inspecter l’accueil, `/projets/` et `/services/` dans Search Console, vérifier le rapport « Indexation des pages » et le sitemap déclaré, puis demander une nouvelle exploration des pages modifiées. Aucun envoi à Google ni déploiement n’a été effectué pendant cet audit.

## Références

- [Limites de la recherche site:](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site)
- [Inspection des URL](https://developers.google.com/search/blog/2018/06/new-url-inspection-tool-more-in-search)
- [JavaScript et indexation](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
