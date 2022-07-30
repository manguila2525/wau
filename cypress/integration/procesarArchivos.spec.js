describe('Procesar archivos', () => {
  it('FrontPage can be opened', () => {
    cy.visit('http://localhost:3000/prevalidador/procesar-archivo');
    cy.contains('Validación/Prevalidación de Archivos');
  });
});
