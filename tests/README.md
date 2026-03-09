# Tests - Geek Zone

## Vue d'ensemble

Ce dossier contient les tests pour 3 fonctionnalites :

1. Recherche (Review)
2. Bouton like (Accueil)
3. Popup resultats (Question)

Couverture demandee :

- 50 tests unitaires (nominal, exception, limites)
- 5 tests d'integration (partiel)

## Installation

```bash
npm install
```

## Executer les tests

### Tous les tests unitaires + integration

```bash
npm test
```

### Mode watch

```bash
npm run test:watch
```

### Un fichier specifique

```bash
npx vitest tests/unit/ReviewComponent.spec.js
npx vitest tests/integration/ReviewComponent.integration.spec.js
```

### Tests E2E

```bash
npm run serve
npm run test:e2e
```

## Structure

```
tests/
├── unit/
│   ├── ReviewComponent.spec.js
│   ├── IndexComponent.spec.js
│   └── QuestionComponent.spec.js
├── integration/
│   ├── ReviewComponent.integration.spec.js
│   ├── IndexComponent.integration.spec.js
│   └── QuestionComponent.integration.spec.js
```

## Compte des tests

- Unitaires : 50
  - Review : 18
  - Index : 18
  - Question : 14
- Integration : 5
  - Review : 2
  - Index : 1
  - Question : 2
