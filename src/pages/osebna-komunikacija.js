import React from "react"
import Layout from "../components/layout"

const komunikacija = () => (
  <Layout>
    <div className="komunikacija-content">
      <div className="komunikacija-title">Osebna komunikacija</div>

      <div className="komunikacija-item">
        <div className="komunikacija-text">
          Zame je <strong>osebna komunikacija</strong> najpomembnejša in
          izhodišče za vse ostalo.
          <br />
          <br />
          Ste kdaj pomislili oziroma razmišljali o tem, da ko se rodimo, smo kot
          bel nepopisan list.
          <br />
          In ko se dobro zavemo svojega obstoja in okolice, kar naenkrat
          ugotovimo, da smo »prejeli« veliko dobronamernih usmeritev, navodil in
          prepričanj, ki velikokrat ne delujejo optimalno za nas. In ko
          ozavestimo in si priznamo, da imamo v svojem življenju kar nekaj
          »prtljage naložene« s strani  staršev, starih staršev itd, nas lahko prevzame groza.
          Da spremenimo svoja prepričanja, vzorce in vse kar nas ustavlja je
          potrebno zagristi v »kislo jabolko«. Vendar tam kje je volja je tudi
          moč in uspeh. Rada se pohecam, da je potrebno stari program izbrisati
          in naložiti novi software, ki je naš in pisan nam na kožo{" "}
          <img
            className="emoji-img"
            src="../icons/wink.png"
            width="30px"
            alt=""
          />
          . Poiskati svoje občutke, misli in besede… tisto kar nam služi, nas
          dviguje in pomaga. Step by step – vse se da.
        </div>
      </div>
      <div className="kom-img-desc">
        <img className="kom-item-img" src="../assets/kom-osebna.png" alt="" />
        <div className="vil-description">Komunikacija</div>
      </div>
    </div>
  </Layout>
)

export default komunikacija
