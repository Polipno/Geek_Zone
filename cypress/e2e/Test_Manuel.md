# Cas de Test E2E Manuel: Simulation Utilisateur sur la page Review

**Identifiant:** TC-001

**Titre:** Validation du flux de navigation (Recherche)

**Environnement:** Local/Développement

**Testeur:** Geek Zone

## 1. Objectif du test

Vérifier qu'un utilisateur naviguer vers la page des reviews pour filtrer des jeux sur plusieur scénario.

## 2. Pré-requis

- L'application est lancée et accessible sur le navigateur local.

## 3. Procédure de test

| Étape | Action de l'utilisateur                        | Résultat attendu (Critère d'acceptation)                       | Statut | Remarques |
| :---- | :--------------------------------------------- | :------------------------------------------------------------- | :----- | :-------- |
| **1** | Naviguer sur l'URL de l'application (Accueil). | La page d'accueil s'affiche correctement.                      | OK     |           |
| **2** | Cliquer sur le lien "Reviews" dans le menu.    | L'utilisateur est redirigé vers la page de recherche.          | OK     |           |
| **3** | Saisir "mario" dans la barre de recherche.     | La carte du jeu "Mario Kart World" reste visible à l'écran.    | OK     |           |
| **4** | Saisir "zzz" dans la barre de recherche.       | La message "Aucun resultat pour cette recherche." est affiché. | OK     |           |
| **5** | Saisir "LuIGi" dans la barre de recherche.     | La carte du jeu "Luigi Mansion 2 HD" est visible à l'écran.    | OK     |           |
