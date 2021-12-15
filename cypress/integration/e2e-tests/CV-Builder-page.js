/// <reference types="cypress" />

describe('CV builder page', function ()
    {
        it('Verify CV creation and submission', function ()
            {

                cy.visit("https://preprod.careers.nandos.co.uk/cv-builder/") //visit site
                cy.url().should('include','cv-builder') //verify url should include 'cv-builder'

                cy.title().should('eq','CV builder | Nando\'s Careers') // title verification / team member
        
            }
            )

            it('Title dropdown', function () {

                cy.get('[name="title"]').select('Mr').should('have.value', 'Mr') // select a title
                cy.get('input[name=firstName]').should('be.visible').should('be.enabled').type("Joe") // enter and visibility check first name
                cy.get('input[name=surname]').should('be.visible').should('be.enabled').type("Bloggs") // enter an visibility check last name
                cy.get('input[name=mobileNumber]').should('be.visible').should('be.enabled').type("07544555777") // enter and visibility check a UK mobile number
                cy.get('input[name=email]').should('be.visible').should('be.enabled').type("ikesmood01@gmail.com") // enter and visibility check an email address
                cy.get('input[name=emailConfirm]').should('be.visible').should('be.enabled').type("ikesmood01@gmail.com") // enter, visibility check and confirm email address
                cy.get('textarea[name=address]').should('be.visible').should('be.enabled').type("10 Joe Bloggs Lane, \n N41SN, \n UK") // enter, visibility check and verify an address
                
            }
            )

            it('Verify eligibility status and qualifications', function () {

                cy.get('input[id=eligibility-yes]').should('be.visible').should('be.checked') // visibility check elibility status (is checked)
                cy.get('input[id=eligibility-no]').should('be.visible').should('not.be.checked') // visibility check elibility status (is not checked)

                cy.get('div.education__RemoveButtonWrapper-sc-1vxcfhs-2.lfeqqu > div > input').should('be.visible').should('be.enabled').type("Joe Bloggs University") // enter a University
                cy.get('div.education__RowsWrapper-sc-1vxcfhs-1.gcRNRY > div > div.form-components__StyledControlledField-sc-1y5gh4f-3.JWgNv.form-components__Input-sc-1y5gh4f-4.lddQJp > input').should('be.visible').should('be.enabled').type("Joe Bloggs BSc") // select a qualification
                cy.get('[name="education[0].type"]').select('Degree').should('have.value', 'Degree') // select a degree
                cy.get('[name="education[0].from"]').select('2002').should('have.value', '2002') // select a year from 
                cy.get('[name="education[0].to"]').select('2006').should('have.value', '2006') // select a year to 
                cy.get('button').contains('Add new qualification').click() // add qualification
                cy.get('div:nth-child(1) > div.education__RemoveButtonWrapper-sc-1vxcfhs-2.lfeqqu > button').should('be.visible') // check that qualification has been added by checking remove button
            }
            )

            it('Verify work experience details', function () {

                cy.get('input[id=firstJob-yes]').should('not.be.checked').and('have.value','on')
                cy.get('input[id=firstJob-no]').should('be.visible').should('be.checked') // visibility check elibility status (is not checked)
                // cy.get('input[id=firstJob-yes]').check()

                cy.get('[name="workExperience[0].company"]').should('be.visible').type('Joe Bloggs Company') // type a company
                cy.get('[name="workExperience[0].position"]').should('be.visible').type('Joe Bloggs Position') // type a position
                cy.get('[name="workExperience[0].from"]').select('2018').should('have.value', '2018') // type a year from
                cy.get('[name="workExperience[0].to"]').select('2020').should('have.value', '2020') // type a year to
                cy.get('[name="workExperience[0].responsibilities"]').should('be.visible').type('Joe Bloggs Responsibilities') // type Responsibilities
                cy.get('button').contains('Add new position').click() // add job position
                cy.get('div:nth-child(1) > div:nth-child(1) > div.work-experience__RemoveButtonWrapper-sc-1rvx6du-3.eIHJDY > button').should('be.visible') // check job position

            }
            )

            it('Verify passion and heat-o-meter', function () {

                cy.get('textarea[name=passion]').should('be.visible').should('be.enabled').type("Joe bloggs Passion") // type passions
                cy.get('div.peri-ometer__SpiceWrapper-sc-1du1vcf-2.TTzmm.extra-hot > img.peri-ometer__SpiceText-sc-1du1vcf-4.dGbZpY').click() // select heat
                cy.get('div.peri-ometer__SpiceWrapper-sc-1du1vcf-2.TTzmm.extra-hot.selected').should('be.visible') // verify heat 

            }
            )

            it('Recapcha handling', function () {

                cy.get('iframe') // recaptcha handling
                    .first()
                    .its('0.contentDocument.body')
                    .should('not.be.undefined')
                    .and('not.be.empty')
                    .then(cy.wrap)
                    .find('#recaptcha-anchor')
                    .should('be.visible')
                    .click();

            }
            )

            it('Download CV', function () {
                    
                cy.get('button').contains('Download CV').click() // download cv

            }
            )



    }
    )
            
            
            



