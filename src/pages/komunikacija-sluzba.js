import React from "react"

import Layout from "../components/layout"

const KomunikacijaSluzba = () => (
  <Layout>
    <div className="komunikacija-intro">
      Občutek imaš, da ti v življenju nič ( ali skoraj nič) ne »laufa«. Poglejva
      kako »stoji« osebna komunikacija 
    </div>
    <div className="komunikacija-content">
      <div className="komunikacija-item">
        <div className="komunikacija-title">
          Komunikacija na delovnem mestu, v šoli, s prijatelji, znanci, lahko
          tudi neznanci ;)
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

export default KomunikacijaSluzba
