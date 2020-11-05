import React from "react"

import Layout from "../components/layout"

const scrollToRefObject = (ref) => window.scrollTo(0, ref.current.offsetTop)

const komunikacija = () => (
  <Layout>
    <div className="komunikacija-content">
      <div className="komunikacija-title">Osebna komunikacija</div>

      <div className="komunikacija-item">
        <div className="komunikacija-text">
          Zame je <strong>osebna komunikacija</strong> najpomembnejša in izhodišče za vse ostalo.
          <br />
          <br />
           Ste kdaj pomislili oz. razmišljali o tem, da ko se rodimo smo kot bel nepopisan list.
           <br />
            In ko se dobro zavemo svojega obstoja in okolice, kar naenkrat ugotovimo, da smo »prejeli« veliko »dobronamernih« usmeritev, navodila, prepričanj, ki velikokrat ne delujejo optimalno za nas.
            In ko ozavestimo in si priznamo, da imamo v svojem življenju kar nekaj »prtljage« od staršev, starih staršev itd nas lahko prevzame groza.
            Da spremenimo svoja prepričanja, vzorce in vse kar nas ustavlja je potrebno zagristi v »kislo jabolko«. Vendar tam kje je volja je tudi moč in uspeh.
            Rada se pohecam, da je potrebno stari program izbrisati in naložiti novi softwere, ki je naš in pisan nam na kožo <span className="emoji">😉 </span>.
            Poiskati svoje občutke, misli in besede…tisto kar nam služi, nas dviguje in pomaga. Step by step – vse se da.
        </div>
      </div>
      <img className="kom-partner-img" src="../assets/vil-komunikacija.png" alt="" />
    </div>
    <div className="komunikacija-content-bottom">

    </div>

  </Layout>
)

export default komunikacija
