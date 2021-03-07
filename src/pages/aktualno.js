import React from "react"
import Layout from "../components/layout"

const Aktualno = () => (
  <Layout>
    <div className="predavanja-content">
      <h2>
        <u>Predavanje</u>
      </h2>
      <div className="predavanja-item">
        {/*   - Kaj je diamantni dotik oziroma kako povečati vrednost vaše dragocene lastnine – vaših odnosov!
         */}
        <div className="predavanja-item-title">Diamantni dotik</div>
        <br />
        <br />
        Mislim, da skoraj vsi poznamo <strong>Zlato pravilo</strong>, ki se
        glasi nekako takole :{" "}
        <i>
          »Ravnaj z ostalimi tako, kot bi si TI želel, da oni ravnajo s teboj.«
          Simple as that!
        </i>
        <br />
        <br />
        Res tako preprosto pravilo, a v kolikšni meri ga upoštevamo in
        uporabljamo v našem življenju? Na to, pa si mora odgovoriti vsak
        posameznik sam. S tem odnosom lahko zelo veliko dosežemo v življenju, na
        katerem koli področju. Samo postati mora naše notranje vodilo, naše
        načelo.
        <br />
        <br />A skozi leta sem spoznala še eno, veliko bolj dragoceno pravilo,
        ki se mu pravi <strong>Diamantno pravilo</strong>.
        <br />
        <br />
        Tu pa gre za bistveno bolj poglobljeno zadevo, a ob enem tako preprosto
        in iskreno. Tu ni fokus na tebi/meni, ampak na osebi naproti tebe.
        Tvojemu sogovorniku.
        <br />
        <br />
        Poznamo izraz <i>Diamantni dotik</i>.
        <br />
        <br />
        To je izraz za osebo, ki zna potegniti le najboljše iz nekoga ali
        nečesa.
        <br />
        <br />
        Na predavanju pogledamo, zakaj so odnosi <strong>
          dragocenejši
        </strong>{" "}
        od denarja, kaj inspirira Diamantno pravilo in katera so tista ključna
        vprašanja, da osvojiš <i>Diamantni dotik</i>.
        <br />
        <br />
        Ko ponotranjiš Diamantno pravilo in ko to postane del tvojega življenja,
        se spremeni komunikacija, poveča se tvoj uspeh, tako na osebni, kot na
        poslovni ravni. Postaneš boljši JAZ.{" "}
        <img
          className="emoji-img"
          src="../icons/smile.png"
          width="30px"
          alt=""
        />
      </div>
      <br />
      <br />
      {/* <div className="predavanja-item">
        <div className="predavanja-item-title">Nebesedna izražanja</div>
        <br />
        <br />
        Z govorico telesa, pravzaprav na nezavedni ravni, odražamo svoje
        čustveno stanje. Obstajajo tri pravila za pravilno branje znakov in pa
        metode za razlaganje pomena kretenj, "branja misli" in čustev.
        <br />
        <br />
        Tu po sklopih pogledamo, na kakšen način, z osnovnim razumevanje telesne
        govorice, dosežemo večji uspeh.
      </div> */}
    </div>
    <div className="predavanja-content">
      <div className="aktualno-title"> Novi zapisi na blogu </div>

      <div className="aktualno-text">
        <ul className="aktualno-ul">
          <li className="aktualno-li">
            Odločitve
            <div>27.2.2021</div>
          </li>
          <br />
          <li className="aktualno-li">
            Svobodna volja in izbira
            <div>30.1.2021</div>
          </li>
          <br />
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

    <div className="trak-div">
      <div
        className="trak"
        style={{
          backgroundImage: `url(../assets/pticek-trak2.png)`,
          backgroundSize: "88%",
          backgroundRepeat: "no-repeat",
          height: "300px",
          width: "100%",
          backgroundPositionX: "center",
          backgroundPositionY: "100%",
        }}
      ></div>
    </div>
    <div className="delavnice-content">
      <div className="delavnice-item"></div>
    </div>
  </Layout>
)

export default Aktualno
