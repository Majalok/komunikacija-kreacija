import React from "react"

import Layout from "../components/layout"

const KomunikacijaSplosna = () => (
  <Layout>
    <div className="komunikacija-partner-intro">

    </div>
    <div className="komunikacija-content">
      <div className="komunikacija-title">Komunikacija s prijatelji, sošolci ali na sploh</div>
      <div className="komunikacija-item kom-img">
        <div className="komunikacija-text">
          Verjetno se vam je že pripetilo, da ste nekomu poskušali nekaj dopovedati, pa enostavno ni »štekal«. Ali pa, da ste še z nekom doživela isto stvar, videla isti dogodek, osebo ipd. pa sta jo vsak po svoje doživela in opisala. To je nekaj čisto običajnega. Ljudje smo si različni (hvala bogu <span className="emoji">🙂</span>) z različnimi prioritetami, zaznavanji, občutki…To pomeni, da je za nekoga sončni zahod WOW, za drugega pa NIČ POSEBNEGA.
          <br />
          Če želimo, da smo slišani, razumljeni, da na primer premagamo strah, se je potrebno naučiti jasnega izražanja in seveda na pravi način podati informacije.
          <br />
        </div>
      </div>
      <img className="kom-item-img" src="../assets/vil-novZacetek-1.png" alt="" />
    </div>
  </Layout>
)

export default KomunikacijaSplosna
