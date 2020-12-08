import React from "react"
import Layout from "../components/layout"

const KomunikacijaSluzba = () => (
  <Layout>
    <div className="komunikacija-content">
      <div className="komunikacija-title">Komunikacija na delovnem mestu - nadrejenimi in sodelavci</div>
      <div className="komunikacija-item kom-img">
        <div className="komunikacija-text">
          Ko sem pred približno 30 leti pričela delati v podjetju, kjer se je pričakovala da boš samoiniciativen, fleksibilen, učljiv, skoraj vedno na razpolago in še kaj bi se našlo, sem dala vse od sebe, da bi »zadovoljila te kriterije« oziroma pričakovanja. Rezultat tega je bil (skozi daljše obdobje), da ko sem se ozrla nazaj, sem videla kako malo sem bila pravzaprav cenjena.
          Kako sem dovolila, da sem bila velikokrat izkoriščena in nikoli pohvaljena –znano, mar ne?- kaj šele nagrajena (čeprav je bilo in je še izvedljivo).
          <br />
          Ko sem pričela z delom na sebi, sem prišla do določenih spoznaj, ki so mi pomagala, da sem postopoma postavila stvari na prava mesta. Postala sem opažena, cenjena in tudi nagrajena.
          <br />
          Kasneje je tudi komunikacija odigrala veliko vlogo. In spoznala sem tudi razliko med zlatim in diamantnim pravilom glede odnosov.
        </div>
      </div>
      <div className="kom-img-desc">
        {/*  <img className="kom-item-img sluzba" src="../assets/vil-odprtost-12.png" alt="" />
       */}
        <img className="kom-item-img sluzba" src="../assets/kom-sluzba.png" alt="" />

        <div className="vil-description">
          Odprtost
        </div>
      </div>
    </div>
  </Layout>
)

export default KomunikacijaSluzba
