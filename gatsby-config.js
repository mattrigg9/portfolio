module.exports = {
  siteMetadata: {
    title: `Matt Rigg`,
    description: "Building all of what you need, none of what you don't.",
    author: `@mattrigg9`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {

      },
    },
    'gatsby-plugin-sass'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
