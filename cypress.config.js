const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/v1/',
    defaultCommandTimeout: 10000, //Attente de 16sec avant un crash
    specPattern: [
      "cypress/e2e/**/*.spec.js",
      "cypress/**/*.cy.js",
      "cypress/e2e/**/*.js"
    ]
  },
});
