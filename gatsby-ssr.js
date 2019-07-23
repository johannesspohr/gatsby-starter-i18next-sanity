/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider")
  .wrapWithI18nProvider

exports.wrapPageElement = wrapWithI18nProvider
