describe('Dashboard Functionality Tests', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type('_arrr90000/aaAGH')
    cy.get('#loginPanel > form > div:nth-child(4) > input').type('arrr90000')
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()

  })

it('TC-DASH-002: Should transfer funds successfully with valid amount', () => {
    // Navigate to Transfer Funds
    cy.contains('Transfer Funds').click()
    cy.get('input[id="amount"]').clear().type('10')
    
    // Select from account (first option)
    cy.get('select[id="fromAccountId"]').select(0)
    
    // Select to account (first option - if same account, it should still work or show error)
    cy.get('select[id="toAccountId"]').select(0)
    
    // Click Transfer
    cy.get('input[value="Transfer"]').click()
    
    // Verify success message
    cy.contains('Transfer Complete!', { timeout: 10000 }).should('be.visible')
    
    cy.screenshot('transfer-success')
    cy.log('Funds transferred successfully')
  })
})