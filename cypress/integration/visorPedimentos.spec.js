describe('Visor Pedimentos', () => {
  it('FrontPage can be opened', () => {
    cy.visit('http://localhost:3000/prevalidador/visor-pedimentos');
    cy.contains('Visor de Pedimientos');
  });
});
