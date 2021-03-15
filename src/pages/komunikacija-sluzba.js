import React from "react"
import Layout from "../components/layout"

const KomunikacijaSluzba = () => (
  <Layout>
    <div className="komunikacija-content">
      <div className="komunikacija-title">
        Komunikacija na delovnem mestu - nadrejenimi in sodelavci
      </div>
      <div className="komunikacija-item kom-img">
        <div className="komunikacija-text">
          Ko sem pred približno 30 leti pričela delati v podjetju, kjer se je
          pričakovalo, da boš samoiniciativen, fleksibilen, učljiv, skoraj vedno
          na razpolago in še kaj bi se našlo, sem dala vse od sebe, da bi
          »zadovoljila te kriterije«, oziroma pričakovanja. Ko sem se ozrla
          nazaj (seveda gledano skozi daljše obdobje), je bil rezultat tega
          občutek, kako malo sem bila pravzaprav cenjena. Kako sem dovoljevala
          nespoštljivo komunikacijo in da delo, ki sem ga vestno in
          samoiniciativno opravljala, ni bilo opaženo, kaj šele priznano. <br />
          Ko sem pričela z delom na sebi, sem prišla do določenih spoznaj, ki so
          mi pomagala, da sem postopoma postavila stvari na prava mesta. Postala
          sem opažena, cenjena in tudi nagrajena.
          <br />
          Način komunikacije in zaupanje vase sta odigrali veliko vlogo.
          <br />
          Izkušnje v službi, pa so me privedle še do enega zelo pomembnega
          spoznanja. Da obstajata zlato in diamantno pravilo glede odnosov in
          kakšna je njuna razlika.
        </div>
      </div>
      <div className="kom-img-desc">
        {/*  <img className="kom-item-img sluzba" src="../assets/vil-odprtost-12.png" alt="" />
         */}
        <img
          className="kom-item-img sluzba"
          src="../assets/kom-sluzba.png"
          alt=""
        />

        <div className="vil-description">Odprtost</div>
      </div>
    </div>
  </Layout>
)

export default KomunikacijaSluzba
