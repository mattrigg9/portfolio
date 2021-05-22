import React from "react"
import ContactLayout from "../components/contactLayout"
import Seo from "../components/seo"
import ContactForm from "../components/contactForm"

const ContactPage = () => (
  <ContactLayout>
    <Seo title="Contact Matt Rigg Application Development." />
    <ContactForm />
  </ContactLayout>
)

export default ContactPage
