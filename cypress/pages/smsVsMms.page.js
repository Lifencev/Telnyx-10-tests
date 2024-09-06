class SmsVsMmsPage {

    get FAQHeader() { return cy.get('div #frequently-asked-questions-about-sms-vs-mms'); }
    get FAQDescription() { return cy.get('.c-buvHyO.c-buvHyO-iegXOJA-css.c-gMSTYS div:nth-child(13) p:nth-child(4)');}

    ScrollToFAQHeader() {
        this.FAQHeader.scrollIntoView();
    }
}

export default new SmsVsMmsPage();