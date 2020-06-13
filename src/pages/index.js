import React from "react"

import HomeLayout from "../components/homeLayout"
import Experience from "../components/experience"
import Testimonials from "../components/testimonials"
import About from "../components/about"
import SEO from "../components/seo"
import FeaturedProjects from "../components/featuredProjects"
import ContactCTA from "../components/contactCTA"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Application development for humans" />
    <FeaturedProjects />
    <About />
    <Experience />
    <Testimonials />
    <ContactCTA />
  </HomeLayout>
)

export default IndexPage
