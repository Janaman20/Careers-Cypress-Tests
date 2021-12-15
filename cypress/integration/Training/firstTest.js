describe('MyTestSuite', () => {

    it('Verify Title Of The Page-positive', () => 
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq', 'nopCommerce demo store')  
    })
    
    it('Verify Title Of The Page-negative', () => 
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq', 'nopCommerce store')  
    })

  })