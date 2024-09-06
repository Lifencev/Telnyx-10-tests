class PhoneNumbersPage {

    get globalNumbersHeader() { return cy.get('.c-PJLV.c-fGbiyG.c-PJLV-cHtIMp-dark-false.c-eZpJHu'); }
    get viewGlobalCoverageBtn() { return cy.get('.c-hSyILC a[href="/global-coverage"]'); }

}

export default new PhoneNumbersPage();