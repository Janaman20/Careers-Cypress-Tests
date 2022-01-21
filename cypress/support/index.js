
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Cannot read properties of undefined')) {
      return false
    }
  })
  require('cypress-xpath')
const COOKIE_NAME = "notice_gdpr_prefs";
const COOKIE_VALUE = "ACCEPTED";

Cypress.on("window:before:load", window => {
  window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
});