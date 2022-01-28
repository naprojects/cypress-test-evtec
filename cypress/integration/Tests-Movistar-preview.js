import validarCuotas from '../support/pages/validarCuotas';
import validarProtocolo from '../support/pages/validarprotocolo';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Tests de evaluación técnica Connectis', () => {
    beforeEach( () => {
        cy.visit('https://tienda.movistar.com.ar/');
    })

    /* -------------------------- Con modelo Page Objects -------------------------------- */

    it('CP001 - Validar cuotas en compra de equipo - Cuotas.12 -Equipo.A52', () => {
        validarCuotas.search('A52{enter}');
        validarCuotas.selectProduct();
        validarCuotas.verifyProduct('A52', 'Hasta 12 cuotas');
    });

    it('CP005 - Validar que la url del checkout de una compra esté en https', () => {
        validarProtocolo.search('A52{enter}');
        validarProtocolo.selectProduct();
        validarProtocolo.buyProduct();
        validarProtocolo.verifyURLprotocol();
    });

    /* -------------------------- Sin modelo Page Objects -------------------------------- */

/*     it('CP001 - Validar cuotas en compra de equipo - Cuotas.12 -Equipo.A52', () => {
        cy.get('#search_mini_form > .actions').click();
        cy.get('#search').type('A52{enter}');
        cy.get('.products.wrapper.grid.products-grid').find('li').eq(0).click();
        cy.get('.page-title').should('contain', 'A52');
        cy.get('.price-installments').should('contain', 'Hasta 12 cuotas');
        cy.get('.details').should('contain', 'Hasta  12  cuotas');
    }) */

/*     it('CP002 - Aplicar filtro de equipos - Gama.Alta - Memoria Interna.256GB', () => {
        cy.get('.block-title.filter-title').find('strong').click();
        cy.get('[attribute="price"]').find('a').eq(2).click();
        cy.get('.block-title.filter-title').find('strong').click();
        cy.get('.filter-value').should('contain', '$200.000 - $300.000');
        cy.get('.block-title.filter-title').find('strong').click();
        cy.get('#layered-filter-block > .block-title > strong').click();
        cy.get('[attribute="movistar_internalmemory"] > .filter-options-content > .items > .item > a').click();
        cy.get('#layered-filter-block > .block-title > strong');
        cy.get('.filter-value').should('contain', '256GB');
        cy.get('.toolbar-number').should('contain', '1');
    }); */

/*     it('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa ', () => {
        cy.get('#layer-product-list').find('li').eq(2).click();
        cy.get('#open-installments-modal').click();
        cy.get('#selectBank').select('Credicoop');
        cy.get('#selectCardByBank').select('Visa');
        cy.get('#bodyTable').find('td').contains('60').should('not.exist');
    }) */

/*     it('CP004 - Validar que un equipo sin stock no tenga el botón de comprar', () => {
        cy.get('#search_mini_form > .actions').click();
        cy.get('#search').type('Samsung Galaxy A52s{enter}');
        cy.get('.product-item-inner').find('span').should('contain', 'Sin stock');
        cy.get('.products.wrapper.grid.products-grid').find('li').eq(0).click();
        cy.get('.page-title').should('contain', 'Samsung Galaxy A52s');
        cy.get('#movistar-pdp-product-without-stock-label').should('contain', 'Equipo sin stock');
        cy.get('#movistar-pdp-addtocart-button').should('not.exist');
    }); */

})