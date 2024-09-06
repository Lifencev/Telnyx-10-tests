class ProductsCommunicationPage {

    get globalNumbersBtn() { return cy.get('.c-cmhbnu.c-cmhbnu-ibJEbB-inline-false a[href="/products/phone-numbers"]'); }

    clickOnGlobalNumbersBtn() {
        this.globalNumbersBtn.click();
    }
}

export default new ProductsCommunicationPage();