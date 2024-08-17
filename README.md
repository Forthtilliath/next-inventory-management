# Inventory Management

![License](https://img.shields.io/github/license/forthtilliath/next-inventory-management?style=for-the-badge) ![Next.js](https://img.shields.io/badge/next.js-%2301BDFC.svg?style=for-the-badge&logo=next.js&logoColor=white) [![Express.js](https://img.shields.io/badge/Express.js-4.19-blue?style=for-the-badge&logo=express)](https://expressjs.com/) [![AdonisJS 6.12](https://img.shields.io/badge/AdonisJS-6.12-blue?style=for-the-badge&logo=adonisjs)](https://adonisjs.com/) ![Prisma](https://img.shields.io/badge/Prisma-47848D?style=for-the-badge&logo=prisma&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white&style=for-the-badge)

## Introduction

### Motivations Initiales

L'objectif de ce projet est de revenir à Next (exclusivement pour le frontend dans ce projet) et Express pour la gestion du backend.

Dans la partie frontend, le projet s'appuie sur redux-toolkit, une technologie dont j'avais fait défaut depuis quelque temps. Cette expérience offre l'opportunité d'apprécier les évolutions et les meilleures pratiques actuelles.

Quant à la partie backend, elle constitue avant tout une occasion de découvrir les transformations récentes avec Express et de se familiariser avec les meilleures méthodes de travail.

### Description

Ce projet vise à développer un tableau de bord de gestion de stock complet, en utilisant Next.js pour le frontend. Il est stylisé avec Tailwind CSS et intègre un Data Grid de Material UI pour la manipulation de données complexes. La gestion de l'état est simplifiée avec Redux Toolkit, complétée par Redux Toolkit Query pour la récupération de données.

Le backend repose sur Node.js, utilisant Prisma comme ORM pour faciliter les interactions avec la base de données.

### Source d'Inspiration

Ce projet trouve son origine dans une vidéo intitulée "[Build Nextjs Inventory Management Dashboard](https://www.youtube.com/watch?v=ddKQ8sZo_v8)", créée par [EdRoh](hhttps://www.youtube.com/@EdRohDev), un passionné de développement web. Cette vidéo a suscité chez moi une véritable curiosité technologique, m'incitant à refaire le backend en AdonisJS, la version 6.

## Table des Matières

- [Inventory Management](#inventory-management)
  - [Introduction](#introduction)
    - [Motivations Initiales](#motivations-initiales)
    - [Description](#description)
    - [Source d'Inspiration](#source-dinspiration)
  - [Table des Matières](#table-des-matières)
  - [Les principales librairies](#les-principales-librairies)
    - [Front end](#front-end)
    - [Back end](#back-end)
      - [Version avec Express](#version-avec-express)
      - [Version avec Adonis](#version-avec-adonis)
  - [Installation](#installation)
  - [Compétences Acquises](#compétences-acquises)
    - [Front-end](#front-end-1)
    - [Back-end](#back-end-1)

## Les principales librairies

Ce projet repose sur plusieurs dépendances essentielles pour son bon fonctionnement.

### Front end

**@mui/x-data-grid** : Spécifiquement utilisé pour les fonctionnalités de grille de données, offrant une puissante solution pour afficher et manipuler des tableaux de données complexes.

**@reduxjs/toolkit** : Utilisé pour la gestion de l'état global de l'application, notamment pour la sidebar et le mode sombre, ainsi que pour son système de requête `createApi`. Cela simplifie la configuration et l'utilisation de Redux, rendant le développement d'applications plus efficace et moins verbeux.

**lucide-react** : Offre une collection de composants SVG personnalisables pour une meilleure intégration avec Material-UI, permettant une grande flexibilité dans la conception des interfaces utilisateur.

**tailwindcss** : Un framework CSS utility-first qui favorise une conception rapide et flexible des interfaces utilisateur, sans compromettre la personnalisation et la compatibilité.

**TypeScript** : Langage de programmation typé qui améliore la maintenabilité et la productivité du code source, en ajoutant des vérifications de type statiques lors de la compilation. TypeScript aide à prévenir les erreurs de type et facilite la collaboration entre les membres d'équipe.

### Back end

#### Version avec Express

**prisma** : Utilisé comme ORM (Object Relational Mapping) pour faciliter les interactions avec la base de données, offrant une abstraction pour la manipulation des données relationnelles.

**zod & zod-prisma-types** : 
- **zod** : Une bibliothèque pour la validation des schémas, permettant de valider les structures de données selon des schémas définis. Cela garantit que les données traitées par l'application correspondent aux attentes et aux contraintes de modèle.
- **zod-prisma-types** : Intégre zod avec Prisma, générant des types TypeScript basés sur les schémas de la base de données Prisma. Cela améliore la sécurité des types et facilite le travail avec les données dans le code TypeScript.

**express** : Un framework minimaliste et flexible pour Node.js, utilisé pour créer des applications web et des API rapidement et facilement. Express offre une variété de fonctionnalités pour gérer les requêtes HTTP, les middlewares, et la configuration des routes.

**dotenv** : Permet de charger des variables d'environnement depuis un fichier `.env` dans l'application Node.js. Cela facilite la gestion des secrets et des configurations sensibles.

**cors** : Middleware pour gérer les requêtes CORS (Cross-Origin Resource Sharing). Il permet de configurer les politiques CORS pour contrôler les requêtes provenant de différents domaines.

**helmet** : Un middleware pour aider à protéger les applications Express contre certains types d'attaques courantes en configurant des en-têtes HTTP de sécurité.

**morgan** : Un middleware d'enregistrement HTTP pour Express. Il simplifie le suivi des requêtes entrantes, ce qui est utile pour le débogage et la surveillance des performances.

**typescript** : Langage de programmation typé qui améliore la maintenabilité et la productivité du code source, en ajoutant des vérifications de type statiques lors de la compilation. TypeScript aide à prévenir les erreurs de type et facilite la collaboration entre les membres d'équipe.

#### Version avec Adonis

**adonisjs/framework** : Le framework AdonisJS lui-même, un framework Node.js moderne et expressif, conçu pour être simple, rapide et robuste. AdonisJS offre une architecture MVC (Modèle-Vue-Contrôleur) pour organiser le code de manière claire et maintenable.

**prisma** : Utilisé comme ORM (Object Relational Mapping) pour faciliter les interactions avec la base de données, offrant une abstraction pour la manipulation des données relationnelles.

**@arthurfranckpat/adonis-prisma** : Un package personnalisé qui fournit une intégration étroite entre AdonisJS et Prisma, simplifiant la configuration et l'utilisation de Prisma dans AdonisJS. Ce package permet d'ajouter une propriété `prisma` au `HttpContext` des contrôleurs, facilitant ainsi l'accès et l'utilisation de Prisma dans les opérations de gestion des données.

**typescript** : Langage de programmation typé qui améliore la maintenabilité et la productivité du code source, en ajoutant des vérifications de type statiques lors de la compilation. TypeScript aide à prévenir les erreurs de type et facilite la collaboration entre les membres d'équipe.

## Installation

Pour installer et exécuter ce projet localement:

1. Clonez le dépôt:
```bash
git clone https://github.com/Forthtilliath/next-inventory-management.git
```

2. Accédez au dossier du projet:
```bash
cd next-inventory-management
```

3. Installez les dépendances:
```bash
npm i
cd client && npm i
cd server && npm i
```

5. Démarrez le projet:
```bash
npm run dev
```

## Compétences Acquises

Durant le développement de ce projet, j'ai pu approfondir et explorer de nouvelles compétences, tant sur le front-end qu'au niveau du back-end.

### Front-end

**Exploration de Redux Toolkit** : Après avoir exploré brièvement Zustand, j'ai redécouvert le potentiel de Redux Toolkit pour la gestion de l'état global de l'application. L'utilisation de `createApi` a révélé sa force en automatisant la gestion des appels API, ce qui a considérablement simplifié le processus de développement.

**Gestion du Dark Mode** : J'ai expérimenté une nouvelle méthode pour gérer le switch entre le mode clair et sombre, en ajustant les couleurs via un plugin personnalisé de Tailwind CSS. Cette approche a enrichi ma compréhension de la personnalisation des thèmes et des plugins dans Tailwind.

### Back-end

**Développement initial avec Express** : Initialement, j'ai suivi une vidéo pour développer le back-end avec Express. Bien que cette démarche ait été instructive, elle ne m'a pas permis d'approfondir mes compétences dans cette technologie.

**Découverte de Zod et Zod-Prisma-Types** : La découverte de ces outils a marqué un tournant significatif dans mon projet. En générant des types TypeScript à partir des schémas Prisma, j'ai pu intégrer une validation robuste et une sécurité des types au niveau du front-end, améliorant ainsi la qualité globale du code.

**Transition vers AdonisJS** : Suite à ma découverte récente d'AdonisJS, j'ai refait le back-end en utilisant ce framework. Cette transition m'a permis d'appliquer les connaissances acquises et de mieux comprendre les avantages d'AdonisJS, notamment sa simplicité et sa modularité.

Ces expériences ont non seulement enrichi mes compétences techniques mais ont également stimulé ma créativité et ma capacité à résoudre des problèmes complexes. Elles ont joué un rôle crucial dans le développement d'une application robuste et performante.
