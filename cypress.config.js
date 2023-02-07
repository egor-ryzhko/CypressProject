const { defineConfig } = require("cypress");
const plugins = require('./cypress/plugins');

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  pageLoadTimeout: 15000,
  e2e: {
    baseUrl: 'https://manybooks.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return plugins(on, config);
    },
  },
});
