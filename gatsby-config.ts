import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Matt Rigg",
    siteUrl: `https://mattrigg.dev`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-transformer-remark"],
};

export default config;
