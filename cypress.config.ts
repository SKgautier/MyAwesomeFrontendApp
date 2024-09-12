import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: process.env.VITE_SELF_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
