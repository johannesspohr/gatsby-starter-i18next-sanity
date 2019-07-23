/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider")
  .wrapWithI18nProvider
exports.wrapPageElement = wrapWithI18nProvider
