import React from "react"

import Layout from "../components/layout"
/* import { FaFacebook, FaYoutube, FaMailBulk } from "react-icons/fa" */
import ContactForm from "../components/ContactForm"


const Kontakt = () => (
  <Layout>
    <div className="kontakt-content">
      <div className="o-meni-quote motivation-quote-1 test-quote-1">

        <p className="quote-text">
          Naj <strong>strah</strong> ne bo naša <strong>ovira</strong>. Vsi smo ljudje, krvavi pod kožo in prav vsi hodimo na <strong>wc</strong>. Od tod naprej naj se vklopi vaša domišljija <span className="emoji" role="img">😉</span>
        </p>
      </div>
      <ContactForm />
    </div>
  </Layout>
)

export default Kontakt
