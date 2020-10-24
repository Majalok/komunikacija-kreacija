import React from "react"

import Layout from "../components/layout"

const KomunikacijaPartner = () => (
  <Layout>
    <div className="komunikacija-parner-intro">

    </div>
    <div className="komunikacija-content">
      <div className="komunikacija-title">Ti in partner-ka</div>
      <div className="komunikacija-item">
        <br />
        <div className="komunikacija-text">
          prepričan-a si, da govorita en mimo drugega, se ne razumeta ali še
          huje, ne slišita. Kot da bi bila iz drugega planeta. No, saj ženske
          smo iz Venere, moški iz Marsa, tako da ni daleč od resnice (malo za
          šalo, malo za res) :D. Gre za 50:50 doprinos.
        </div>
        <img className="kom-partner-img" src="../assets/kom3.jpg" alt="" />
      </div>

    </div>
    <div className="komunikacija-content-bottom">
      Bistvo vsega je DIALOG, ki se odraža skozi SLIŠATI in BITI SLIŠAN.
      Monolog pa je zelo pomemben pri komunikaciji s seboj.<span className="emoji"> 🙂👍 </span>
    </div>

  </Layout>
)

export default KomunikacijaPartner
