const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "dysivy",

  e2e: {

    browser: 'chrome',
    baseUrl: 'https://telnyx.com',
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      signUpBtnClass: 'c-kDQqQr c-kDQqQr-jtQvir-background-dark c-kDQqQr-kIhBrF-variant-header c-kDQqQr-izROKD-cv',
      companyEmail: 'companyname1@gmail.com',
      firstName: 'Immja',
      lastName: 'Prizvysche',
      password: 'Prizvysche+Immja1.',
      signUpURL: 'https://telnyx.com/sign-up',
      pleaseTryAgainError: 'errorThat email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.',
      SmsVsMmsURL: 'https://telnyx.com/resources/sms-vs-mms',
      FAQDescription: 'Here are some common questions we receive about SMS and MMS:',
      travelAndHospitalityURL: 'https://telnyx.com/solutions/travel-and-hospitality',
      aboutHeader: 'Reinvent customer experiences for modern travel',
      systemPrompt: 'What is LLM?',
      user: 'Ivan',
      contactUsURL: 'https://telnyx.com/contact-us',
      fieldIsRequired: 'This field is required.',
      PHPCode: `\\Telnyx\\Telnyx::setApiKey('YOUR_API_KEY');

$call = Call::create([
  'connection_id' => 'uuid',
  'to' => '+18005550199',
  'from' => '+18005550100'
]);`,
      viewDocsLink: 'https://developers.telnyx.com/docs/messaging/messages/mission-control-portal-set-up',
      exploreManagedAccountsLink: 'https://developers.telnyx.com/docs/account/managed-accounts',
      learMoreLink: 'https://support.telnyx.com/en/articles/1176636-get-started-with-a-mission-control-account',
      phoneNumbes: 'https://telnyx.com/products/phone-numbers',
      firstMessageFromAIAssistant: 'Hello! I\'m Telnyx\'s AI assistant. How can I help you?',
      question: 'Hello!',
    }
  },
});
