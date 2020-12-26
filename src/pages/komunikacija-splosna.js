import React from "react"
import Layout from "../components/layout"

const KomunikacijaSplosna = () => (
  <Layout>
    <div className="komunikacija-content">
      <div className="komunikacija-title">
        Komunikacija s sorodniki, prijatelji, sošolci ali na sploh
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
          Če želimo, da smo slišani, razumljeni, da premagamo strah, si zaupamo,
          se je potrebno naučiti jasnega izražanja in seveda na pravi način
          podati informacije. Na novo začneš graditi odnose skozi komunikacijo,
          v katerih je izražena jasnost in kjer se dopušča, da ima vsak svojo
          prepričanje.
          <br />
        </div>
      </div>
      <div className="kom-img-desc">
        <img
          className="kom-item-img splosna"
          src="../assets/kom-splosna.png"
          alt=""
        />
        <div className="vil-description">Nov začetek</div>
      </div>
    </div>
  </Layout>
)

export default KomunikacijaSplosna
