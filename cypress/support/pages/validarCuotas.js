class validarCuotas{
    constructor(){
        this.searchButton = '#search_mini_form > .actions';
        this.searchField = '#search';
        this.productFound = '.products.wrapper.grid.products-grid';
        this.productTitle = '.page-title';
        this.productdetailone = '.price-installments';
        this.productdetailtwo = '.details';
    }

    search = (element) => {
        cy.get(this.searchButton).click();
        cy.get(this.searchField).type(element);
    }

    selectProduct = () => {
        cy.get(this.productFound).find('li').eq(0).click();
    }

    verifyProduct = (product, cuotas) => {
        cy.get(this.productTitle).should('contain', product);
        cy.get(this.productdetailone).should('contain', cuotas);
    }
}

export default new validarCuotas();