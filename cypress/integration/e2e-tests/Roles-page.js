/// <reference types="cypress" />

describe('About Us Page', function ()
    {
        it('Verify UI elements', function ()
            {

                cy.visit("https://preprod.careers.nandos.co.uk/about-us/") //visit site
                cy.url().should('include','careers') //verify url should include 'careers'


                cy.title().should('eq','About Us | Nando\'s Careers') // title verification / home page
                // cy.get('#gatsby-focus-wrapper > div > main > div.intro__CentredDiv-k5zjku-0.djdQRT > div > p').contains('Today, there are over 450 Nando’s restaurants in the UK and Ireland, but our story starts long before the first UK restaurants opened here in the West London suburb of Ealing. It’s a story of discovery, passion andambition. It’s an evolving story too, so while we always look back on where we’ve come from with pride, it’s where we’re going next that really gets us excited. Have a read for yourself and see if you agree.') // verify homepage hero text
                cy.get('div.timeline__StyledHeadingWrapper-sc-1dd8dl1-5.iOgoQW > h2').contains('The history of Nando\'s ') // open team member page                
                cy.get('button.flickity-button.flickity-prev-next-button.next > svg').should('be.visible').dblclick() // click continue button
                cy.get('div.carousel__Slide-sc-5tsd16-1.dLDppT.carousel-slide.is-selected > div > div > h2').contains('1997')
                cy.get('div.carousel__Slide-sc-5tsd16-1.dLDppT.carousel-slide.is-selected > div > div > h2').contains('1997')


            
            

            }

)
}
)