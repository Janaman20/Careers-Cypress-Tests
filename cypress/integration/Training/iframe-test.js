/// <reference types="cypress" />

it('gets the post', () => {
    cy.visit('https://preprod.careers.nandos.co.uk/').contains('Work at Nando\'s')
    cy.get('iframe')
  })

const getIframeDocument = () => {
    return cy
    .get('iframe[src="https://embed.spotify.com/?uri=spotify:playlist:3tbxcq2GiO7vsIrPI3Qene"]')
    // Cypress yields jQuery element, which has the real
    // DOM element under property "0".
    // From the real DOM iframe element we can get
    // the "document" element, it is stored in "contentDocument" property
    // Cypress "its" command can access deep properties using dot notation
    // https://on.cypress.io/its
    .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
    // get the document
    return getIframeDocument()
    // automatically retries until body is loaded
    .its('body').should('not.be.undefined')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap)
  }
  
  it('gets the post', () => {
    cy.visit('https://preprod.careers.nandos.co.uk/')
    getIframeBody().find("[title='Play']").should('have.text', 'Play').click()
    cy.wait(3000)
    getIframeBody().find("[title='Pause']").should('have.text', 'Pause').click()
    // getIframeBody().find('#result').should('include.text', '"delectus aut autem"')
  })  