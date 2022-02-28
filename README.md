# Careers-Cypress-Tests
Cypress tests for careers website

These smoke tests for the Nandos careers website are a POC for Cypress as a test framework. 

The Percy project https://percy.io/e88796f7/Demo-careers-ja/settings 

## Running the tests

1. cd into Cypress_careers
1. run `yarn run cypress open` or `./node_modules/.bin/cypress open` to open Cypress
1. click on a test to run it
1. run `yarn cypress run`, from command line to run all tests headlessly
1. run `npm run cy:run  -- --spec "cypress/integration/e2e-tests/<test>"` to run a specific test headlessly
2. run `npx percy exec -- cypress run --spec "cypress/integration/e2e-tests/<test>"` to run a percy test 
3. to run percy, you can set environment variables locally using export:

`$ export PERCY_TOKEN=aaabbbcccdddeeefff`

`$ export PERCY_BRANCH=local`

## Switching browsers

The Cypress Test Runner attempts to find all compatible browsers on the user's machine. 
The drop down to select a different browser is in the top right corner of the Test Runner.



