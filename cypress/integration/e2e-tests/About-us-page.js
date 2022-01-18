/// <reference types="cypress" />
// Verify links on About Us page and carousel functionality and values 
// Desktop resolution
describe('About Us Page', function ()
    {
        it('Verify title and hero text', function () {
                cy.visit("https://careers.nandos.co.uk/about-us/")
                // cy.get('#truste-consent-button').click({ timeout: 10000 })
                cy.url().should('include','careers') 
                cy.title().should('eq','About Us | Nando\'s Careers') 
                cy.get('div.timeline__StyledHeadingWrapper-sc-1dd8dl1-5.iOgoQW > h2')
                        .contains('The history of Nando\'s ')                
        })

        it('Verify Covid-19 link and url', function () {
                // verify button has the workday website attribute
                // verify the covid-19 url 
                cy.get('div.covid-19-banner__BannerInfo-m0pf6a-1.bEQhyF > a') 
                .should('have.attr', 'href')
                .and('include', '/covid-19-recruitment-update')
                cy.get('div > main > div.covid-19-banner__CentredDiv-m0pf6a-0.gYRnVK > div.covid-19-banner__BannerInfoMobile-m0pf6a-2.exHzla > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://careers.nandos.co.uk/covid-19-recruitment-update')
        })

        it('Verify clicking history carousel 8 times ', function () {
                // click the carousel right side button x 8
                Cypress._.times(8, () => {
                cy.get('button.flickity-button.flickity-prev-next-button.next > svg > path').click() 
                })
        })
        
        it('Verify Nandos carousel year', function () {
                // verify the year of the carousel after clicks 
                cy.get('div.carousel__Slide-sc-5tsd16-1.dLDppT.carousel-slide.is-selected > div > div > h2')
                        .contains('2020') 
                })
        
        it('Verify Apply Now button and link', function () {
                // verify button has the workday website attribute
                // verify the workday url 
                cy.get('#gatsby-focus-wrapper > div > a') 
                .should('have.attr', 'href')
                .and('include', 'https://nandos.wd3.myworkdayjobs.com/Nandos')
                cy.get('#gatsby-focus-wrapper > div > a') 
                .should('have.prop', 'href')
                .and('equal', 'https://nandos.wd3.myworkdayjobs.com/Nandos')
                })
        })

