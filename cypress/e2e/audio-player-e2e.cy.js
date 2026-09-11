describe('Lecteur audio du podcast - Test E2E', () => {
  it("Affiche le lecteur personnalisé et lance la lecture au clic", () => {
    cy.visit('/#/passion_pixel');

    cy.get('.audio-player').should('be.visible');
    cy.get('audio[controls]').should('not.exist');
    cy.get('.audio-player__play').should('have.attr', 'aria-label', 'Lecture');

    // La durée s'affiche une fois les métadonnées du MP3 chargées
    cy.get('.audio-player__time').last().should('not.have.text', '0:00');

    cy.get('.audio-player__play').click();
    cy.get('.audio-player__play').should('have.attr', 'aria-label', 'Pause');
    cy.get('.audio-player').should('have.class', 'audio-player--playing');

    cy.get('.audio-player__play').click();
    cy.get('.audio-player__play').should('have.attr', 'aria-label', 'Lecture');
  });
});
