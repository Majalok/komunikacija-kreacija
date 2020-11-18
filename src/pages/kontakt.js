import React from "react"

import Layout from "../components/layout"
import { FaFacebook, FaYoutube, FaMailBulk } from "react-icons/fa"
import ContactForm from "../components/ContactForm"


const Kontakt = () => (
  <Layout>
    <div className="kontakt-content">
      <div className="kontakt-title">Kontakt: komunikacija-kreacija@gmail.com</div>

      <ContactForm />
    </div>
  </Layout>
)

export default Kontakt
