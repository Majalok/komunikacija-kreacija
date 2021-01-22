import React from "react"
import Layout from "../components/layout"

const Aktualno = () => (
  <Layout>
    <div className="aktualno-content">
      <div className="aktualno-title"> Novi zapisi na blogu </div>

      <div className="aktualno-text">
        <ul className="aktualno-ul">
          <li className="aktualno-li">
            Trenutek zdaj ali umiritev misli
            <div>16.12.2020</div>
          </li>
          <br />
          <li className="aktualno-li">
            Prepričanje
            <div>1.11.2020</div>
          </li>
          <br />
          <li className="aktualno-li">
            Bel list
            <div>15.10.2020</div>
          </li>
          <br />
        </ul>
      </div>
    </div>
    <div className="delavnice-content">
      <div className="delavnice-item"></div>
    </div>
  </Layout>
)

export default Aktualno
