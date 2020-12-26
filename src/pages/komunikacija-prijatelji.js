import React from "react"
import Layout from "../components/Layout"

const KomunikacijaPrijatelji = () => (
  <Layout>
    <div className="komunikacija-partner-intro"></div>
    <div className="komunikacija-content">
      <div className="komunikacija-title">
        Komunikacija s prijatelji, sošolci ali na sploh
      </div>
      <div className="komunikacija-item kom-img">
        <div className="komunikacija-text">
          Verjetno se vam je že pripetilo, da ste nekomu poskušali nekaj
          dopovedati, pa enostavno ni »štekal«. Ali pa, da ste še z nekom
          doživela isto stvar, videla isti dogodek, osebo ipd. pa sta jo vsak po
          svoje doživela in opisala. To je nekaj čisto običajnega. Ljudje smo si
          različni (hvala bogu{" "}
          <img
            className="emoji-img"
            src="../icons/smile.png"
            width="30px"
            alt=""
          />
          ) z različnimi prioritetami, zaznavanji, občutki…To pomeni, da je za
          nekoga sončni zahod WOW, za drugega pa NIČ POSEBNEGA.
          <br />
          Če želimo, da smo slišani, razumljeni, da na primer premagamo strah,
          se je potrebno naučiti jasnega izražanja in seveda na pravi način
          podati informacije.
          <br />
        </div>
      </div>
      <div className="kom-img-desc">
        <img
          className="kom-item-img"
          src="../assets/vil-komunikacija-1.png"
          alt=""
        />
        <div className="vil-description">Nov začetek</div>
      </div>
    </div>
  </Layout>
)

export default KomunikacijaPrijatelji
