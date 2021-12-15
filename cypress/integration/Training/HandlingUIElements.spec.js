/// <reference types="cypress" />

describe('UI Elements', function ()
    {
        it('Verify input box & Radio buttons', function ()
            {

                cy.visit("http://demo.guru99.com/test/newtours/") //visit site
                cy.url().should('include','newtours') //verify url should include 'newtours'
                
                cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury") // locate u/name box, verify it's visible and enabled then type u/name and password
                cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")
                
                cy.get('input[name=submit]').should('be.visible').click() //sign-in
                
                cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > h3') // verify login
                
                cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click() // click on flights
                
                
                cy.title().should('eq','Find a Flight: Mercury Tours:') // title verification

                // radio button
                cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') // visibility check status (is checked)
                cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() // visibility check status and then check

                cy.get('[name=findFlights]').should('be.visible').click() // click continue button

            

            }


)
}
)