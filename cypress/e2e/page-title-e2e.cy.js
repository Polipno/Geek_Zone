describe("Titre de l'onglet et description - Test E2E", () => {
  it("Affiche un titre propre à l'accueil", () => {
    cy.visit('/#/');
    cy.title().should('eq', "Geek Zone – Reviews de jeux vidéo, Let's Play et podcast");
    cy.get('meta[name="description"]').should('have.attr', 'content').and('include', 'Geek Zone');
  });

  it('Met à jour le titre et la description en naviguant vers une review', () => {
    cy.visit('/#/');
    cy.contains('button', 'Review').click();
    cy.title().should('eq', 'Review – Geek Zone');

    cy.get('.review img.Image').first().click();
    cy.location('hash').should('eq', '#/another_code_recollection');
    cy.title().should('eq', 'Another Code Recollection – Geek Zone');
    cy.get('meta[name="description"]')
      .should('have.attr', 'content')
      .and('include', 'Another Code Recollection');
    cy.get('h1').should('have.text', 'Another Code Recollection');
  });

  it("Affiche le bon titre sur une page ouverte directement par son adresse", () => {
    cy.visit('/#/star_fox');
    cy.title().should('eq', 'Star Fox – Geek Zone');
    cy.get('h1').should('have.text', 'Star Fox');
  });
});
