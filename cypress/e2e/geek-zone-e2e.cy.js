describe('Questionnaire - Test E2E', () => {
  it('Tester le systéme de score du questionnaire', () => {
    cy.visit('/#/');

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
