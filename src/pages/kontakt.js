import React from "react"

import Layout from "../components/layout"
import { FaFacebook, FaYoutube, FaMailBulk } from "react-icons/fa"

const Kontakt = () => (
  <Layout>
    <article className="contact-article">
      <header>
        <h5 className="item-title">Podatki o podjetju</h5>
      </header>

      <div className="content-section">
        <p className="content-section-contact">
          Nataša Muc
        </p>
        <p className="content-section-contact">Naslov</p>
        <p className="content-section-contact">Mesto </p>

        <hr />

        <span className="content-section-contact">
          <strong>TRR</strong>
        </span>
        <span>IBAN SI56 0000 0000 0000 000</span>

        <p />
        <span className="content-section-contact">
          <strong>Matična številka</strong>
        </span>
        <span>1234567890123456789</span>

        <p />
        <span className="content-section-contact">
          <strong>Davčna številka</strong>
        </span>
        <span>123456789</span>

        <p />
        <span className="content-section-contact">
          <strong>Email</strong>
        </span>
        <span>test@gmail.com</span>

        <p />
        <span className="content-section-contact">
          <strong>Telefonska številka</strong>
        </span>
        <span>040123456</span>
      </div>

      <footer></footer>
      <hr />
      <div>
        <FaFacebook size="50px" color="darkgrey" />
        <FaYoutube size="50px" color="darkgrey" />
        <FaMailBulk size="50px" color="darkgrey" />
      </div>
    </article>
  </Layout>
)

export default Kontakt
