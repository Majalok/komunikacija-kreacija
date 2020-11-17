import React from "react"

import Layout from "../components/layout"

const KomunikacijaOtrok = () => (
  <Layout>
    <div className="komunikacija-content">
      <div className="komunikacija-title">Komunikacija z otrokom </div>
      <div className="komunikacija-item kom-img">
        <div className="komunikacija-text">
          Super, odločila sta se da povečata svojo družinico. V glavi preigravata, kako bo, se pripravljata, bereta knjige o starševstvu in vzgoji otroka, pogovarjata s prijatelji, ki že imajo to izkušnjo ipd.
          Ok, lahko pa vaju je njena nosečnost tudi en malce presenetila<span className="emoji">😉</span>. Nič hudega, podata se na pot starševstva.
          <br />
          Običajno, na začetku vse teče kot sta si predstavljala, no več ali manj <span className="emoji">😉 </span>.
          <br />
          Potem pa se počasi prikradejo neprespane noči, ritem življenja, ki ga poznaš, se počasi spreminja. In predno se pravzaprav dobro zaveš, kaj se dogaja, si že ve nekem drugem svetu, ali dajmo reči, scenariju, kot si si ga vrtel/vrtela pred prihodom otroka.
          Skozi daljše obdobje pa še ugotovimo, da rek »Majhni otroci, majhni problemi, veliko otroci, veliki problemi.« še kako drži.
          <br />
          Mi kot starš, se moramo zavedati, da smo prvi v vrsti pri vzgoji in šele potem je okolica in družba. Mi ga »oblikujemo« in mu damo temelje za samostojno življenje.
          <br />
          Tu pogledamo, zakaj se zatikamo, ne razumemo in kako to preseči.
        </div>
      </div>
      <div className="kom-img-desc">
        <img className="kom-item-img" src="../assets/vil-varnostInZascita-12.png" alt="" />
        <div className="vil-description">
          Gre za izjemno močan simbol, ki okrog njegovega uporabnika naredi energijski ščit, tako da v notranjost lahko prodreta le ljubezen in luč, pozitivna energija iz zunanjega sveta.
      </div>
      </div>
    </div>
  </Layout>
)

export default KomunikacijaOtrok
