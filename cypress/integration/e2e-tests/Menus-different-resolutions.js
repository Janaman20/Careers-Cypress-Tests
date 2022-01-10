/// <reference types="cypress" />


describe('Top nav menu visibility when changing resolution', () => {
    context('macbook-16 resolution', () => {
      beforeEach(() => {
        // run these tests as if in a desktop or laptop
        // browser with a 1536,	960 resolution
        cy.viewport("macbook-16")
      })
  
      it('displays full lower nav', () => {
        // verify lower nav menu is visible in laptop resolution
        // verify mobile menu is hidden
        cy.visit('https://preprod.careers.nandos.co.uk/')
        cy.get('nav.lower-nav__Wrapper-sc-1r1ns03-0.cKUhPc').should('be.visible')
        cy.get("[title='View the main menu']").should('not.be.visible')
      })
    })
  
    context('Change to iphone-xr resolution', () => {
      beforeEach(() => {
        // run these tests as if in a mobile browser
        // and ensure our responsive UI is correct
        cy.viewport('iphone-xr')
      })
  
      it('Display mobile menu and click link from sub menu', () => {
        // verify mobile menu is visible when changed to iphone-xr
        // verify lower nav is hidden
        // open menu and click on work link
        // verify sub menu opens and open why nando's link
        // check why nandos page is loaded 
        cy.get('nav.lower-nav__Wrapper-sc-1r1ns03-0.cKUhPc').should('not.be.visible')
        cy.get("[title='View the main menu']").should('be.visible').click()
        cy.get('div.mobile-menu__LinksContainer-atmg69-0.bnaCKj').should('be.visible')
        cy.get('div:nth-child(4) > div > svg > polygon').should('be.visible').click()
        cy.get('div.mobile-menu__LinksContainer-atmg69-0.bnaCKj > div').should('be.visible')
        cy.get('div > a:nth-child(6)').should('be.visible').click()
        cy.title().should('eq','Why join Nando\'s? | Nando\'s Careers') 
      })
    })

    context('Change to ipad resolution', () => {
      beforeEach(() => {
        // run these tests as if in a mobile browser
        // and ensure our responsive UI is correct
        cy.viewport('ipad-2')
      })

      it('Display mobile menu and click link', () => {
        // repeat last test but click on 'work' from mobile menu
        // verify careers homepage has loaded
        cy.visit('https://preprod.careers.nandos.co.uk/')
        cy.get('nav.lower-nav__Wrapper-sc-1r1ns03-0.cKUhPc').should('not.be.visible')
        cy.get("[title='View the main menu']").should('be.visible').click()
        cy.get('div.mobile-menu__LinksContainer-atmg69-0.bnaCKj').should('be.visible')
        cy.get('div.mobile-menu__LinksContainer-atmg69-0.bnaCKj > div:nth-child(4) > a').should('be.visible').click()
        cy.title().should('eq','Home | Nando\'s Careers') // title verification / home page
        
        
        })
      })

})