# Tests - Geek Zone

## Vue d'ensemble

### Fonctionnalites:

1. Recherche (Review)
2. Bouton like (Accueil)
3. Popup resultats (Question)

Couverture demandée:

- 50 tests unitaires (nominal, exception, limites)
- 5 tests d'integration (partiel)
- 2 tests E2E (1 automatisé, 1 manuel)

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
cypress/
├── e2e/
│   └── geek-zone-e2e.cy.js
Test_Manuel.md
```

## Compte des tests

- Unitaires: 50
  - Review: 17
  - Index: 17
  - Question: 16
- Integration: 5
  - Review: 2
  - Index: 1
  - Question: 2
- End-to-End: 2
  - Automatisé: 1
  - Manuel: 1
