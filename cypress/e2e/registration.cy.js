 describe('Registration Functionality', () => {
  it('Register New User', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > p:nth-child(3) > a').click()
    cy.get('[name="customer.firstName"]').type('Muhammad Akbar')
    cy.get('[name="customer.lastName"]').type('ali')
    cy.get('[name="customer.address.street"]').type('abcd1234')
    cy.get('[name="customer.address.city"]').type('Lahore')       
    cy.get('[name="customer.address.state"]').type('Punjab')
    cy.get('[name="customer.address.zipCode"]').type('54000')
    cy.get('[name="customer.phoneNumber"]').type('03451234567')
    cy.get('[name="customer.ssn"]').type('123456789')
    cy.get('[name="customer.username"]').type('_arrr90000/aaAGH')
    cy.get('[name="customer.password"]').type('arrr90000')
    cy.get('[name="repeatedPassword"]').type('arrr90000')
    cy.screenshot('registration-screenshot')
    cy.get('[colspan="2"] > .button').click()
   
    
  })
})