describe('Geek Zone - Test E2E complet', () => {
  it('Test the “Like” button, the review search, and the questionnaire score', () => {
    cy.visit('/#/');

    cy.contains('button', '🤍').click();
    cy.contains('button', '❤️').should('be.visible');
    cy.contains('Nombre de likes : 1').should('be.visible');

    cy.contains('button', 'Review').click();

    cy.get('input[placeholder="Rechercher un jeu..."]').type('mario');
    cy.contains('h3', 'Mario Kart World').should('be.visible');
    cy.contains('h3', 'Split Fiction').should('not.be.visible');

    cy.contains('button', 'Question').click();

    cy.get('#radio2').check();
    cy.get('#radio6').check();
    cy.get('#radio8').check();
    cy.get('#radio10').check();
    cy.get('#radio15').check();
    cy.get('#radio16').check();

    cy.get('button.confirm-btn').click();

    cy.get('.popup').should('be.visible');
    cy.contains('.popup h3', 'Résultats').should('be.visible');
    cy.contains('.popup p', 'Score : 10/10').should('be.visible');
  });
});