describe('Dropdown Functionality', () => {
   it('Select Option from Dropdown', () => {
     cy.visit('https://parabank.parasoft.com/parabank/index.htm')                   
        // Open the static dropdown    

    cy.get('#loginPanel > form > div:nth-child(2) > input'). type('_arrr90000/aaAGH')
    cy.get('#loginPanel > form > div:nth-child(4) > input').type('arrr90000')
    cy.get('#loginPanel > form > div:nth-child(5) > input').click();
    cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click(); 
    cy.get('#month').select(3)    
    cy.screenshot('select1-screenshot')
    cy.get('#month').select('February')  
    cy.screenshot('select2-screenshot')

})
})