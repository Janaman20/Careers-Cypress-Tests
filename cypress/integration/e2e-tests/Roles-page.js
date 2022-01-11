/// <reference types="cypress" />

// Verify working links on roles page
// Verify buttons have working links
describe('Roles Page', function ()

    {
        it('Verify UI elements', function () {
                cy.visit("https://preprod.careers.nandos.co.uk/roles/") 
                cy.url().should('include','careers') 
                cy.title().should('eq','Roles | Nando\'s Careers') 
                cy.get('div.hero__SubWrapper-sc-7mvbl5-2.cJJTMe > div').contains('Find your role') 
            })
         
        it('Verify Team Member button link', function () {
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(1)') // verify off hover/unhighlighted state
                cy.get('div.image__StyledDiv-n16yq5-0.kjyqsV.roles-list__StyledImage-vmk9m2-1.cIYene > a') // verify highlighted on hover/highlighted
                .should('have.attr', 'href')
                .and('include', '/roles/team-member/')
                cy.get('div.image__StyledDiv-n16yq5-0.kjyqsV.roles-list__StyledImage-vmk9m2-1.cIYene > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/team-member/')
            })

            it('Verify Assistant Manager button link', function () {
                cy.get('div.image__StyledDiv-n16yq5-0.iBqjRO.roles-list__StyledImage-vmk9m2-1.cIYene > a') 
                .should('have.attr', 'href')
                .and('include', '/roles/assistant-manager/')
                cy.get('div.image__StyledDiv-n16yq5-0.iBqjRO.roles-list__StyledImage-vmk9m2-1.cIYene > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/assistant-manager/')
            })

            it('Verify General Manager button link', function () {
                cy.get('div.image__StyledDiv-n16yq5-0.iUndmY.roles-list__StyledImage-vmk9m2-1.cIYene > a') 
                .should('have.attr', 'href')
                .and('include', '/roles/general-manager/')
                cy.get('div.image__StyledDiv-n16yq5-0.iUndmY.roles-list__StyledImage-vmk9m2-1.cIYene > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/general-manager/')

            })

            it('Verify Central Support button link', function () {
                cy.get('div.image__StyledDiv-n16yq5-0.hdPXRO.roles-list__StyledImage-vmk9m2-1.cIYene > a') 
                .should('have.attr', 'href')
                .and('include', '/roles/central-support/')
                cy.get('div.image__StyledDiv-n16yq5-0.hdPXRO.roles-list__StyledImage-vmk9m2-1.cIYene > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/central-support/')
            })
            
            it('Verify Regional Manager button link', function () {
                cy.get('div.image__StyledDiv-n16yq5-0.cAcDTL.roles-list__StyledImage-vmk9m2-1.cIYene > a') 
                .should('have.attr', 'href')
                .and('include', '/roles/regional-manager/')
                cy.get('div.image__StyledDiv-n16yq5-0.cAcDTL.roles-list__StyledImage-vmk9m2-1.cIYene > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/regional-manager/')
            })

            // TOP NAV LINKS
            it('Team Member top nav button link', function () {
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(1)') 
                .should('have.attr', 'href')
                .and('include', '/roles/team-member/')
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(1)') 
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/team-member/')
            })


            it('Assistant Manager top nav button link', function () {
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(2)') 
                .should('have.attr', 'href')
                .and('include', '/roles/assistant-manager/')
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(2)') 
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/assistant-manager/')
            })

            it('General Manager top nav button link', function () {
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(3)') 
                .should('have.attr', 'href')
                .and('include', '/roles/general-manager/')
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(3)')
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/general-manager/')
            })

            it('Central Support top nav button link', function () {

                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(4)') 
                .should('have.attr', 'href')
                .and('include', '/roles/central-support/')
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(4)') 
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/central-support/')
            })

            it('Regional Manager top nav button link', function () {
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(5)') 
                .should('have.attr', 'href')
                .and('include', '/roles/regional-manager/')
                cy.get('div.roles-nav__Wrapper-sc-1rtx759-0.elhFOG > a:nth-child(5)') 
                .should('have.prop', 'href')
                .and('equal', 'https://preprod.careers.nandos.co.uk/roles/regional-manager/')
            })



            
}

)

