describe('Visor archivos', () => {
  it('FrontPage can be opened', () => {
    cy.visit('http://localhost:3000/prevalidador/visor-archivos');
    cy.contains('Visor de Archivos Prevalidados/Validados');
  });
});
