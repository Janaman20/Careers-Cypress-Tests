/// <reference types="cypress" />

// Simple test to take snapshot of screen before postcode is typed
// and take another after the postcode is typed in testbox
// compares the snapshot to baseline master

describe('Applitools snapshot of locations function', function () {

        it('Open homepage and snapshot', function () {
                
            cy.visit("https://preprod.careers.nandos.ninja/")
                
            cy.eyesOpen({
             appName: 'Careers homepage - Cypress',
             testName: 'Smoke Test - Cypress',
            })
            cy.eyesCheckWindow({
             tag: "Homepage",
             target: 'locations textbox',
             fully: true
            })
        })
        
        it('Type postcode in locations and snapshot', function () {
            cy.get('input[name=search]')
             .should('be.visible')
             .should('be.enabled')
             .type("EN25TD") 

            cy.eyesCheckWindow({
             tag: "Homepage after textbox entry",
             target: 'locations textbox after entry',
             fully: true
            })

            cy.eyesClose()
            })
        })
