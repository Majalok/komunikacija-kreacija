import React from "react"
import { Link } from "@reach/router"
import Layout from "../components/layout"

const Aktualno = () => (
  <Layout>
    <div className="aktualno-content">
      <div className="aktualno-title"> Novi zapisi na blogu </div>

      <div className="aktualno-text">
        <ul className="aktualno-ul">
          <br />
          <li className="aktualno-li">
            <Link id="1"
              key="1"
              to="/blog/"
            > Prepričanje</Link>
            <div>1.11.2020</div>
          </li>
          <br />
          <li className="aktualno-li">
            <Link id="0"
              key="0"
              to="/blog/"
            > Bel list</Link>
            <div>15.10.2020</div>
          </li>
          <br />
        </ul>
      </div>
    </div>

  </Layout >
)

export default Aktualno
