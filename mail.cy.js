import SignUpPage from '../../../support/PageObjects/signup.js';
import MailosaurPage from '../../../support/PageObjects/mailsour.js';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('Visit SauceDemo and Mailosaur', () => {
  const signUpPage = new SignUpPage();
  const mailosaurPage = new MailosaurPage();

  let testData;

  before(() => {
    cy.fixture('userData').then((data) => {
      testData = data;
    });
  });

  it('Sign up on SauceDemo website', () => {
    signUpPage.visit();
    signUpPage.clickSignUpWithEmail();
    signUpPage.enterEmail(testData.signUp.email);
    signUpPage.enterUsername(testData.signUp.username);
    signUpPage.enterPassword(testData.signUp.password);
    signUpPage.selectSubscription();
    signUpPage.clickSubmit();
    cy.wait(3000);
    signUpPage.verifyConfirmation();
  });

  it('opens the SauceDemo email from Mailosaur', () => {
  mailosaurPage.visit();
  mailosaurPage.enterEmail(testData.mailosaur.email);
  mailosaurPage.clickNext();
  mailosaurPage.enterPassword(testData.mailosaur.password);
  mailosaurPage.clickLogin();
  cy.wait(4000);
  mailosaurPage.goToInbox();
  cy.wait(3000);
  mailosaurPage.openEmailBySubject();
  mailosaurPage.clickEmailCTA();
});


  });

