# Assofinder

Une plateforme numérique (application web/tablette) inclusive et accessible (conforme RGAA 2), servant de catalogue d'activités et de pont social.

[Site web en production](https://asso-finder.vercel.app/)

## Objectif

L'outil sert à briser l'isolement social et à redonner un rôle actif aux résidents d'EHPAD. 
Il vise à :

- Lutter contre le sentiment de solitude et la sous-stimulation.4
- Favoriser la participation sociale et le lien intergénérationnel.
- Ouvrir l'EHPAD sur le tissu associatif local, en phase avec les tendances 2025.
# Documentation technique du projet

## Technologies utilisées

- React
- Tailwind CSS
- Shadcn
- Vitest
- Vercel
- WebHooks

## Justifications de nos choix techniques

Dans un contexte de temps limité et avec l’objectif de livrer un MVP fonctionnel, nous avons privilégié des technologies modernes, éprouvées et adaptées aux enjeux d’accessibilité pour les personnes malentendantes et malvoyantes.

- **React** a été choisi pour sa flexibilité et sa capacité à structurer rapidement une interface accessible, tout en facilitant la gestion des composants et des états.
- **Tailwind CSS** permet un prototypage rapide et cohérent, tout en offrant un contrôle précis sur le contraste, la lisibilité et la responsivité, éléments clés pour l’accessibilité visuelle.
- **Shadcn** repose sur des composants accessibles par défaut (ARIA, navigation clavier), ce qui réduit le risque d’erreurs d’accessibilité et accélère le développement.
- **Vercel** facilite le déploiement continu et permet une mise en ligne rapide, indispensable dans une démarche itérative centrée sur l’utilisateur.

## Contraintes liées à l’utilisation des API

Face aux limitations des API (quotas de requêtes, problèmes d’authentification et incertitude sur la fiabilité des données), nous avons opté pour l’utilisation de données mockées.
Ce choix nous a permis de garantir la stabilité du MVP, de respecter les contraintes de temps et d’assurer une expérience utilisateur cohérente.
L’intégration des API réelles est envisagée dans une phase ultérieure du projet.

## Fonctionnalités

- Accessibilité et navigation au clavier
- Saisie vocale
- Affichage des associations en liste ou en grille
- Barre de recherche
- Système de filtres
- Mise en place de raccourcis clavier

## Configuration DevOps

### Tests de composants

**Technologies utilisées :** Vitest, @testing-library/react

**Documentation :** [Guide Vitest](https://vitest.dev/guide/)

**Exemple de test :** `src/components/ui/button.test.tsx`

**Configuration du projet** (`vitest.config.ts` à la racine du projet) :

```typescript
import { defineConfig } from 'vitest/config'
import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
})
```

**Commandes de lancement des tests :**

- `npm run test chemin/vers/fichier/de/test` - Exécute un test spécifique (à lancer depuis la racine du projet)
- `npm run test` - Exécute tous les tests (à lancer depuis la racine du projet)

### Mise en production du projet

**Technologies utilisées :** Vercel, GitHub

**Documentation :**
- [Création d'un repository GitHub](https://docs.github.com/fr/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [Documentation Vercel](https://vercel.com/docs)

**Procédure :**

1. Créer un espace Vercel pour déployer l'application
2. Créer un repository GitHub pour héberger le projet
3. Choisir la stack dans Vercel et l'associer au projet GitHub
4. Configurer les commandes dans Vercel pour installer les librairies, builder le projet et le mettre en ligne

**Fonctionnement :** Mise en production automatique à chaque mise à jour de la branche `main` sur GitHub.

### Déploiement manuel

**Technologie utilisée :** GitHub Actions

**Documentation :** [Guide GitHub Actions](https://docs.github.com/fr/actions)

**Exemple :** `.github/workflows/production.yaml`

**Configuration pour le déploiement automatique :**

```yaml
name: Vercel Production Deployment

env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

on:
  push:
    tags:
      - 'deploy-*'

jobs:
  Deploy-Production:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

**Fonctionnement :** Mise en production exécutée en ligne de commande.

### Notifications des actions sur le repository

**Technologies utilisées :** WebHooks, Discord

**Procédure :**

1. Créer un serveur Discord
2. Créer un channel dédié sur Discord
3. Dans les paramètres du channel, aller dans Intégrations et créer un webhook, puis récupérer l'URL associée
4. Dans GitHub, aller dans Settings > Webhooks, créer un webhook et insérer l'URL récupérée sur Discord, puis sélectionner `application/json`

**Fonctionnement :** Ce système permet de recevoir des notifications envoyées par GitHub dans le channel Discord pour être informé de toutes les actions réalisées sur le repository par les développeurs. Vous serez notifié des succès comme des erreurs concernant les GitHub Actions, pull requests, mises en production, etc.

## Accessibilité 

Les utilisateurs peuvent naviguer sur le site sans avoir besoin de la souris. Ils peuvent également effectuer des saisies via la commande vocale.

### Comment ça marche ? 
- `Tab` : Aller à l'élement focusable suivant
- `Shift + Tab` : Revenir à l'élément précédent
- `Enter ou Space` : Activer un bouton ou un lien 
- `Esc` : Fermer une boite de dialog ou un Popup
- `↑ ↓ ← →` : Navigation dans le menu ou barre de navigation

## Installation du projet

```bash

git clone https://github.com/VictorSulivan/AssoFinder.git
cd AssoFinder && npm install

```

## Démarrage du projet

```bash

npm run dev

```

## Participants

- Matéo GUILLEMIN (IWID)
- Thomas SAUVAGE (LDF)
- Hajar KHOUYA (MTD)
- François HATEM (MTD)
- Dan ELENGA (LDF)
