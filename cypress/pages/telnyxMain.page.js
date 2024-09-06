class TelnyxMainPage {

    get topSignUpBtn() { return cy.get('a#header-sign-up'); }
    get contactUsBtn() { return cy.get('.c-kDQqQr.c-kDQqQr-fwzCzT-background-light.c-kDQqQr-cZriAm-cv.c-kDQqQr-ikwntzn-css'); }
    get sendBtn() { return cy.get('.c-kNXeMZ.c-eRgYBG'); }
    get AIAssistantBtn() { return cy.get('.c-bGYNvC'); }
    get closeAIAssistantBtn() { return cy.get('.c-cODSYQ.c-cPtnfT'); }
    get PHPBtn() { return cy.get('.c-biUdIf.c-biUdIf-fyBaVG-dark-true button:nth-child(5)'); }
    
    get chatWithAnLLMHeader() { return cy.get('#inference .c-PJLV.c-rMlRu.c-PJLV-cHtIMp-dark-false.c-PJLV-laOfho-alt-true'); }
    get assistantHeader() { return cy.get('.c-epDMoC .c-flqBZi').eq(1).find('.c-jiXXol'); }
    get productsHeader() { return cy.get('.c-ircorJ .c-PJLV.c-fNZqWL'); }

    get questionInput() { return cy.get('.c-fJsHXZ'); }
    get systemPromptInput() { return cy.get('.c-khymhr.c-khymhr-hBlYZn-theme-light.c-khymhr-gsWLYc-embed-true.c-khymhr-dBikOh-theme-dark'); }
    get userInput() { return cy.get('.c-jbTjEp.c-cmjTpc'); }

    get privacyPolicyFooterLink() { return cy.get('footer a[href="/privacy-policy"]'); }
    get communicationsLink() { return cy.get('.c-imyLRh.c-imyLRh-hlFCER-bgColor-green .c-cVovZv .c-gOQkAO'); }
    
    get firstMessageFromAIAssistant() { return cy.get('.c-bCIlIy.c-khViZk'); }
    get chatWithAIAssistant() { return cy.get('.c-byFbxF.c-byFbxF-inHVAk-open-true'); }
    
    get solutionTab() { return cy.get('[href="/solutions"]'); }
    get codePlace() { return cy.get('#code'); }
    get PHPCode() { return cy.get('.c-PJLV.c-krYgMk.c-PJLV-kmbBBS-dark-true.lang-PHP'); }
    get footer() { return cy.get('#__next footer'); }
    
    clickOnTopSignUpBtn() {
        this.topSignUpBtn.click();
    }

    clickOnContactUsBtn() {
        this.contactUsBtn.click();
    }

    clickOnSendBtn() {
        this.sendBtn.should('be.enabled').click({ force: true });
    }

    clickOnPHPBtn() {
        this.PHPBtn.click();
    }

    clickOnCommunicationsLink() {
        this.communicationsLink.click();
    }

    clickOnPrivacyPolicyFooterLink() {
        this.privacyPolicyFooterLink.click();
    }

    clickOnAIAssistantBtn() {
        this.AIAssistantBtn.click();
    }

    clickOnCloseAIAssistantBtn() {
        this.closeAIAssistantBtn.click();
    }

    clickOnSolutionTab() {
        this.solutionTab.click();
    }

    scrollToChatWithAnLLMHeader() {
        this.chatWithAnLLMHeader.scrollIntoView();
    }

    scrollToCodePlace() {
        //this.codePlace.should('exist').scrollIntoView().should('be.visible');
        this.codePlace.should('exist').scrollIntoView({ offset: { top: 1500, left: 0 } }).should('be.visible');
    }

    scrollToProductsHeader() {
        this.productsHeader.scrollIntoView();
    }

    scrollToFooter() {
        this.footer.scrollIntoView();
    }

    setSystemPromptInput(value) {
        this.systemPromptInput.type(value, { force: true });
    }

    setUserInput(value) {
        this.userInput.type(value);
    }

    setQuestionInput(value) {
        this.questionInput.type(value);
    }
    
}

export default new TelnyxMainPage();