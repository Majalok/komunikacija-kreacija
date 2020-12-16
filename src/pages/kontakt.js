import React from "react"

import Layout from "../components/layout"
/* import { FaFacebook, FaYoutube, FaMailBulk } from "react-icons/fa" */
import ContactForm from "../components/ContactForm"
import ContactCard from "../components/ContactCard"


const Kontakt = () => (
  <Layout>
    <div className="kontakt-content">

      <div className="o-meni-quote quote-contact">
        <p className="quote-text">
          Soočanje s samim seboj je <i>zanimivo</i>, a občudovanja vredno dejanje. Če pa imaš ob tem še podporo, ki ne obsoja, te usmerja, pokaže kje lahko nekaj spremeniš, je pa veliko lažje.
        </p>
      </div>
      <div className="o-meni-quote quote-contact">
        <p className="quote-text">Če si želite spremembe v življenju, ker niste več zadovoljni s tem kar ste imeli do sedaj, lahko pričnete s spremembo načina komunikacije.</p>
      </div>
      <div className="o-meni-quote quote-contact">
        <p className="quote-text">
          In kot sem že omenila, naj <strong>strah</strong> ne bo naša <strong>ovira</strong>. Naj nas ne hromi. Ko se soočimo z njim in ga presežemo, postanemo zmagovalci.
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
