describe('Accueil - bouton like', () => {
  it('change le coeur et le compteur', () => {
    cy.visit('/#/');
    cy.contains('button', '🤍').click();
    cy.contains('button', '❤️').should('be.visible');
    cy.contains('Nombre de likes : 1').should('be.visible');
  });
});
