describe('Review - barre de recherche', () => {
  it('filtre les jeux selon la saisie', () => {
    cy.visit('/#/review');

    cy.get('input[placeholder="Rechercher un jeu..."]').type('mario');

    cy.contains('h3', 'Mario Kart World').should('be.visible');
    cy.contains('h3', 'Split Fiction').should('not.be.visible');
  });
});
