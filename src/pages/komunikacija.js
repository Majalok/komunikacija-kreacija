import React from "react"

import Layout from "../components/layout"

const komunikacija = () => (
  <Layout>
    <div className="komunikacija-intro">
      Občutek imaš, da ti v življenju nič ( ali skoraj nič) ne »laufa«. Poglejva
      kako »stoji« osebna komunikacija 
    </div>
    <div className="komunikacija-content">
      <div className="komunikacija-item">
        <div className="komunikacija-title">Ti in partner-ka</div>
        <div className="komunikacija-text">
          prepričan-a si, da govorita en mimo drugega, se ne razumeta ali še
          huje, ne slišita. Kot da bi bila iz drugega planeta. No, saj ženske
          smo iz Venere, moški iz Marsa, tako da ni daleč od resnice (malo za
          šalo, malo za res) <span className="emoji">😃</span>. Gre za 50:50 doprinos.
        </div>
      </div>
      <div className="komunikacija-item">
        <div className="komunikacija-title">
          Komunikacija na delovnem mestu, v šoli, s prijatelji, znanci, lahko
          tudi neznanci <span className="emoji">😉 </span>
        </div>
        <div className="komunikacija-text">
          Se zatika, ni vedno tekoča, kar je popolnoma razumljivo, saj nismo
          vedno v najboljši »izvedbi« samega sebe, vendar si želimo več svetlih
          trenutkov. Vse se da urediti.
        </div>
      </div>
    </div>
    <div className="komunikacija-content-bottom">
      Bistvo vsega je DIALOG, ki se odraža skozi SLIŠATI in BITI SLIŠAN.
      Monolog pa je zelo pomemben pri komunikaciji s seboj.
      </div>

  </Layout>
)

export default komunikacija
