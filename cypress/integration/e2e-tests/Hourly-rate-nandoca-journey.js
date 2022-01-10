/// <reference types="cypress" />

// E2E test of hourly nandoca job app journey to WD
// Based on flow here: https://www.figma.com/file/N8h0GcgwDF75lHkq9ORc7J/Nandos-Careers-Websire?node-id=0%3A1 
describe('Hourly Nandocas', function ()
    {
        it('Verify homepage url, title and hero text', function () {
                cy.visit("https://preprod.careers.nandos.co.uk/") 
                cy.url().should('include','careers') 
                cy.title().should('eq','Home | Nando\'s Careers') 
                cy.get('.hero__SubWrapper-sc-7mvbl5-2.cJJTMe')
                    .contains("Heart and soul. Passion and personality. You may know us as the home of PERi-PERi goodness, but we like to think of ourselves as more than that. At Nando’s, it’s the people that make the chicken.") // verify homepage hero text
            })
                
        it('Verify Team Member page', function () {
                cy.get('.button__BottomHalf-oyjxxm-2.jTtRLh.button-cta').contains('Team Member').click() /               
                cy.waitFor(5000)
                cy.title().should('eq','Team Member | Nando\'s Careers') 
                cy.get('.intro__CentredDiv-k5zjku-0.djdQRT > div > p')
                    .contains("Brimming with passion and personality, a Nando’s Team Member puts everything they have into everything they do, helping create those unforgettable customer experiences.") // verify team member hero text
            })

        it('Verify playback and accordion function', function () {
                cy.get('.first-content-row__RightColumn-sc-95l781-3.bMyXwe > div > button').click() 
                cy.wait(3000) 
                cy.get('.bMyXwe > div:nth-child(2) > button > svg > path').click() 
                cy.get('button').contains('Grillers').click() 
                cy.get('div:nth-child(1) > div > p').contains('Keeping our customers coming back for more by grilling the PERi-PERi goodness we’re famed for. Think of yourself as a Kitchen Assistant with the skills of a flame-thrower. One who obeys all health and safety laws.') // check grillers text
                cy.get('div:nth-child(1) > div > div > a > span.button__BottomHalf-oyjxxm-2.hoqtZm.button-cta')
                    .contains('View our locations').click() 
            })

            it('Verify locations functions', function () {
                cy.title().should('eq','Locations | Nando\'s Careers') 
                cy.get('div.intro__CentredDiv-k5zjku-0.djdQRT > div > p')
                    .contains('We’re expanding rapidly, with restaurants opening here, there and everywhere. In fact, at our current rate, we are opening a new restaurant every other week. And with over 450 restaurants right across the length and breadth of the UK & Ireland already, plus our Central Support team, you probably don’t have to go as far as you think to start your Nando’s career. Take a look to see our available jobs, what to expect when you step inside one of our restaurants or Central Support, and find an opportunity in your local Nando’s.') // verify team member hero text
                cy.get('input[name=search]').should('be.visible').should('be.enabled').type("N41SN") 
                cy.get('button').contains('Search').click() 
                cy.get('div.first-content-row__Wrapper-sc-1sjpuex-0.egRQro > h2')
                    .contains('Find Your Role') 
            })

            it('Verify Workday button link and url', function () {
                cy.get('div.first-content-row__Wrapper-sc-1sjpuex-0.egRQro > div > a') 
                .should('have.attr', 'href')
                .and('include', 'wd3.myworkdayjobs.com/Nandos')
                cy.get('#gatsby-focus-wrapper > div > main > div.first-content-row__Wrapper-sc-1sjpuex-0.egRQro > div > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://nandos.wd3.myworkdayjobs.com/Nandos')
            })               
})

