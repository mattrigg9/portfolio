const githubConfig = require("./config/github")
const aliases = require("./config/alias")

module.exports = {
  siteMetadata: {
    title: `Matt Rigg`,
    description: "Building all of what you need, none of what you don't.",
    author: `@mattrigg9`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    `gatsby-transformer-remark`,
    ...githubConfig.plugins,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: aliases,
        extensions: ["js", "json"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Rigg Development`,
        short_name: `Matt Rigg`,
        lang: `en`,
        start_url: `/`,
        background_color: `#013158`,
        theme_color: `#ffd36b`,
        display: `minimal-ui`,
        icon: `src/assets/images/mattrigg-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
