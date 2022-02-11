/// <reference types="cypress" />

describe('Percy snapshot of locations function', function ()
    {
        it('Open homepage and snapshot', function () {
                cy.visit("https://preprod.careers.nandos.ninja/")
                cy.percySnapshot()
                })
        it('Verify homepage url, title', function () {
                cy.url().should('include','careers') 
                cy.title().should('eq','Home | Nando\'s Careers') 
                })
        it('Type postcode in locations and snapshot', function () {
                cy.get('input[name=search]').should('be.visible').should('be.enabled').type("N41SN") 
                cy.percySnapshot('Type postcode in locations textbox')
                })
            })
    
    