describe('Lightbox - Test E2E', () => {
  it("Ouvre une capture d'écran en grand, navigue et referme", () => {
    cy.visit('/#/star_fox');

    cy.get('.lightbox').should('not.exist');

    cy.get('.image-gallery img').first().scrollIntoView().click();

    cy.get('.lightbox').should('be.visible');
    cy.get('.lightbox__img').invoke('attr', 'alt').should('match', /^Star Fox : .*Pepper/);
    cy.get('.lightbox__counter').should('have.text', '1 / 4');

    cy.get('.lightbox__next').click();
    cy.get('.lightbox__counter').should('have.text', '2 / 4');
    cy.get('.lightbox__img').invoke('attr', 'alt').should('match', /^Star Fox : .*Arwing/);

    cy.get('body').type('{leftArrow}');
    cy.get('.lightbox__counter').should('have.text', '1 / 4');

    cy.screenshot('lightbox-ouverte');

    cy.get('body').type('{esc}');
    cy.get('.lightbox').should('not.exist');
  });

  it("Ne s'ouvre pas sur les affiches de la grille Review, qui restent des liens", () => {
    cy.visit('/#/review');

    cy.get('.review img.Image').first().click();

    cy.get('.lightbox').should('not.exist');
    cy.location('hash').should('eq', '#/another_code_recollection');
  });
});
