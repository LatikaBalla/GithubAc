const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/report",
    "charts": true,
    "saveHtml": true,
    "json": true,
    "reportPageTitle": "Legrande Cypress",
    "reportFilename": "Report",
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "overwrite": true 
  },
   
});
