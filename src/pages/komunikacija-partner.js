import React from "react"
import Layout from "../components/layout"

const KomunikacijaPartner = () => (
  <Layout>

    <div className="komunikacija-content">
      <div className="komunikacija-title">Partnerski odnos</div>
      <div className="komunikacija-item kom-img">
        <div className="komunikacija-text">
          Ali veste, da je partnerski odnos sestavljen iz 50:50 doprinosa? A ne, kakšno olajšanje <span className="emoji">😉</span>. Ni vse vaše. Se pravi, da ena oseba ne mora biti kriva za vse. Pa saj to v bistvu tudi vemo.
          A vseeno dopuščate, da ko se verbalno spopadeta ( tu gre še za merjenje moči ali ega <span className="emoji">😉</span>), se vas označi kot: »Ti si kriv/kriva za vse!«<br />

          Partner je vaše ogledalo in vi njemu. Kaj to pomeni? Da na vse kar odreagirate, je pravzaprav neka rana, vzorec v vas, ki ga je potrebno ozavestiti in predelati. Zakaj včasih odreagiramo, kot da nas je pičila osa, spet drugič pa kot da ni nič bilo?
          Zaradi vzorcev in prepričanj, ki so v nas in ki smo jih pridobili skozi otroštvo in kasneje skozi dobo odraščanja.
          <br />
          Ampak tudi za to obstaja »zdravilo«. Tu gre za proces, da se naučite, kako najbolj optimalno glede na situacijo, skomunicirati stvari.
        </div>
      </div>
      <div className="kom-img-desc">
        <img className="kom-item-img" src="../assets/kom-partner1.png" alt="" />


        {/*   <img className="kom-item-img partner" src="../assets/vil-zaupanje-12.png" alt="" />
      */}    <div className="vil-description">
          Zaupanje
        </div>
      </div>
    </div>
  </Layout>
)

export default KomunikacijaPartner
