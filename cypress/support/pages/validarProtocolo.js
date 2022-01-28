class validarProtocolo{
    constructor(){
        this.searchButton = '#search_mini_form > .actions';
        this.searchField = '#search';
        this.productFound = '.products.wrapper.grid.products-grid';
        this.buy = '#movistar-pdp-addtocart-button';
        this.startbuy = '[title="Iniciar compra"]';
    }

    search = (element) => {
        cy.get(this.searchButton).click();
        cy.get(this.searchField).type(element);
    }

    selectProduct = () => {
        cy.get(this.productFound).find('li').eq(0).click();
    }

    buyProduct = () => {
        cy.get(this.buy).click();
        cy.get(this.startbuy).click();
    }

    verifyURLprotocol = () => {
        cy.location('protocol').should('contains', 'https')
    }

}

export default new validarProtocolo();