describe('nandosTestSuite', () => {

    it('Verify Title Of The Page-positive', () => 
    {
    cy.visit('https://preprod.careers.nandos.co.uk/roles/team-member/')
    cy.title().should('eq', "Team Member | Nando's Careers")  
    
    })
    
    it('Verify Title Of The Page-negative', () => 
    {
    cy.visit('https://preprod.careers.nandos.co.uk/roles/team-member/')
    cy.title().should('eq', 'work')  
    })

  })

