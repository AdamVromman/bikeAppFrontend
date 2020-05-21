// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    cy.server();
    cy.route({
        method:'GET',
        url: 'http://localhost:4200/api/bikes/fixie',
        status: 200,
        response:'fixture:fixie.json'
    });
    cy.route({
        method:'GET',
        url: 'http://localhost:4200/api/bikes/',
        status: 200,
        response:'fixture:bikes.json'
    });
    cy.route({
        method:'GET',
        url: 'http://localhost:4200/api/parts',
        status: 200,
        response:'fixture:parts.json'
    })
    cy.route(
        {
            method:'GET',
        url: 'http://localhost:4200/api/addedparts',
        status: 200,
        response:'fixture:addedparts.json'
        }
    )
    cy.log("set up server and routes");

  })
