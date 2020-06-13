import React from "react"
import ContactLayout from "../components/contactLayout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const ContactPage = () => (
  <ContactLayout>
    <SEO title="Contact Matt Rigg Application Development." />
    <ContactForm />
  </ContactLayout>
)

export default ContactPage
