class PrivacyPolicy {

    get policyRevisionsHeader() { return cy.get('#policy-revisions'); }
    get supportFirstEmail() { return cy.get('.c-buvHyO.c-buvHyO-ifyAbVJ-css .c-PJLV:nth-child(7) a'); }

    scrollToPolicyRevisionsHeader() {
        this.policyRevisionsHeader.scrollIntoView();
    }

}

export default new PrivacyPolicy();