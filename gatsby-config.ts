import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Building a Better World - Matt Rigg",
    description:
      "Matt Rigg is a software engineer and entrepreneur based in Seattle who is using his skills to combat the climate crisis.",
    siteUrl: `https://mattrigg.dev`,
  },
  graphqlTypegen: true,
  trailingSlash: "always",
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Matt Rigg",
        short_name: "Matt Rigg",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-JHW7QZX4TF"],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        acl: null,
        bucketName: "mattrigg-portfolio",
        generateRedirectObjectsForPermanentRedirects: true,
        generateRoutingRules: false,
        hostname: "mattrigg.dev",
        protocol: "https",
        region: "us-west-2",
        removeNonexistentObjects: true,
      },
    },
  ],
};

export default config;
