import React from "react"
import Layout from "../components/layout"

const Predavanja = () => (
  <Layout>
    <div className="predavanja-content">
      <div className="predavanja-item">
        -Kaj je diamantni dotik oziroma kako povečati vrednost vaše dragocene lastnine – vaših odnosov!
    </div>
      <div className="predavanja-item">
        - Nebesedna izražanja
      </div>
    </div>

    <div className="box-container picture" style={{
      backgroundImage: `url(../assets/pticek-trak.png)`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      height: '300px',
      width: '80%'
    }}></div>

  </Layout>
)

export default Predavanja
