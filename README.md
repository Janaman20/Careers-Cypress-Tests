## Careers-Cypress-Tests
cypress tests for careers website

These smoke tests for the Nandos careers website are a POC for Cypress as a test framework. 

# Running the tests

1. run `yarn run cypress open` or `./node_modules/.bin/cypress` to open Cypress
1. click on a test to run it
1. run 'yarn cypress run, from command line to run all tests headlessly
1. run `npm run cy:run  -- --spec "cypress/integration/e2e-tests/<test>"` to run a specific test headlessly

# Switching browsers

The Cypress Test Runner attempts to find all compatible browsers on the user's machine. 
The drop down to select a different browser is in the top right corner of the Test Runner.



