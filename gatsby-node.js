/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const contactPage = path.resolve(`src/pages/contact.js`)
  createPage({
    path: `/contact`,
    component: contactPage,
  })
}
