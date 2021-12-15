/// <reference types="cypress" />

describe('locating elements',function()
    {
        it('Verify types of locators', function()
            {

            cy.visit("https://demo.nopcommerce.com/") // Opens the url

            cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") // search box
            
            cy.get("[type='submit']").click() // click on search button

            cy.get(".product-box-add-to-cart-button").click() // add to cart
            
            cy.get("#product_enteredQuantity_4").clear().type('2') // quantity changed

            cy.get("#add-to-cart-button-4").click() // add to cart after providing quantity

            cy.wait(5000) // wait for 'added to cart' message to disapear
            
            cy.get("#topcartlink > a > span.cart-label").click() // shopping cart link
            cy.wait(3000)

            cy.get(".product-unit-price").contains("$1,800.00") // validation of the unit price

            }
        
        )
    }

)
