import React from "react"

import Layout from "../components/layout"

const SplosnaKomunikacija = () => (
  <Layout>
    {/*  <div className="komunikacija-intro">
      Občutek imaš, da ti v življenju nič ( ali skoraj nič) ne »laufa«. Poglejva
      kako »stoji« osebna komunikacija 
    </div> */}

    <div className="komunikacija-content">
      <div className="komunikacija-item">

        <div className="komunikacija-title">Komunikacija na delovnem mestu, v šoli, s prijatelji, znanci, lahko
          tudi neznanci <span className="emoji">😉 </span> </div>
        <br />
        <div className="komunikacija-text">
          Se zatika, ni vedno tekoča, kar je popolnoma razumljivo, saj nismo
          vedno v najboljši »izvedbi« samega sebe, vendar si želimo več svetlih
          trenutkov. Vse se da urediti.
        </div>
        <img className="kom-sluzba-img" src="../assets/kom4.png" alt="" />
      </div>
    </div>
  </Layout>
)

export default SplosnaKomunikacija
