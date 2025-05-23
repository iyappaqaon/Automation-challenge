class MailosaurPage {
  visit() {
    cy.visit('https://mailosaur.com/app');
  }

  enterEmail(email) {
    cy.get('#email').type(email);
  }

  clickNext() {
    cy.get('._primary_1v5n3_47').click();
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  clickLogin() {
    cy.get('._primary_1v5n3_47').click(); 
  }

  goToInbox() {
    cy.get('.mt-2 > ._btn_1v5n3_5').click();
  }

  openEmailBySubject() {
    cy.get('[data-testid="subject"]').click(); 
  }

  clickEmailCTA() {
    cy.get('.ctaButton a')
      .invoke('removeAttr', 'target')
      .click();
  }
}

export default MailosaurPage;
