import React from "react"
import Layout from "../components/layout"

import { Link } from "@reach/router"


const Aktualno = () => (
  <Layout>
    <div className="aktualno-content">
      <div className="aktualno-title"> Novi zapisi na blogu </div>

      <div className="aktualno-text">
        <br />
        <ul className="aktualno-ul">
          <li className="aktualno-li">
            <Link to={"/blog#zenska"}> Ženska
            <div>31.3.2021</div></Link>
          </li>
          <br />
          <li className="aktualno-li">
            <Link to={"/blog#odlocitve"}>
              Odločitve
              <div>27.2.2021</div>
            </Link>
          </li>
          <br />
          <li className="aktualno-li">
            <Link to={"/blog#svobodnaVolja"}>Svobodna volja ali izbira
              <div>30.1.2021</div>
            </Link>
          </li>
          <br />
          <li className="aktualno-li">
            <Link to={"/blog#trenutekZdaj"}>
              Trenutek zdaj
              <div>16.12.2020</div>
            </Link>
          </li>
          <br />
          <li className="aktualno-li">
            <Link to={"/blog#prepricanjeVzrok"}>
              Prepričanje
              <div>1.11.2020</div>
            </Link>
          </li>
          <br />
          <li className="aktualno-li">
            <Link to={"/blog#belList"}>
              Bel list
              <div>15.10.2020</div>
            </Link>
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
