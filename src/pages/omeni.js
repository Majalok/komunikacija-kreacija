import React from "react"

import Layout from "../components/layout"

const OMeni = () => (
  <Layout>
    <div className="o-meni">
      <div className="o-meni-section">
        <div className="o-meni-quote">
          <span className="quote-logo">
            <img src="../icons/quote-left.png" alt="Logo" />
          </span>
          <p className="quote-text">
            {" "}
            Odnosi so najdragocenejša lastnina v naših življenjih in si
            zaslužijo, da z njimi tako tudi ravnamo.{"    "}
            <span className="author">(dr.Nate Booth)</span>
            <span className="quote-logo">
              <img src="../icons/quote-right.png" alt="Logo" />
              <br />
            </span>
          </p>
        </div>
        {/* 
        <div className="box-container" style={{
          backgroundImage: `url(../assets/line-dot.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
          height: '70px'
        }} >
      </div> */}
        <div
          className="box-container" /* style={{
          backgroundImage: `url(../assets/wave2.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
          height: '70px'
        }} */
        >
          {/* <svg height="150" width="880">
            <path d="M0,19.99 C150.00,150.00 271.49,-40.99 880.00,15.99 L880.00,0.00 L0.00,0.00 Z" fill="#fffdc2"></path>
          </svg> */}
        </div>
        <div className="o-meni-content">
          <div className="o-meni-textdiv">
            <div className="o-meni-text">
              Naj se predstavim. Ime mi je Nataša in zelo rada čvekam. Pa ne kar
              tja v tri dni (no, občasno tudi) ampak obožujem poglobljene
              pogovore.{" "}
            </div>{" "}
            <div className="o-meni-text">
              Pogovarjanje oziroma komunikacija mi je blizu. Nikoli tudi nisem
              imela problema načeti pogovora s popolnim tujcem, če sem le
              »prebrala« skozi njegovo telesno govorico, da lahko pristopim.{" "}
            </div>{" "}
            <div className="o-meni-text">
              Prišla sem do spoznanja, da imam dobro izostren šesti čut ali
              intuicijo. <i>Jasnovednost in jasnočutnost</i> sta moja podporna
              stebra. Skozi daljše obdobje sem pridno pilila svojo komunikacijo,
              se poglabljala v razumevanje ljudi in okolice, ter mnogim tudi
              pomagala. Dogaja se mi, da se ljudje obračajo name, ko začutijo,
              oziroma si želijo nekaj spremeniti, pa ne vedo kaj in kako. V
              večini primerov se zgodi čisto spontano. Velikokrat sem jih
              začutila, da niti niso imeli namena spregovoriti o zadevi, ki jih
              teži, a nastal je trenutek, ko so se besede kar vsule. In sem se
              lotila dela{" "}
              <img
                className="emoji-img"
                src="../icons/wink.png"
                width="30px"
                alt=""
              />
              . Saj veste, pogled iz drugega zornega kota in pa moja dva
              »senzorja« pa smo zadevo premaknili iz mrtve točke. Znašla pa sem
              se tudi v vlogi mediatorja.
            </div>
            <div className="o-meni-text">
              Vedno bolj se odraža, da nam je komunikacija postala nekaj tujega
              in reševanje problemov je postal velik bavbav. Zato si želim
              pomagati ljudem. Naj komunikacija postane lahkotna, razumevajoča
              in ljubeča.
            </div>
          </div>
          <img
            src="../assets/natasa-01.png"
            className="profile-img"
            alt="Logo"
            style={{
              border: "7px solid transparent",
              borderImage: `url("../assets/paper2.jpg") 100%`,
              padding: "2px",
              borderImageSlice: "100 100 fill",
            }}
          />
        </div>
      </div>

      <div className="omeni-quote-1">
        <p className="">
          Soočanje s samim seboj je <i>zanimivo</i> in občudovanja vredno
          dejanje. Če pa imaš ob tem še podporo, ki ne obsoja, te usmerja,
          pokaže kje lahko nekaj spremeniš, je pa veliko lažje. Če si želite
          spremembe v življenju, ker niste več zadovoljni s tem kar ste imeli do
          sedaj, lahko pričnete s spremembo načina komunikacije.
        </p>
        <br />
      </div>

      <div className="zahvale-section">
        <div className="zahvala zahvala-3">
          Minilo je par let, kar si mi prvič pomagala. S partnerjem, s katerim
          sem bila v zvezi 2 leti, sva se razšla. Iz meni, ne čisto jasnih
          razlogov. Bila sem obupana in na tleh. Tvoja intuicija, ti je
          narekovala, da me pokličeš, kljub temu da je bil vikend. Roko na srce,
          nekih tesnih stikov takrat nisva imeli, sva se pa vedno imeli lepo, ko
          sva »treščili« skupaj. Brez oklevanja si prišla do mene. Poslušala si
          me, mi svetovala in na koncu pomirila. Z upoštevanjem tvojih nasvetov
          in kasneje tvoje občasne pomoči, sva kasneje postala par, ki se zna
          pogovarjati, podpirati, poslušati in sodelovati. Pika na i pa je bila
          poroka. Hvaležna ker si!
          <div className="zahvala-name">A.</div>
          <img
            className="header-image bottom-img partner"
            src="../assets/kom-partner55.png"
            height="10px"
            alt=""
          />
        </div>
        <div
          className="zahvala zahvala-10"
          /* style={{
            backgroundImage: `url(../assets/vil1.png)`,
          }} */
        >
          Natašo sem spoznala na mojem prejšnjem delovnem mestu in takoj sem
          začutila, da izžareva neko posebno energijo. Takoj sem jo začutila.
          Postali sva prijateljici in velikokrat sem se nanjo obrnila za
          nasvet,najprej pri reševanju konfliktov na delovnem mestu. Znala mi je
          pravilno svetovati, kako in na kakšen način komunicirati z
          konfliktnimi osebami. Sčasoma sva prišli na reševanje mojih osebnih
          problemov, kot je reševanje zapletenega razmerja in tudi tu me je
          usmerila na pravo pot, predvsem kako naj pri sebi ugotovim, kje so
          moje težave,ki izvirajo iz moje preteklosti. Nataša ti da veliko
          energije, pozitive in enostavno jo moraš "ubogati", ker spoznaš, da ti
          zelo pomagajo njeni nasveti.
          <div className="zahvala-name">Brigita</div>
          <img
            className="header-image bottom-img sluzba"
            src="../assets/kom-sluzba.png"
            height="10px"
            alt=""
          />
        </div>
        <div
          className="zahvala zahvala-2"
          /*  style={{
            backgroundImage: `url(../assets/kom-partner5.png)`,
          }} */
        >
          Hvala ti za vso pomoč in nasvete, ki si mi jih podala, ko sem bila v
          dvomih in ne sigurna glede svojih odločitev. Pomagala si mi, da sem na
          določene stvari pogledala iz drugega zornega kota. So osebe, ki jim je
          preprosto treba reči hvala in ena izmed takih oseb si ti!
          <div className="zahvala-name">Anja</div>
          <img
            className="header-image bottom-img"
            src="../assets/kom-poslusalka.png"
            height="10px"
            alt=""
          />
        </div>
        <div className="zahvala zahvala-1">
          Nataša, tvoji učni koraki komunikacije so res čudoviti. Dokler te
          človek ne spozna, niti ne ve kam ga je pahnil hitri tempo življenja in
          vsa ta tehnika ... Kdo si je mislil, da nas bojo leta 2020 učili
          umivati roke ...( večina smo bili prepričani da je umivanje rok
          splošno znano in enostavno) Tako kot pravim - dokler ne veš kako
          moraš, je enostavno dobro to kar delaš! Meni si ogromno pomagala pri
          osebnosti rasti in kljub svojim letom sem iz grdega malega račka
          postala ponosni labod. Iz srca ti hvala
          <div className="zahvala-name">Joži</div>
          <img
            className="header-image bottom-img"
            src="../assets/kom-osebna.png"
            height="10px"
            alt=""
          />
        </div>
        <div className="zahvala zahvala-8">
          Obvladaš!
          <div className="zahvala-name">Rok</div>
          <img
            className="header-image bottom-img sluzba"
            src="../assets/kom-sluzba.png"
            height="10px"
            alt=""
          />
        </div>
        <div className="zahvala zahvala-6">
          Vedno govorim, da vsaka oseba pride v naše življenje in gre iz njega z
          razlogom. Nataša, ko si se ti pojavila v mojem življenju je bilo čisto
          poslovno ampak sva hitro ugotovili, da to ni tako.V moje življenje si
          vnesla voljo, energijo, mi odprla oči in dala krila, da lahko poletim.
          Če me zanese, mi boš znala pokazati, katera pot je prava. Hvaležna,
          ker te je tvoja pot pripeljala k meni.
          <div className="zahvala-name">L.S.</div>
          <img
            className="header-image bottom-img"
            src="../assets/kom-poslusalka.png"
            height="10px"
            alt=""
          />
        </div>
        <div className="zahvala zahvala-7">
          Moški smo zelo enostavni in taka je tudi naša komunikacija. A včasih
          se je potrebno tudi poglobiti, če želiš napredovati v določenih
          stvareh. In zato je dobro, če poznaš koga, ki ti pri temu pomaga. In
          ti si mi. Hvala.
          <div className="zahvala-name">Blaž</div>
          <img
            className="header-image bottom-img"
            src="../assets/kom-poslusalka.png"
            height="10px"
            alt=""
          />
        </div>

        <div className="zahvala zahvala-9">
          Imaš veliko znanja.
          <div className="zahvala-name">Ana P.</div>
          <img
            className="header-image bottom-img splosna"
            src="../assets/kom-splosna.png"
            height="10px"
            alt=""
          />
        </div>

        <div className="zahvala zahvala-11">
          Hvala, ker si moja občasna poslušalka. Prav paše, da se lahko spiham
          in dam iz sebe ven, vse kar mi gre na živce, ali kot ti rada rečeš:
          "me vrže iz tira, ker se preveč ukvarjam z okolico." In vedno do
          sedaj, si mi dala koristen nasvet, na kaj naj bom pozorna.
          <div className="zahvala-name">Renata</div>
          <img
            className="header-image bottom-img"
            src="../assets/kom-poslusalka.png"
            height="10px"
            alt=""
          />
        </div>

        <div className="zahvala zahvala-10">
          Tvoj nasvet, na kakšen način naj se pogovarjam s » ta starimi« deluje.
          Manj se fajtamo, kljub temu, da mi še vedno »najedata«. Sorry, ampak
          tko je . We stay in touch.
          <div className="zahvala-name">Aleš</div>
          <img
            className="header-image bottom-img sluzba"
            src="../assets/kom-otrok.png"
            height="10px"
            alt=""
          />
        </div>
        <div className="zahvala zahvala-12">
          Srednja šola je obdobje v našem življenju, v katerem "splavaš" ali
          "potoneš". Jst sm eden od tistih, ki so se bolj utapljali kakor
          plavali. Nizka samopodoba in samozavest, sta mojim vrstnikom
          omogočala, da so se večino časa norčevali iz mene. Dokler nism spoznal
          gospe Nataše, ki mi je zelo pomagala pri tej težavi. Pokazala mi je
          kako pridobiti samozavest in popraviti svoj vtis o sebi, kar mi je
          pomagalo, da so tudi moji sovrstniki popravili vtis o meni in se
          nehali norčevati iz mene. Za to pozitivno izkušnjo, zaradi katere bom
          lažje zaključil srednjo šolo, sem lahko hvaležen gospe Nataši, zato še
          enkrat hvala.
          <div className="zahvala-name">Nik</div>
          <img
            className="header-image bottom-img splosna"
            src="../assets/kom-splosna.png"
            height="10px"
            alt=""
          />
        </div>
        <div className="zahvala zahvala-8">
          Draga Nataša.
          <br />
          S prihodom novega družinskega člana, sva čez čas ugotovila, da sva se
          ful oddaljila en od drugega.
          <br />
          Hvala, ker si nama pokazala način, kako kljub vsem obveznostim, najti
          čas za naju. Kako bistven je pogovor. Še bolj kot prej, ko sva bila
          sama. Je bilo potrebno vpeljati par sprememb, je bila potrebna
          vztrajnost. A se strinjava oba, da je vredno. Kot novopečena familja
          kar dobro furamo.
          <div className="zahvala-name">T&M</div>
          <img
            className="header-image bottom-img partner"
            src="../assets/kom-partner.png"
            height="10px"
            alt=""
          />
        </div>
      </div>
      {/*  <div className="motivation-quote-1"> */}
      {/* <div className="o-meni-quote">
        <p className="quote-text">
          Naj <strong>strah</strong> ne bo naša <strong>ovira</strong>. Vsi smo ljudje, krvavi pod kožo in prav vsi hodimo na <strong>wc</strong>. Od tod naprej naj se vklopi vaša domišljija <span className="emoji" role="img">😉</span>
        </p>
      </div> */}
    </div>
  </Layout>
)

export default OMeni
