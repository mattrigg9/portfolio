import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Experience from "../components/experience"
import SEO from "../components/seo"
import FeaturedProjects from "../components/featuredProjects"
import ContactCTA from "../components/contactCTA"

const IndexPage = () => (
  <Layout>
    <SEO title="The best development, tailored to you" />

    <FeaturedProjects />
    <Experience />

    {/* 
TODO: 
- Projects at Amazon
- About me section
- Education

*/}
    <ContactCTA />
  </Layout>
)

export default IndexPage
