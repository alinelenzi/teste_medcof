const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "n5e697",
  retries: {
    runMode: 0,
    openMode: 0,
  },
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.grupomedcof.com.br/",
    watchForFileChanges: false
  },
  includeShadowDom: true
});