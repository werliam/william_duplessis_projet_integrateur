# Météo multi-villes — Projet intégrateur 420-710

Application React qui affiche la météo de villes du monde, avec une liste de villes favorites.

Projet intégrateur du cours 420-710-AH (Cadriciel Web côté client), Collège Ahuntsic — William Duplessis.

## Pages

| Page | Route | Description |
|---|---|---|
| Tableau de bord | `/` | Affiche les villes aimées (favoris) |
| Recherche de ville | `/rechercheVille` | Affiche 20 villes au hasard et une barre de recherche |
| Ville | `/ville/:id` | Affiche la météo d'une ville précise, quand on clique dessus |
| Page 404 | `*` | Page affichée quand l'adresse n'existe pas |

## API utilisées

- [Open-Meteo](https://open-meteo.com/) : météo et géocodage (recherche de ville)
- [CountriesNow](https://countriesnow.space/) : liste de villes du monde

Weather data by [Open-Meteo.com](https://open-meteo.com/)

## Installation locale

```bash
git clone https://github.com/werliam/william_duplessis_projet_integrateur.git
cd william_duplessis_projet_integrateur
npm install
npm run dev
```

Puis ouvrir l'adresse affichée dans le terminal (par défaut http://localhost:5173).

#reed me cree avec ia 👀