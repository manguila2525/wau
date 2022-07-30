describe('Detalle de archivo', () => {
  it('FrontPage can be opened', () => {
    cy.visit('http://localhost:3000/prevalidador/visor-archivos/detalle/14352');
    cy.contains('VISTA SIMPLIFICADA DEL ARCHIVO M3');
  });
});
