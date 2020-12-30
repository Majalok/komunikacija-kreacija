import React from "react"
import Layout from "../components/layout"

const KomunikacijaOtrok = () => (
  <Layout>
    <div className="komunikacija-content">
      <div className="komunikacija-title">Komunikacija z otrokom </div>
      <div className="komunikacija-item kom-img">
        <div className="komunikacija-text">
          Super, odločila sta se da povečata svojo družinico. V glavi
          preigravata, kako bo, se pripravljata, bereta knjige o starševstvu in
          vzgoji otroka, pogovarjata s prijatelji, ki že imajo to izkušnjo ipd.
          Lahko pa vaju je nosečnost tudi en malce presenetila. Nič hudega,
          podata se na pot starševstva.
          <br />
          Običajno, na začetku vse teče kot sta si predstavljala, no več ali
          manj{" "}
          <img
            className="emoji-img"
            src="../icons/wink.png"
            width="30px"
            alt=""
          />
          .
          <br />
          Potem pa se počasi prikradejo neprespane noči, ritem življenja, ki ga
          poznaš, se počasi spreminja. In predno se pravzaprav dobro zaveš, kaj
          se dogaja, si že ve nekem drugem svetu oziroma scenariju. Skozi daljše
          obdobje pa še ugotoviš, da rek »Majhni otroci, majhni problemi, veliki
          otroci, veliki problemi.« še kako drži.
          <br />
          Mi kot starš, se moramo zavedati, da smo prvi in najbolj odgovorni pri vzgoji otroka in šele potem so tu okolica, šola in družba. Mi ga »oblikujemo« in mu damo zdrave
          temelje za samostojno življenje. Mi mu moramo dati tisti pravi občutek
          varnosti in zaščite.
          <br />
          Tu pogledamo, zakaj se "zatikamo", ne razumemo in kako to preseči.
        </div>
      </div>
      <div className="kom-img-desc">
        <img className="kom-item-img" src="../assets/kom-otrok.png" alt="" />

        {/* <img className="kom-item-img" src="../assets/vil-varnostInZascita-12.png" alt="" />
         */}
        <div className="vil-description">Varnost in zaščita</div>
      </div>
    </div>
  </Layout>
)

export default KomunikacijaOtrok
