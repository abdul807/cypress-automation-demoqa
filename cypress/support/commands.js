// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
require('cypress-xpath');
require('cy-verify-downloads').addCustomCommand();
import 'cypress-file-upload';
// require('cypress-downloadfile');
// require('cypress-downloadfile/lib/downloadFileCommand')

// Cypress.Commands.add("downloadFile", (filename) => {
//   cy.wait(1000); // wait for file to start downloading
//   return cy.readFile(`cypress/downloads/${filename}`).then((data) => {
//     return data;
//   });
// });
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })