describe('Login  Functionality', () => {
  it('Login Registered User', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        //username
    cy.get('#loginPanel > form > div:nth-child(2) > input'). type('_arrr90000/aaAGH')
    cy.get('#loginPanel > form > div:nth-child(4) > input').type('arrr90000')
      cy.screenshot('Login-screenshot')
    cy.get('#loginPanel > form > div:nth-child(5) > input').click();
      cy.screenshot('login-screenshot')
 
   })
})