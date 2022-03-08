/// <reference types="cypress" />

// Simple test to take snapshot of screen before postcode is typed
// and take another after the postcode is typed in testbox
// compares the snapshot to baseline master

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
        cy.get('input[name=search]')
         .should('be.visible').should('be.enabled')
         .type("N126TR") 
        cy.percySnapshot('Type postcode in locations textbox')
         })
        })
    
    