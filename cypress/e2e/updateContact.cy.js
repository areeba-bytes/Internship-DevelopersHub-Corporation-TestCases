describe('Dashboard Functionality Tests', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type('_arrr90000/aaAGH')
    cy.get('#loginPanel > form > div:nth-child(4) > input').type('arrr90000')
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()
    cy.wait(2000)
  })

it('TC-DASH-001: Should navigate to Update Contact Info page', () => {
    cy.contains('Update Contact Info').click()
     cy.screenshot('update-contact')
    // Verify Update Profile page
    cy.url().should('include', '/updateprofile.htm')
    cy.contains('Update Profile').should('be.visible')
    
    // Verify form fields are pre-filled
    cy.get('input[id="customer.firstName"]').should('have.value')
    cy.get('input[id="customer.lastName"]').should('have.value')
    cy.get('input[id="customer.address.street"]').should('have.value')
    cy.get('input[id="customer.address.city"]').should('have.value')
    cy.get('input[id="customer.address.state"]').should('have.value')
    cy.get('input[id="customer.address.zipCode"]').should('have.value')
    cy.get('input[id="customer.phoneNumber"]').should('have.value')
    
    cy.screenshot('update-contact-info')
    cy.log('Update Contact Info page accessible')
  })
})