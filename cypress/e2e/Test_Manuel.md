# Cas de Test E2E Manuel: Simulation Utilisateur Complet

**Identifiant:** TC-001

**Titre:** Validation du flux de navigation (Like, Recherche et Questionnaire)

**Environnement:** Local/Développement

**Testeur:** Geek Zone

## 1. Objectif du test
Vérifier qu'un utilisateur peut interagir avec la page d'accueil (ajouter un like), naviguer vers la page des reviews pour filtrer un jeu, et compléter le questionnaire avec succès pour voir son score.

## 2. Pré-requis
* L'application est lancée et accessible sur le navigateur local.
* Aucun like n'est enregistré au préalable.

## 3. Procédure de test

| Étape | Action de l'utilisateur | Résultat attendu (Critère d'acceptation) | Statut | Remarques |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Naviguer sur l'URL de l'application (Accueil). | La page d'accueil s'affiche correctement. | OK | |
| **2** | Cliquer sur le bouton "🤍". | Le cœur devient "❤️" et le texte affiche "Nombre de likes: 1". | OK | |
| **3** | Cliquer sur le lien "Reviews" dans le menu. | L'utilisateur est redirigé vers la page de recherche. | OK | |
| **4** | Saisir "mario" dans la barre de recherche. | La carte du jeu "Mario Kart World" reste visible à l'écran. | OK | |
| **5** | Cliquer sur le lien "Question" dans le menu. | L'utilisateur est redirigé vers la page question. | OK | |
| **6** | Sélectionner une réponse pour chaque question et cliquer sur le bouton de confirmation. | Une fenêtre popup s'affiche avec le titre "Résultats" et le score calculé. | OK | |