Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Tests de evaluación técnica Connectis', () => {
    beforeEach( () => {
        cy.visit('https://tienda.movistar.com.ar/');
    })

    it('CP001 - Validar cuotas en compra de equipo - Cuotas.12 -Equipo.A52', () => {
        cy.get('#search_mini_form > .actions').click();
        cy.get('#search').type('A52{enter}');
        cy.get('[action="https://tienda.movistar.com.ar/samsung-galaxy-a52.html"]').click();
        cy.get('.price-installments').contains('Hasta 12 cuotas sin interés');
        cy.get('.details').contains('Hasta 12 cuotas sin interés');
    })
    
    it('CP002 - Aplicar filtro de equipos - Gama.Alta - Memoria Interna.256GB', () => {
        cy.get('#layered-filter-block > .block-title > strong').click();
        cy.get('[attribute="price"] > .filter-options-content > .items > :nth-child(3) > a').click();
        cy.get('#layered-filter-block > .block-title > strong').click();
        cy.get('[href="https://tienda.movistar.com.ar/?movistar_internalmemory=916&price=200000-300000"]').click({force: true});
        cy.get('[id="toolbar-amount"]').contains('artículo');
    })
})