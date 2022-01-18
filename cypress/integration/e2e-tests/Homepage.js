/// <reference types="cypress" />
// Verify hero video playback in different resolutions
// Check top nav and header links
// Check locations via postcode
// Verify nandos spotify playlist and playback
describe('Verify hero video autoplay', () => {
    beforeEach(() => {
        cy.reload() // reload page before each test
        cy.log('I run before every test in every spec file!')
      })
      it('Hero video unpaused on macbook', () => { // verify hero video is played when screen is in laptop resolution
        cy.visit('https://careers.nandos.co.uk/')
        // cy.waitFor(5000)
        // cy.get('button').contains('Accept All Cookies').click()
        cy.viewport('macbook-16') 
        cy.get('video')
          .should('have.prop', 'paused', false)
          .and('have.prop', 'ended', false)
      })

    it('Hero video paused on mobile', () => { // verify video is paused when screen is in mobile device resolution
        cy.viewport('iphone-xr')  
        cy.get('video')
          .should('have.prop', 'paused', false) // verify video is playing (only set to false in cypress chrome!)
          .and('have.prop', 'ended', false)
        .then(($video) => { // pause video (video is paused when viewing property in browser)
          $video[0].pause()
        })
        .should('have.prop', 'paused', true) // verify video is paused
          .and('have.prop', 'ended', false)
      })

describe('Verify top nav links, buttons and spotify playback', () => {
  it('Verify top nav links', () => {
        cy.get('div.header__HeaderWrapper-l12a6r-0.dGOynw > nav.upper-nav__Wrapper-sc-1mfmr-0.dCDUCv > a') 
                .should('have.attr', 'href')
                .and('include', 'nandos.co.uk')
        cy.get('div.header__HeaderWrapper-l12a6r-0.dGOynw > nav.upper-nav__Wrapper-sc-1mfmr-0.dCDUCv > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://nandos.co.uk/')
        cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a:nth-child(1)') 
                .should('have.attr', 'href')
                .and('include', 'https://nandos.co.uk/eat')
        cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a:nth-child(1)') 
                .should('have.prop', 'href')
                .and('equal', 'https://nandos.co.uk/eat')
        cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a:nth-child(2)') 
                .should('have.attr', 'href')
                .and('include', 'https://nandos.co.uk/explore')
        cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a:nth-child(2)')
                .should('have.prop', 'href')
                .and('equal', 'https://nandos.co.uk/explore')
        cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a:nth-child(2)') 
                .should('have.attr', 'href')
                .and('include', 'https://nandos.co.uk/explore')
        cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a:nth-child(2)') 
                .should('have.prop', 'href')
                .and('equal', 'https://nandos.co.uk/explore')

        // cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a.upper-nav__Link-sc-1mfmr-4.khqDJ') // verify WORK link href in top nav ****
        //         // .should('have.attr', 'href')
        //         .should('include', 'https://preprod.careers.nandos.co.uk/')

        // cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a.upper-nav__Link-sc-1mfmr-4.khqDJ') // verify WORK url ****
        //         .should('have.prop', 'href')
        //         .and('equal', 'https://preprod.careers.nandos.co.uk/')

        //top nav links
        cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a:nth-child(4)') // verify ABOUT link href in top nav 
                .should('have.attr', 'href')
                .and('include', 'https://nandos.co.uk/card/about')
        cy.get('div.upper-nav__LinksContainer-sc-1mfmr-3.laiGFo > a:nth-child(4)') // verify ABOUT url 
                .should('have.prop', 'href')
                .and('equal', 'https://nandos.co.uk/card/about')
        cy.get('div.upper-nav__CandidateLinkWrapper-sc-1mfmr-5.eGkoZs > a') // verify candidate login href in top nav 
                .should('have.attr', 'href')
                .and('include', 'https://nandos.wd3.myworkdayjobs.com/Nandos')
        cy.get('div.upper-nav__CandidateLinkWrapper-sc-1mfmr-5.eGkoZs > a') // verify workday url 
                .should('have.prop', 'href')
                .and('equal', 'https://nandos.wd3.myworkdayjobs.com/Nandos')
})
  
  it('Verify covid-19, locations, why nando\'s buttons', () => {
        cy.get('div.image__StyledDiv-n16yq5-0.bzgYtl.first-content-row__Column-za9o82-1.iBNbKQ > div > a') 
                .should('have.attr', 'href')
                .and('include', '/covid-19-recruitment-update/')
        cy.get('div.image__StyledDiv-n16yq5-0.bzgYtl.first-content-row__Column-za9o82-1.iBNbKQ > div > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://careers.nandos.co.uk/covid-19-recruitment-update/')
        cy.get('div.image__StyledDiv-n16yq5-0.dzjTKp.second-content-row__Column-sc-13x7ft5-1.fOSiPr > div > a') 
                .should('have.attr', 'href')
                .and('include', '/why-nandos/')
        cy.get('div.image__StyledDiv-n16yq5-0.dzjTKp.second-content-row__Column-sc-13x7ft5-1.fOSiPr > div > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://careers.nandos.co.uk/why-nandos/')
  })

  it('Verify locations button', () => {
    // enter postcode into locations textbox
    // search for postcode
    // verify team member hero text
        cy.get('input[name=search]').should('be.visible').should('be.enabled').type("N41SN") 
        cy.get('button').contains('Search').click() 
        cy.get('div.first-content-row__Wrapper-sc-1sjpuex-0.egRQro > h2').contains('Find Your Role') 
  })

  it('Go back to homepage to verify Spotify Playlist', () => {
    cy.visit('https://careers.nandos.co.uk/').contains('Work at Nando\'s')
    cy.get('iframe')
  })

  // get and check spotify in iframe
  // play and stop embedded media player
  const getIframeDocument = () => {
    return cy
    .get('iframe[src="https://embed.spotify.com/?uri=spotify:playlist:3tbxcq2GiO7vsIrPI3Qene"]')
    .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
    // get the document
    return getIframeDocument()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
  }
  
  it('Play/Pause Spotify playlist', () => {
    cy.visit('https://careers.nandos.co.uk/')
    getIframeBody().find("[title='Play']").should('have.text', 'Play').click()
    cy.wait(1500)
    getIframeBody().find("[title='Pause']").should('have.text', 'Pause').click()
   
    })  
  })
})

const sizes = ['iphone-8', 'ipad-2', 'macbook-16']

describe('Change screen sizes ', () => {
  sizes.forEach((size) => {
    // make assertions on the title using
    // an array of different viewports
    it(`Should display page title on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
      cy.get('div.hero__SubWrapper-sc-7mvbl5-2.cJJTMe > div > h1').should('be.visible')
    })
  })
})



