import React from "react"

import Layout from "../components/layout"
import { FaFacebook, FaYoutube, FaMailBulk } from "react-icons/fa"
import ContactForm from "../components/ContactForm"


const Kontakt = () => (
  <Layout>
    <div className="kontakt-content">
      <ContactForm />
    </div>
  </Layout>
)

export default Kontakt
