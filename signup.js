class SignUpPage {
  visit() {
    cy.visit('https://saucelabs.com/sign-up');
  }

  clickSignUpWithEmail() {
    cy.get('#signUpWithEmail').click();
  }

  enterEmail(email) {
    cy.get('#email').clear().type(email);
  }

  enterUsername(username) {
    cy.get('#username').clear().type(username);
  }

  enterPassword(password) {
    cy.get('#password').clear().type(password);
  }

  selectSubscription() {
    cy.get('#subscription').click();
  }

  clickSubmit() {
    cy.get('.Button_large__Z2ozi').click();
  }

  verifyConfirmation() {
    cy.get('.EmailVerificationContainer__resend-container__L9qsT').should('be.visible');

  }
}

export default SignUpPage;
