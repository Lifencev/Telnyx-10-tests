import TelnyxMainPage from '../pages/telnyxMain.page';
import SignUpPage from '../pages/signUp.page';
import ResourcesPage from '../pages/resources.page';
import SmsVsMmsPage from '../pages/smsVsMms.page';
import SolutionsPage from '../pages/solutions.page';
import TravelAndHospitalityPage from '../pages/travelAndHospitality.page';
import ContactUsPage from '../pages/contactUs.page';
import PrivacyPolicyPage from '../pages/privacyPolicy.page';
import MissionControlPage from '../pages/missionControl.page';
import ProductsCommunicationPage from '../pages/productsCommunication.page';
import PhoneNumbersPage from '../pages/phoneNumbers.page';

describe('Ten tests for Telnyx', () => {

    it('Getting "try again" error creating a new account using the top "SIGN UP" button', () => {
        cy.visit('/');  

        TelnyxMainPage.clickOnTopSignUpBtn();
        
        SignUpPage.setCompanyEmailInput(Cypress.env('companyEmail'));
        SignUpPage.setFirstNameInput(Cypress.env('firstName'));
        SignUpPage.setLastNameInput(Cypress.env('lastName'));
        SignUpPage.setPasswordInput(Cypress.env('password'));
    
        SignUpPage.clickTermsAndConditionsCheckbox();
        SignUpPage.clickSignUpBelowBtn();

        cy.url().should('eq', Cypress.env('signUpURL'));
        SignUpPage.pleaseTryAgainError.should('be.visible').and('have.text', Cypress.env('pleaseTryAgainError'));
        
        SignUpPage.companyEmailInput.should('have.value', 'companyname1@gmail.com');
        SignUpPage.firstNameInput.should('have.value', 'Immja');
        SignUpPage.lastNameInput.should('have.value', 'Prizvysche');
        SignUpPage.passwordInput.should('have.value', 'Prizvysche+Immja1.');
    });

    it('Go to most popular articles from Blog from Resources', () => {
        cy.visit('/resources'); 
  
        ResourcesPage.scrollToMostPopularHeader();
        ResourcesPage.clickOnFirstBlog();
        SmsVsMmsPage.ScrollToFAQHeader();

        cy.url().should('eq', Cypress.env('SmsVsMmsURL'));
        SmsVsMmsPage.FAQDescription.should('have.text', Cypress.env('FAQDescription'));
    });

    it('Learn more about Travel and hospitality from Solutions', () => {
        cy.visit('/'); 
  
        TelnyxMainPage.clickOnSolutionTab();

        SolutionsPage.scrollToTravelAndHospitalityImage();
        SolutionsPage.clickOnTravelAndHospitalityImage();
    
        TravelAndHospitalityPage.scrollToAboutHeader();

        cy.url().should('eq', Cypress.env('travelAndHospitalityURL'));
        TravelAndHospitalityPage.belowAboutHeader.should('be.visible').and('have.text', Cypress.env('aboutHeader'));
    });

    it('Chat with an LLM with default settings', () => {
        cy.visit('/'); 
    
        TelnyxMainPage.scrollToChatWithAnLLMHeader();
        TelnyxMainPage.setSystemPromptInput(Cypress.env('systemPrompt'));
        TelnyxMainPage.setUserInput(Cypress.env('user'));
        TelnyxMainPage.clickOnSendBtn();

        TelnyxMainPage.assistantHeader.should('have.text', 'assistant');
        TelnyxMainPage.chatWithAnLLMHeader.should('be.visible');
    });

    it('Sending "Contact Us" form with empty fields', () => {
        cy.visit('/'); 
        TelnyxMainPage.clickOnContactUsBtn();

        ContactUsPage.scrollToSubmitBtn();
        ContactUsPage.clickOnSubmitBtn();

        cy.url().should('eq', Cypress.env('contactUsURL'));
        ContactUsPage.fieldIsRequiredMessage.should('be.visible');
        ContactUsPage.fieldIsRequiredMessage.should('have.text', Cypress.env('fieldIsRequired'));
    });

    it('Checking support email for clickability from the privacy policy from the footer', () => {
        cy.visit('/'); 

        TelnyxMainPage.scrollToFooter();
        TelnyxMainPage.clickOnPrivacyPolicyFooterLink();

        PrivacyPolicyPage.scrollToPolicyRevisionsHeader();

        PrivacyPolicyPage.supportFirstEmail.should('be.visible').and('not.be.disabled');
    });

    it('Checking PHP code under the "Built by developers, for developers" header', () => {
        cy.visit('/'); 

        TelnyxMainPage.scrollToCodePlace();
        TelnyxMainPage.clickOnPHPBtn();

        TelnyxMainPage.PHPCode.should('have.text', Cypress.env('PHPCode'));
    });

    it('Checking resources for Mission Control Portal', () => {
        cy.visit('/mission-control'); 

        MissionControlPage.scrollToResourcesHeader();

        MissionControlPage.viewDocsLink.should('have.attr', 'href', Cypress.env('viewDocsLink'));
        MissionControlPage.exploreManagedAccountsLink.should('have.attr', 'href', Cypress.env('exploreManagedAccountsLink'));
        MissionControlPage.learMoreLink.should('have.attr', 'href', Cypress.env('learMoreLink'));
    });

    it('Checking Global Numbers from Communications products', () => {
        cy.visit('/'); 
        
        TelnyxMainPage.scrollToProductsHeader();
        TelnyxMainPage.clickOnCommunicationsLink();

        ProductsCommunicationPage.clickOnGlobalNumbersBtn();

        cy.url().should('eq', Cypress.env('phoneNumbes'));
        PhoneNumbersPage.globalNumbersHeader.should('have.text', 'Global Numbers').and('be.visible');
        PhoneNumbersPage.viewGlobalCoverageBtn.should('be.visible').and('not.be.disabled');
    });

    it('Checking AI assistant\'s introduction and closing it', () => {
        cy.visit('/'); 

        TelnyxMainPage.clickOnAIAssistantBtn();
        TelnyxMainPage.setQuestionInput(Cypress.env('question').concat('{enter}'));
        
        TelnyxMainPage.firstMessageFromAIAssistant.should('have.text', Cypress.env('firstMessageFromAIAssistant'));
        
        TelnyxMainPage.clickOnCloseAIAssistantBtn();

        TelnyxMainPage.chatWithAIAssistant.should('not.be.exist');
    });

});