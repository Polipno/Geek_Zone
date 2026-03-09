describe('Question - popup de confirmation', () => {
  it('affiche la popup après confirmation', () => {
    cy.visit('/#/question');

    cy.contains('button', 'Confirmer').click();

    cy.get('.popup').should('be.visible');
    cy.contains('.popup h3', 'Résultats').should('be.visible');
  });
});
