const githubConfig = require("./config/github")
const aliases = require("./config/alias")

module.exports = {
  siteMetadata: {
    title: `Matt Rigg`,
    description: "Application development for humans.",
    author: `@mattrigg9`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sass",
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    ...githubConfig.plugins,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "mattrigg-portfolio",
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: aliases,
        extensions: ["js", "json"],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Serif\:400`,
          `Open Sans\:300,400,700,`
        ],
        display: 'swap'
      }
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
        background_color: `#343447`,
        theme_color: `#272736`,
        display: `minimal-ui`,
        icon: `src/assets/images/mattrigg-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167538745-1",
      },
    },
  ],
}
