import React from "react"

import Layout from "../components/layout"

const Predavanja = () => (
  <Layout>
    <article>
      <section className="content-section history-section">
        <p className="item-title">title1</p>

        <p className="content-section">
          text
        </p>
        <p className="item-title">title 1 - 1</p>
        <p className="content-section">
        text
        </p>
        <p className="item-title">title 1 - 2 </p>
        <p className="content-section">
        text
        </p>
        <p className="item-title">title 1 - 3</p>

        <p className="content-section">
        text
          <br />
          <br />
          text
        </p>
      </section>
      <footer></footer>
    </article>
  </Layout>
)

export default Predavanja
