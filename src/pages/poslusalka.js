import React from "react"
import Layout from "../components/layout"

const Poslusalka = () => (
  <Layout>
    <div className="komunikacija-content">
      <div className="komunikacija-title">Poslušalka</div>
      <div className="komunikacija-item kom-img">
        <div className="komunikacija-text">
          V današnjem svetu in načinu življenja, ko norimo sem in tja, sem
          ugotovila, da se je veliko ljudi na svoji poti izgubilo. Izgubili so
          sebe in svoj smisel življenja. Pravzaprav, so izgubili tisto iskrico v
          očeh, joy ali elan, ki ti da zagon za boljši jutri.
          <br />
          In včasih je dovolj že to, da breme, ki ga nosiš, podeliš še z nekom,
          neznancem, ki ne obsoja in ne pametuje, ampak samo posluša.
          <br />
          Lahko pa vam, kot zunanja opazovalka, ki ni čustveno vpletena v situacijo, povem/nakažem v kateri smeri poskušajte situacijo rešiti, oziroma v katero smer iti, da boste šli proti rešitvi in ne od nje. Temu jaz
          pravim, POGLED IZ DRUGEGA ZORNEGA KOTA.
        </div>
      </div>
      <div className="kom-img-desc">
        <img
          className="kom-item-img"
          src="../assets/kom-poslusalka.png"
          alt=""
        />
        <div className="vil-description">Uspeh</div>
      </div>
    </div>
  </Layout>
)

export default Poslusalka
