class SignUpPage {

    get companyEmailInput() { return cy.get('#email'); }
    get firstNameInput() { return cy.get('#first_name'); }
    get lastNameInput() { return cy.get('#last_name'); }
    get passwordInput() { return cy.get('#password'); }

    get termsAndConditionsCheckbox() { return cy.get('#terms_and_conditions'); }
    get signUpBelowBtn() { return cy.get('.c-kDQqQr.c-kDQqQr-fwzCzT-background-light.c-kDQqQr-cOvXws-cv.c-ddSKil'); }
    
    get pleaseTryAgainError() { return cy.get('.c-UUKrH.c-UUKrH-kDyeyw-type-error'); }

    setCompanyEmailInput(value) {
        this.companyEmailInput.type(value);
    }

    setFirstNameInput(value) {
        this.firstNameInput.type(value);
    }

    setLastNameInput(value) {
        this.lastNameInput.type(value);
    }

    setPasswordInput(value) {
        this.passwordInput.type(value);
    }

    clickTermsAndConditionsCheckbox() {
        this.termsAndConditionsCheckbox.click();
    }

    clickSignUpBelowBtn() {
        this.signUpBelowBtn.click();
    }
}

export default new SignUpPage;