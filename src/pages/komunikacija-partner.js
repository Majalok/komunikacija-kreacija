import React from "react"
import Layout from "../components/layout"

const KomunikacijaPartner = () => (
  <Layout>
    <div className="komunikacija-content">
      <div className="komunikacija-title">Partnerski odnos</div>
      <div className="komunikacija-item kom-img">
        <div className="komunikacija-text">
          Ali veste, da je partnerski odnos sestavljen iz 50:50% doprinosa? A
          ne, kakšno olajšanje{" "}
          <img
            className="emoji-img"
            src="../icons/wink.png"
            width="30px"
            alt=""
          />
          . Se pravi, da ena oseba ne mora biti kriva za vse. Pa saj to v
          bistvu, nekje globoko v sebi, tudi sami že veste. A vseeno dopuščate,
          da ko se verbalno spopadeta ( tu gre še za merjenje moči ali ega{" "}
          <img
            className="emoji-img"
            src="../icons/wink.png"
            width="30px"
            alt=""
          />
          ), se vas obtoži v smislu: »Ti si kriv/kriva za vse!«
          <br />
          Partner je vaše ogledalo in vi njemu. Kaj to pomeni? Da je vse, na kar
          odreagirate, pravzaprav neka rana, vzorec v vas, ki ga je potrebno
          ozavestiti in predelati. Zakaj včasih odreagiramo, kot da nas je
          pičila osa, spet drugič, pa kot da ni bilo nič? Zaradi vzorcev in
          prepričanj, ki so v nas in ki smo jih pridobili skozi otroštvo in
          kasneje skozi dobo odraščanja.
          <br />
          Ampak tudi za to obstaja »zdravilo«. Pogledamo kako se lahko
          pogovorimo, da smo slišani in da slišimo. Stremimo k temu, da
          ustvarimo varno okolje za pogovor. Da si zaupamo.
        </div>
      </div>
      <div className="kom-img-desc">
        {/*  <img className="kom-item-img" src="../assets/kom-partner.png" alt="" /> */}
        <picture className="kom-pict-img">
          <source
            srcSet="../assets/webp/kom-partner.webp"
            alt="Logo"
            type="image/webp"
          />
          <img
            className="kom-item-img"
            src="../assets/kom-partner.png"
            alt="slika"
            type="image/png"
          />
        </picture>
        <div className="vil-description">Zaupanje</div>
      </div>
    </div>
  </Layout>
)

export default KomunikacijaPartner
