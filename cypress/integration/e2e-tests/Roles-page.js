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


                


                // cy.waitFor(5000)
                // cy.title().should('eq','Team Member | Nando\'s Careers') // title verification / team member
                // cy.get('.intro__CentredDiv-k5zjku-0.djdQRT > div > p').contains("Brimming with passion and personality, a Nando’s Team Member puts everything they have into everything they do, helping create those unforgettable customer experiences.") // verify team member hero text
                // cy.get('.first-content-row__RightColumn-sc-95l781-3.bMyXwe > div > button').click() // play video
                // cy.wait(3000) // wait for video to play
                // cy.get('.bMyXwe > div:nth-child(2) > button > svg > path').click() // close video after 5 secs
                // cy.get('button').contains('Grillers').click() // open grillers accordion
                // cy.get('div:nth-child(1) > div > p').contains('Keeping our customers coming back for more by grilling the PERi-PERi goodness we’re famed for. Think of yourself as a Kitchen Assistant with the skills of a flame-thrower. One who obeys all health and safety laws.') // check grillers text
                // cy.get('div:nth-child(1) > div > div > a > span.button__BottomHalf-oyjxxm-2.hoqtZm.button-cta').contains('View our locations').click() // open job location page
            
                // cy.title().should('eq','Locations | Nando\'s Careers') // title verification / home page
                // cy.get('div.intro__CentredDiv-k5zjku-0.djdQRT > div > p').contains('We’re expanding rapidly, with restaurants opening here, there and everywhere. In fact, at our current rate, we are opening a new restaurant every other week. And with over 450 restaurants right across the length and breadth of the UK & Ireland already, plus our Central Support team, you probably don’t have to go as far as you think to start your Nando’s career. Take a look to see our available jobs, what to expect when you step inside one of our restaurants or Central Support, and find an opportunity in your local Nando’s.') // verify team member hero text
                // cy.get('input[name=search]').should('be.visible').should('be.enabled').type("N41SN") // enter postcode into locations textbox
                // cy.get('button').contains('Search').click() // search for postcode
                // cy.get('div.first-content-row__Wrapper-sc-1sjpuex-0.egRQro > h2').contains('Find Your Role') // verify team member hero text


                // cy.get('div.first-content-row__Wrapper-sc-1sjpuex-0.egRQro > div > a') // verify button has the workday website attribute
                // .should('have.attr', 'href')
                // .and('include', 'wd3.myworkdayjobs.com/Nandos')
          
                // cy.get('#gatsby-focus-wrapper > div > main > div.first-content-row__Wrapper-sc-1sjpuex-0.egRQro > div > a') // verify the workday url 
                // .should('have.prop', 'href')
                // .and('equal', 'https://nandos.wd3.myworkdayjobs.com/Nandos')
                

            

            }

)
}
)