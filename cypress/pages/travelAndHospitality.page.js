class TravelAndHospitalityPage {

    get aboutHeader() { return cy.get('header .c-PJLV.c-fNZqWL.c-PJLV-cHtIMp-dark-false'); }
    get belowAboutHeader() { return cy.get('header h2'); }

    scrollToAboutHeader() {
        this.aboutHeader.scrollIntoView();
    }

}

export default new TravelAndHospitalityPage();