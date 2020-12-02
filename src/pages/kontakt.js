import React from "react"

import Layout from "../components/layout"
/* import { FaFacebook, FaYoutube, FaMailBulk } from "react-icons/fa" */
import ContactForm from "../components/ContactForm"
import ContactCard from "../components/ContactCard"


const Kontakt = () => (
  <Layout>
    <div className="kontakt-content">
      <div className="o-meni-quote">

        <p className="quote-text">
          Naj <strong>strah</strong> ne bo naša <strong>ovira</strong>. Vsi smo ljudje, krvavi pod kožo in prav vsi hodimo na <strong>wc</strong>. Od tod naprej naj se vklopi vaša domišljija <span className="emoji" role="img">😉</span>
        </p>
      </div>
      <div className="contact-form-div">
        <ContactForm />
        <ContactCard />
      </div>
    </div>
  </Layout>
)

export default Kontakt
