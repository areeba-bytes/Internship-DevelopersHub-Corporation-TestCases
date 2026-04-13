describe('Dashboard Functionality Tests', () => {
  
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type('_arrr90000/aaAGH')
    cy.get('#loginPanel > form > div:nth-child(4) > input').type('arrr90000')
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()
    cy.wait(2000)
  })

  
  it('TC-DASH-001: Should display main dashboard elements after login', () => {
    cy.contains('Welcome').should('be.visible')
    
    // Verify Accounts Overview title
    cy.contains('Accounts Overview').should('be.visible')
    
    // Verify account table exists
    cy.get('#accountTable').should('be.visible')
    
    // Verify navigation menu items
    cy.contains('Open New Account').should('be.visible')
    cy.contains('Accounts Overview').should('be.visible')
    cy.contains('Transfer Funds').should('be.visible')
    cy.contains('Bill Pay').should('be.visible')
    cy.contains('Find Transactions').should('be.visible')
    cy.contains('Update Contact Info').should('be.visible')
    cy.contains('Request Loan').should('be.visible')
    cy.contains('Log Out').should('be.visible')
    
    cy.screenshot('dashboard-overview')
    cy.log('✅ Dashboard loaded successfully with all elements')
  })
})