import React from "react"

import Layout from "../components/layout"
import ImageContainer from "../components/ImageContainer"

const PomocPriPromociji = () => (
  <Layout>
    <div className="promocija-content">

      <p className="promotion-text">
        Ja, nekateri živijo svoje sanje, spet drugi so v nizkem zaletu in tretji… še ni zrelo <span className="emoji">😉</span>
        <br />
        <br />
        Imaš idejo, znanje, veselje in produkt a nikakor zadeva ne steče, tako kot si želiš.
        <br />
        <br />
        Včasih je potrebno, da te nekdo spromovira, govori o tvojem čudovitem izdelku, znanju ali storitvi.
        Moja strast in želja je, da si pomagamo, da se povežemo.
        <br />
        <br />
        Zato, če potrebuješ malo pomoči pri »vzletu«, sem tu <span className="emoji">😉</span>. Vsi vemo, da ko te nekdo priporoči ali govori
        o tvoji strasti, ki jo želiš deliti z drugimi, gre veliko hitreje.
        <br />
        <br />
        Spoznajva se, poglejva kaj ponujaš oziroma kaj iščeš in kako ti lahko pomagam.
        Mogoče pa potrebuješ samo potrditev, da si na pravi poti <span className="emoji">😉</span>
        <br />
        <br />
      </p>

      <div className="gallery-content">

        <img className="gallery-img img-1" width="100px" src="../assets/1-p.jpg" alt="" />

        <img className="gallery-img img-4" src="../assets/4-p.jpg" alt="" />
        <img className="gallery-img img-7" src="../assets/7-p.jpg" alt="" />

        <img className="gallery-img img-5" src="../assets/5-p.jpg" alt="" />

        <img className="gallery-img img-6" src="../assets/6-p.jpg" alt="" />
        <img className="gallery-img img-2" src="../assets/2-p.jpg" alt="" />
        <img className="gallery-img img-3" src="../assets/3-p.jpg" alt="" />


        {/* <ImageContainer
          images={this.state.images}
          thumbs={this.state.thumbs}
        /> */}
      </div>
    </div>
  </Layout >
)

export default PomocPriPromociji
