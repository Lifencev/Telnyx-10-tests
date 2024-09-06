class ContactUsPage {

    get submitBtn() { return cy.get('button[type="submit"]'); }
    get fieldIsRequiredMessage() { return cy.get('#ValidMsgReason_for_Contact__c'); }

    scrollToSubmitBtn() {
        this.submitBtn.scrollIntoView();
    }

    clickOnSubmitBtn() {
        this.submitBtn.click();
    }
}

export default new ContactUsPage();