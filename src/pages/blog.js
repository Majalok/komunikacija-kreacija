import React, { Component } from "react"
/* import { FaCalendarAlt } from "react-icons/fa" */
import Layout from "../components/layout"
import { Link } from "@reach/router"

//import ReactDOM from 'react-dom'
//import scrollTo from 'gatsby-plugin-smoothscroll';

class Blog extends Component {

  constructor() {
    super()

    this.state = {
      showBlog: false,
      selectedId: '',
      classDisplay: '',
    }
    this.displayBlog = this.displayBlog.bind(this);

    // console.log("window.location.hash: ", window.location.hash)
  }

  /*  componentDidMount() {
 
     if (window.location.hash) {
       let id = window.location.hash
       const blogElToScroll = document.querySelector(id)
       console.log("blogElToScroll: ", blogElToScroll)
       console.log("blogElToScroll.offsetTop: ", blogElToScroll.offsetTop)
 
       if (blogElToScroll) {
         this.displayBlog(null, window.location.hash)
         debugger
 
         //window.scrollTo(0, 1400);
 
       }
     }
   } */
  componentDidMount() {
    if (window.location.hash) {
      let id = window.location.hash
      const blogElToScroll = document.querySelector(id)
      console.log("blogElToScroll: ", blogElToScroll)
      console.log("blogElToScroll.offsetTop: ", blogElToScroll.offsetTop)

      if (blogElToScroll) {
        // 
        //debugger
        // document.getElementById(id.replace('#', '')).scrollTo(0, 3600)

        this.displayBlog(null, window.location.hash)
        let offset = blogElToScroll.offsetTop + 1400
        //debugger
        //blogElToScroll.scrollTo(0, 1000);
        window.scrollTo(0, offset);
        console.log("offset:: ", offset)
        // window.scrollTo(0, blogElToScroll.offsetTop);



      }
    }
  }


  displayBlog = (e, location) => {
    let currentId
    let showBlog = false
    if (e) {
      currentId = e.currentTarget.id
      showBlog = !this.state.showBlog
    }
    else {
      currentId = location.replace('#', '')
      showBlog = true
    }
    console.log("currentId: ", currentId)
    console.log("this.state.selectedId: (previous)", this.state.selectedId)
    console.log("this.state.showBlog: ", this.state.showBlog)

    this.setState({
      ...this.state,
      showBlog: showBlog,
      selectedId: currentId,
    })
  }


  setBlogShow = (val) => {
    this.setState({
      ...this.state,
      showBlog: !this.state.showBlog,
      idBlog: val,
    })
  }

  render() {
    // console.log("render this.state.selectedId: ", this.state.selectedId, this.state.selectedId == "zenska")
    // console.log("blog-item " + this.state.selectedId == 1 ? 'blogShow' : '')
    return (
      <Layout>
        <div className="blog">
          <div className="blog-content">
            <br />
            <br />
            <br />
            <br />
            <div className={`blog-item ${this.state.selectedId == 'zenska' && this.state.showBlog ? 'blogShow' : ''}`}>

              <Link to={"/blog#zenska"} className="blog-title pisava-special brown #zenska" id="zenska" name="1" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'zenska' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>Ženska</li>
              </Link>


              <div className={this.state.selectedId == "zenska" && this.state.showBlog ? "displayBlog" : "hideBlog"}>
                <div className="blog-text pisava-special brown">

                  Marec, »ženski mesec«. V tem mesecu nam namenijo veliko lepih besed in želja. A kaj vse ti to pomeni, če ne vidiš lastne vrednosti? Besede pohvale, zahvale, so kot balzam za dušo, a jih moraš znati iskreno sprejeti.
                <br />
                  <br />
                Vem, skrbiš za svoje drage, za starše, sestro, brata, moža, otroke, mogoče celo za tasta in taščo, teto, strica…, seznam je lahko neskončen. A zakaj nositi breme celega sveta na svojih ramenih? Zakaj imaš potrebo reševati svet, če moraš rešiti prvo sebe?
                <br />
                  <br />
                Sedaj izberi sebe - imej se rada. Vsak dan si nameni nekaj časa zase. Začni graditi ljubeč odnos sama s seboj. To je temelj za naprej, za vse tvoje odnose. Dovoli si biti ženska. Dovoli si prositi za pomoč in jo tudi sprejeti.
                <br />
                  <br />
                Ne zapletaj se po nepotrebnem v dokazovanja, kdo ima prav in kdo ne. Ne popravljaj ljudi, tudi če veš, da nimajo prav. Ni to tvoja naloga - to je njihova izkušnja.
                <br />
                  <br />
                Dovoli ljudem, da pripovedujejo svoje zgodbe, čeprav si ji že neštetokrat slišala. Pripovedovanje jih ponese v preteklost in jim pomaga, da jo počasi spustijo.
                <br />
                  <br />
                Ne barantaj. Ti zaradi tistih par centov ne boš obubožala, boš pa privabila nasmeh na obraz človeka, ki ti je storitev prodal. In verjemi, ni lepšega kot to, ko človek vidi, da se ceni njihovo delo, oziroma izdelek.
                <br />
                  <br />
                Postani dobrosrčna in radodarna s komplimenti. Kompliment osreči tako tistega, ki ga prejme, kot tebe, ki ga podeliš. Če ga prejmeš, se ga nikoli ne brani ali zavrni - preprosto se zahvali. Tako ti ljudje pokažejo, da te cenijo, da poznajo tvojo vrednost. Zapusti pa tiste, ki povzročajo toksičnost v tebi.
                <br />
                  <br />
                Nauči se  pokazati svoja čustva. Spregovori o svojih občutkih in čustvih. To te dela človeka, umirja tvoj ego, kar ohranja tvoje odnose. Prevzemi odgovornost za svoje počutje. Tvoja miselna naravnanost, fizična pripravljenost, tisto, kar daš vase in na kon'c konca tudi nase, je tvoja odločitev, kot je tudi sreča odločitev. Saj veš, sreča se skriva v majhnih stvareh, samo prepoznati jih je potrebno.
                <br />
                  <br />
                Vsak dan živi, kot da je zadnji. Ker, morda je res.
                <br />
                  <br />
                Ne rabiš biti »super woman« - bodi samo ženska, v ženski energiji in ženskem delovanju. Nauči se biti srečna. Vse je v ravnovesju, v razporeditvi časa. 33,3% za družino, 33,3% za službo/svoj posel in 33,3% zase. Sprejmi to in imej se rada  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />.
                <br />
                  <br />
                In čisto na koncu, ženske stopimo skupaj! Podpirajmo ena drugo pri osebnih dosežkih, bodrimo in pomagajmo, kadar lahko in smo naprošene. Ne bodimo ena drugi konkurenca. Ne mečimo si »polena pod noge«. Kajti, ko ženske stopimo skupaj, se ustvari krog, kjer se zgodijo čudovite »kreacije«.

              </div>
                {/*   <img className="blogImg" src="../assets/blog-zenska-resiz.png" alt="" /> */}
                <picture className="blog-pict">
                  <source
                    srcSet="../assets/webp/blog-zenska-resiz.webp"
                    alt="Logo"
                    type="image/webp"
                  />
                  <img
                    className="blog-image"
                    src="../assets/blog-zenska-resiz.png"
                    alt="slika"
                    type="image/png"
                  />
                </picture>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'odlocitve' && this.state.showBlog ? 'blogShow' : ''}`}>
              {/* <div className="blog-title pisava-special brown" id="2" onClick={(e) => this.displayBlog(e)}>Odločitve</div>
 */}          <Link to={"/blog#odlocitve"} ref="2" className="blog-title pisava-special brown #odlocitve" id="odlocitve" name="2" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'odlocitve' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>Odločitve</li>
              </Link>
              <div className={this.state.selectedId == "odlocitve" && this.state.showBlog ? "displayBlog" : "hideBlog"}>

                {/* <div className="displayBlog"> */}
                <div className="blog-text pisava-special brown">
                  Vsak v življenju pride do točke, ko rabi pomoč. Ni pomembno za
                kaj gre. Služba, šola, odnosi, delo na sebi... <br />
                Skozi raziskovanja in dela na sebi sem ugotovila, da že ko
                spregovoriš o zadevi, ki te "matra", veliko lažje zadihaš. Kot,
                da bi padel "tonski kamen" z ramen. Olajšaš si dušo.
                <br /> Vsak, ki dela, raziskuje, gradi, se uči, takrat, ko
                naleti na problem, poišče rešitev in ne reče: " To se ne da, ni
                izvedljivo, ne gre...", nosi v sebi veličino.
                <img
                    className="emoji-img"
                    src="../icons/heart.png"
                    width="30px"
                    alt=""
                  />
                  <br /> In, ko se nam zatakne, se zavestno odločamo, ali bomo
                poiskali pomoč ali ne. <br />
                Ko greš po pomoč (kakršno koli že, ali kakršne koli oblike),
                greš pravzaprav po novo MOČ.
                <br /> Po nov zalet.
                <br /> Če dobro pogledaš besedo, je to PO_MOČ. Lahko je to
                pogovor, poslušanje, nasvet, usmeritev, rama na katero se
                nasloniš ali zjokaš, objem, bližina nekoga zraven tebe ...
                <br />
                Karkoli, kar ti bo dalo zalet in moč za naprej. <br /> Zato,
                upaj si spregovoriti, poiskati po_moč.
                <br /> En drugemu pomagamo na takšen ali drugačen način. Smo
                povezani, pa čeprav to velikokrat ni opaziti. <br />
                Vendar ne smemo pozabiti na nekaj zelo pomembnega, da na svet
                »privekaš« sam in odšel boš sam. Vmes pa se zgodi Življenje. In
                če ga daš pod drobnogled ugotoviš, da si tudi v tem obdobju
                "sam".
                <br /> Seveda imaš okoli sebe ljudi, ki so tvoja družina,
                sorodniki, prijatelji, sodelavci in tudi življenje teče po nekih
                ustaljenih tirih...ampak pomisli. <br />
                Ko gre za življenjske odločitve, zdravje ali vsakodnevne poteze,
                ki so v povezavi s teboj, se Ti odločiš, ali boš zadevo izpeljal
                in kako. Ti se odločaš, če boš prižgal prvo cigareto, popil
                pivo, zbral pogum in povabil simpatijo na kofe…Ti se boš odločil
                ali boš šel delati izpit za avto in če ja, poiskal rešitve kako
                to izpeljati. Mogoče boš še naprej dovoljeval nespoštljiv odnos
                do sebe ali pa boš začel postavljati meje. Ti se boš boril za
                svojo povišico pri šefu. Ti s svojimi odločitvami tudi
                definiraš, kakšne ljudi imaš okoli sebe. Ti se spopadaš s
                svojimi demoni in se boriš za boljši jutri...Ti, ti, ti… <br />
                In za koga drugega to počneš in se odločaš, če ne Zase?{" "}
                  <img
                    className="emoji-img"
                    src="../icons/heart.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                Ja, lahko si deležen podpore, nasvetov, pomoči (če prosiš zanjo)
                in še kaj, ampak veš kaj? To so samo predlogi. Spoznanja in
                ideje nekoga drugega. Samo Ti, pa veš kaj je dobro zate in kaj
                je vredno preizkusiti. To so tvoje odločitve.
                <br /> Pomoč nekoga drugega, Ti lahko odgrne tančico skozi
                katero nisi videl, kako naj se zadeve lotiš, oziroma kaj naj bo
                tvoj naslednji korak. Te spomni kdo si in da si vreden. Ti
                ponudi roko... <br />
                Od Tebe, pa je odvisno, kaj boš s tem naredil. Ti veš, pri
                kateri informaciji Ti je zaigralo srce in se je prižgala iskra.
                Ti veš, kaj ti daje novo moč in zalet. Samo Ti veš zakaj je temu
                tako in samo Ti veš, kaj je najbolje zate.
                <br /> Kajti vsak išče svojo resnico. In vsak se odloča po svoji
                vesti.
                </div>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'svobodnaVolja' && this.state.showBlog ? 'blogShow' : ''}`}>
              <Link to={"/blog#svobodnaVolja"} className="blog-title pisava-special brown #svobodnaVolja" id="svobodnaVolja" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'svobodnaVolja' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>
                  Svobodna volja in izbira</li>
              </Link>
              <div className={this.state.selectedId == "svobodnaVolja" && this.state.showBlog ? "displayBlog" : "hideBlog"}>

                <div className="blog-text pisava-special brown">
                  Zanimiva besedna zveza. Zanima me, koliko krat, ste se dejansko
                  zavedali pomena: »Imaš svobodno voljo in izbiro.«? Jaz, dokler
                  nisem začela delati na sebi in se poglabljati v določene stvari,
                  bolj malo. Pravzaprav, sploh ne vem, če sem jo »zaznala«.
                  Absolutno, sem se že srečala s tem, da imamo v življenju
                  svobodno voljo in izbiro (pa tukaj se ne spuščam v izredne
                  razmere) ampak, ker mi je bilo bolj »priročno«, sem to enostavno
                ignorirala.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Ko pa se odločiš v življenju nekaj spremenit, moraš začeti
                delovati zunaj svoje »cone udobja«, če želiš, da bo viden kakšen
                rezultat. Pa ne v smislu, da bo okolica videla, kaj vse si
                dosegel, ampak zato da osrečiš sebe s spremembo. <br />
                  <br />
                Na primer, ko smo prišli v obdobje samostojnosti (pri enih je to
                bilo prej, pri drugih kasneje), smo se sami začeli odločati, kaj
                bomo oblekli. Običajno se to začne nakazovati že v vrtcu. Če smo
                imeli ob sebi starša, ki je spodbujal naš razvoj in je temu
                primerno tudi potrpel, ko smo zjutraj »filozofirali« kaj obleči
                (običajno je bilo celo tako, da je bil zunaj mraz in - jaz/ti pa
                sva hotela »navleči« nase nekaj poletnega{" "}
                  <img
                    className="emoji-img"
                    src="../icons/blushed.png"
                    width="30px"
                    alt=""
                  />
                ) smo imeli srečo. Kajti potrebna je bila iznajdljivost in
                potrpežljivost starša, da nas je prepričal, da smo se oblekli
                letnemu času primerno in spodobno. Jaz se spomin, da sem včasih
                hotela »navleči« nase take kose oblačil, da mi je mami komaj
                dopovedala, da je pust že mimo.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/laugh.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Na drugi strani, pa imaš starša, ki želi to svobodno voljo in
                izbiro en »malce preskočiti«. Nekaterim celo uspe. A tukaj zadaj
                se velikokrat skriva še vzporedna zgodba starševskega odnosa.
                Tako imamo v življenju primer »maminega sinka« ali »očkove
                punčke«, ki so pravzaprav žrtve odkritega ali prikritega
                incesta. To je globina problema, ki se ga je potrebno lotiti
                postopoma.
                <br />
                  <br />
                Včasih pa nekdo dobi to oznako zato, ker po mnenju partnerja,
                daje preveliko veljavo staršu. Ta se posledično preveč vmešava v
                življenje svojega otroka. Nastanejo problemi, katerim bi se
                lahko izognili, če bi »prerezali popkovino«. To je lahko zelo
                boleč korak. Ker vedno sledijo posledice. Običajno takrat starš
                (iz obupa, ker mu je bilo nekaj odvzeto) pokaže svoj »drugi
                obraz« in poskuša kaznovati. Na nas pa je, kako se bomo odločili
                in ali bomo pri odločitvi tudi vztrajali.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Svobodno voljo in izbiro imamo tako pri vsakodnevnih stvareh,
                kot pri velikih odločitvah. Samo poteze, ki jih »povlečemo« na
                dnevni bazi, kot so: kaj bomo oblekli, katero hrano bomo vzeli
                iz hladilnika, ali se boš/bom naučil za izpit, ali bomo vsak dan
                naredili nekaj zase, kako razmišljamo in govorimo o sebi in
                drugih, bomo slepo sledili »vodji« (bili del »tropa«) ali bomo
                uporabljali svojo pamet oziroma »zdravo kmečko pamet«, kaj
                spremljamo in poslušamo ipd., delamo podzavestno in ne
                razmišljamo o temu, da delujemo na podlagi svobodne volje in
                izbire.
                <br />
                  <br />
                Kaj pa pri večjih stvareh? Velja isto, vendar v povezavi z
                univerzalnim zakonom vesolja: Zakon prepričanja in izbire.
                <br />
                  <br />
                Pa da nam bo bližje za razumevanje, vzemimo primer nakupa novega
                avtomobila in ne sanjske hiše. Ker tu vas že kar slišim, kako
                vam začnejo švigati po glavi vsi »argumenti«, kako je to
                neizvedljivo, da se to ne da, ni možno, ipd. (zakon prepričanja
                in izbire).{" "}
                  <img
                    className="emoji-img"
                    src="../icons/sunglasses.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Pa se vrnimo k nakupu avtomobila. Na podlagi svobodne volje in
                izbire se odločimo, koliko smo zanj pripravljeni plačati in
                gremo v »iskalno akcijo«. Začnemo iskati rešitve, kako priti do
                željenega. Preprosto. Nisem napisala, da je lahko, ampak da je
                preprosto. Kajti:
                <br />
                  <br />
                  <strong>
                    Svobodna volja in izbira je v tesni povezavi z motivom in
                    posledično iščemo rešitev in ne potenciramo problemov.
                </strong>
                  <br />
                  <br />
                In skupek drobnih odločitev, malih korakov v smeri naših želja,
                prinese na koncu velik rezultat in spremembo. Potrebna je
                vztrajnost, potrpežljivost, fokus oziroma motiv. Najboljši
                motivi so tisti, ki delujejo znotraj nas in ne iz okolice. Ker
                pravo »gorivo« za premike naprej je <strong>MOTIV.</strong>
                  <br />
                  <br />
                Pa še nekaj. Svobodno voljo in izbiro se jemlje za samoumevno.
                Pazimo, da nam tega ne vzamejo. Smo v zanimivem obdobju
                (2020/2021…).
              </div>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'trenutekZdaj' && this.state.showBlog ? 'blogShow' : ''}`}>
              <Link to={"/blog#trenutekZdaj"} className="blog-title pisava-special brown #trenutekZdaj" id="trenutekZdaj" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'trenutekZdaj' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>Trenutek zdaj</li>
              </Link>
              <div className={this.state.selectedId == "trenutekZdaj" && this.state.showBlog ? "displayBlog" : "hideBlog"}>
                <div className="blog-text pisava-special brown">
                  Že kar nekaj časa nazaj sem spoznala, da sem v preteklosti,
                  večino dneva "preživela v prihodnosti, ali v preteklosti". Kaj s
                  tem mislim?
                <br />
                  <br />
                Običajno že zjutraj, ko sem se zbudila in sem še ležala v
                postelji, se mi je že »vrtelo po glavi«, kaj bom oblekla, kakšno
                vreme bo tisti dan, kaj me danes čaka v službi, koliko dela, kaj
                moram čez dan postoriti, ali sem včeraj kaj pozabila narediti,
                ipd. Misli so švigale naprej in nazaj, samo v trenutku »zdaj«
                jih ni bilo.
                <br />
                  <br />
                Potem sem se za trenutek vrnila v sedanjost, ko sem se zagledala
                v ogledalo, kako »pomečkano« izgledam{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smirk.png"
                    width="30px"
                    alt=""
                  />
                . Na hitro sem se pokritizirala in že letela v kuhinjo
                pristavljat vodo za kavo. Ob pitju tega, zame čudežnega napitka
                ( ker me dodobra prebudi in postavi na noge, da nisem več kot
                kura, ki leta brez glave in ne ve sama zase ), sem običajno
                premišljevala, kako bi bilo fino če….prihodnost.
                <br />
                  <br />
                Ker sem takole odtavala v prihodnost sem običajno izgubila en
                malce občutek za čas. Šele prazna skodelica kave, pa moja je
                tista, »ta vlka« za čaj, me je povrnila v sedanjost in : »O
                groza! Koliko je že ura!« Lahko si mislite, da sem postala kot
                tisti iz risanke, modri dirkač{" "}
                  <img
                    className="emoji-img"
                    src="../icons/laugh.png"
                    width="30px"
                    alt=""
                  />
                . Samo sebe sem presenetila s hitrostjo in gibčnostjo, ki jo
                premorem že "navsezgodaj zjutraj" ( zame je to med 6 in 7 uro,
                za nekoga drugega pa je to že sredi dela{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />{" "}
                ).
                <br />
                  <br />
                Ko sem se končno peljala proti službi, sem se "en malce"
                posvečala prometu, ker varnost je pa "ipak" na prvem mestu, "en
                mal" pa preigravala misli po glavi{" "}
                  <strong>"kaj bo če bo, kaj je bilo…"</strong>. Mimogrede mi je
                še švignila misel, kaj moram kupiti, kaj bi bilo fino popoldan
                še postoriti in tako naprej in tako nazaj.
                <br />
                  <br />
                Na delovnem mestu, če sem le imela trenutek, ki ni zahtevalo
                100% skoncentriranosti, ampak sem lahko malce z mislimi
                odplavala, sem že razmišljala:« Kaj hudimana, je bilo pa tisto
                zjutraj pri kavi? Kje že je rekla, da je to prebrala? Hm, kaj
                sem že rekla, da moram kupiti? Ob kateri uri je danes…? Kaj bomo
                počeli ta vikend? Kako bi bilo fajn...«, ipd., ipd.
                <br />
                  <br />
                Zopet sem bila z glavo nekje v preteklosti, ali pa razmišljala o
                prihajajočih dneh. Samo v trenutku ZDAJ, sem bila bore malo.
                <br />
                  <br />
                In zmeraj večkrat se mi je dogajalo, da me je spreletel občutek,
                da je dan kar izpuhtel. Začela sem se spraševati, kako hudimana
                je zdaj to, da se 2x obrnem in je že večer.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />
                Občutek, da mi je dan spolzel skozi prste mi ni bil prijeten.
                Neka praznina se je naselila v meni, kot da ga nisem
                izkoristila.
                <br />
                  <br />
                No, in če pogledamo malo bolj podrobno, ga res nisem. Če sem
                bila z mislimi konstantno v preteklosti ali prihodnosti nisem
                mogla biti v sedanjosti. In ko sem začela analizirati, kako
                »upočasnit« čas, sem prišla do spoznanja, da je ključno, da sem
                čim več z glavo/mislimi v sedanjem trenutku.
                <br />
                  <br />
                Da zjutraj, ko se prebudim, misli namenim sebi in se pozitivno
                naravnam, da si pomižiknem ko se zagledam v ogledalu, uživam v
                opojnem okusu kave in absolutno tudi "en malce" odtavam z
                mislimi, "kako bi bilo fajn, če bi…", samo tokrat kontrolirano{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Ko se peljem v službo sem skoncentrirana na promet in še en
                malce na okolico na prečudovito naravo, nebo.
                <br />
                  <br />
                  <strong>
                    {" "}
                  Poskušam zaznati vse odtenke dneva, da sem kar se da prisotna
                  z mislimi in občutki v trenutku.{" "}
                    <img
                      className="emoji-img"
                      src="../icons/wink.png"
                      width="30px"
                      alt=""
                    />
                  </strong>
                  <br />
                  <br />
                  <i>
                    Je pa potrebna vaja in vztrajnost, ker misli tako rade uidejo
                    izpod nadzora.
                </i>
                  <br />
                  <br />
                Ugotovila sem, da se mi je dan čudežno začel podaljševati. No,
                sej vemo, da je to samo "feeling", ampak občutek je pa dober{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                . Dan poteka bolj »oprijemljivo«, doživeto. Tudi počutje je
                postalo drugačno, boljše. Dobila sem tisti občutek
                »prisotnosti«. S fokusiranjem nase, na svoje misli, občutke,
                dejanja me je pripeljalo do tega , da sem marsikaj ozavestila o
                sebi. Spoznavam sebe, svoje dobre, pa tudi malo manj dobre
                stvari.
                <img
                    className="emoji-img"
                    src="../icons/smirk.png"
                    width="30px"
                    alt=""
                  />{" "}
                In na teh delam, da jih počasi popravim. Ker nekaj, kar se je
                desetletja »nalagalo«, ne moreš spremeniti čez noč. To je
                dejstvo! Delam stvari, ki me veselijo. Berem knjige, se
                izobražujem, se pogovarjamo, hodimo na sprehode po Barju, ali pa
                preprosto čepimo skupaj na kavču in uživamo v gledanju TV-ja{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                . Kajti v trenutku, ko zapisujem te moje misli, se piše
                »zanimivo« l.2020. Iz tega sledi, da »letanje« naokoli , razni
                izleti in obiski različnih prireditev trenutno odpade.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/neutral.png"
                    width="30px"
                    alt=""
                  />{" "}
                Sploh pri teh stvareh je res super, če si 100% prisoten, da si v
                "trenutku zdaj". Ker doživiš dan v vsej njegovi lepoti. Zato iz
                tega, kar nam pa je trenutno omogočeno, vlečem najboljše zase.
                <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />{" "}
                In še nekaj sem ugotovila. Če imaš doma kosmatega hišnega
                ljubljenčka, je greh, da si, ko se pride stisniti k tebi in se
                želi »cortati«, z mislimi nekje drugje. Ker to je pa tako fajn
                "antistresna terapija", da ni za povedati.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/laugh.png"
                    width="30px"
                    alt=""
                  />{" "}
                Samo prisoten moraš biti. Z mislimi in občutki.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Jah, okolici, dogodkom in osebam ne posvečam več toliko
                pozornosti. Poskušam tudi čim manj vse skupaj opredeljevati s
                predznakom + ali – . Učim se, da dogodki in ljudje samo so/smo.
                Mi pa jih z našo reakcijo opredelimo kot pozitivne, ali
                negativne.
                <br />
                  <br />
                To pa je že druga tema{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                In ti?
                <br />
                  <br />
                Kolikokrat na dan si sam s seboj, v trenutku ZDAJ? Opazuješ
                svoje misli in jih imaš pod kontrolo? Kaj se ti plete po glavi?
                Si v pozitivnem »mood-u«, ali »samozaloten« med nerganjem in
                pritoževanjem?{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />{" "}
                Opazuj, kako ti teče tok misli tekom dneva in poglej kakšno je
                tvoje življenje. Je odsev?
                <br />
                  <br />
                  <strong>
                    S komunikacijo kreiramo, ta pa se navezuje na naše misli in
                    občutke.
                </strong>
                  <strong>
                    {" "}
                  A vse se da obrniti, spremeniti, ker kjer je želja, tam je
                  pot.{" "}
                  </strong>
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'prepricanjeVzrok' && this.state.showBlog ? 'blogShow' : ''}`}>
              <Link to={"/blog#prepricanjeVzrok"} className="blog-title pisava-special brown #prepricanjeVzrok" id="prepricanjeVzrok" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'prepricanjeVzrok' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>
                  Prepričanje, vzrok in posledica</li>
              </Link>
              <div className={this.state.selectedId == "prepricanjeVzrok" && this.state.showBlog ? "displayBlog" : "hideBlog"}>

                <div className="blog-text pisava-special brown">
                  Vsi ste že slišali za vzrok in posledico, ampak ali ste se kdaj
                  tudi dejansko poglobili v pomen tega?
                <br />
                  <br />
                Jaz se vrsto let nisem, priznam. Itak mi je bilo »kristalno
                jasno« kaj to pomeni, še celo domišljala sem si, da zaznam to
                sosledje, ko se mi pripeti v življenju. Pa kako sem se motila.
                Sem morala nekaj krat "pristati na riti", da sem se začela
                poglabljati v svoje življenje in ga analizirati. Kmalu sem
                ugotovila, da ima ključno vlogo naše prepričanje. Zaradi njega,
                delujemo po določenem konceptu, ki pripelje do vzroka in
                posledice. Potem pa imamo tukaj prisoten še popolnoma drugačen
                način podajanja informacij pri moških, kot pri ženskah. Mislim,
                res drži, da znamo me eno dokaj preprosto zadevo povedati tako
                slikovito, malce bolj na dolgo in široko (ker pač rade
                uporabljamo pridevnike, prislove ipd{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smirk.png"
                    width="30px"
                    alt=""
                  />
                ), da se lahko nekdo, ki ti dobro »ne sledi«, vmes »izgubi«.
                Dočim`r moški, to je pa čisto druga plat. Kratko in jedrnato,
                včasih celo pomanjkljivo{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                . No, potem pa se dajmo zastopit . Ni zastonj pregovor "Moški so
                iz Marsa, ženske pa z Venere".
                <br />
                  <br />
                Pa da razložim malo bolj podrobno.
                <br />
                  <br />
                Kot otroka so me vzgojili v duhu delavnosti. Od jutra do večera
                je "treba skoz neki delat". V službi, pa potem doma, pa še malo
                pri sosedih ( če slučajno zmanjka dela doma, kar se pa običajno
                ne zgodi - to vemo, a ne{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />
                ) - vzorec{" "}
                  <strong>
                    <i>prepričanja</i>
                  </strong>
                . In posledično skozi to, sem potihoma to delavnost vpeljala v
                svoje življenje. Službeno in zasebno. Moj takratni partner (mož
                in kasneje bivši mož - zato sem, napisala takratni{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smirk.png"
                    width="30px"
                    alt=""
                  />
                ) pa je v najin zakon »prinesel« svoja prepričanja, ki so seveda
                en malce odstopala od mojih. To je seveda popolnoma razumljivo,
                ker izhajava iz različnih celic (primarne družine) in vsak od
                naju je s seboj prinesel svoja prepričanja in vzorce.
                <br />
                  <br />
                Vam je že jasno, kam pes taco moli??{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />{" "}
                  <img
                    className="emoji-img"
                    src="../icons/sunglasses.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Ker sva imela različne poglede na določene situacije in ker se
                nisva znala pogovarjati, izraziti, kaj šele poslušati, je
                velikokrat prišlo do tega, da je bila najina komunikacija,
                »slika brez tona«{" "}
                  <img
                    className="emoji-img"
                    src="../icons/confused.png"
                    width="30px"
                    alt=""
                  />{" "}
                (pa smo pri{" "}
                  <strong>
                    <i>vzrok-u</i>
                  </strong>
                ). Zdaj ko gledam nazaj, je prav hecno, kako sva v marsikateri
                situaciji »merila moči"{" "}
                  <img
                    className="emoji-img"
                    src="../icons/blushed.png"
                    width="30px"
                    alt=""
                  />
                . Jaz z besedam, ker sem že od nekdaj bila vešča v komunikaciji
                (pa pustimo »malenkost«, da imamo pravo in nepravo komunikacijo{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />{" "}
                ), on z neodzivnostjo ali molkom. Včasih sva trmarila in vlekla
                vsak v svojo stran, kot da vlečeva vrv, ipd. Vmes, pa sva še
                dovoljevala vmešavanje (direktno in indirektno) okolice. In ker
                se take situacije nikoli ne vlečejo v nedogled, je sledila{" "}
                  <i>
                    <strong>posledica</strong>
                  </i>{" "}
                - ločitev. In vsak od naju, je k situaciji doprinesel svojih
                50%.
                <br />
                  <br />
                In šele sedaj, po parih letih dela na sebi, sem dojela koncept{" "}
                  <strong>prepričanje/vzrok/posledica</strong>.
                <br />
                  <br />
                Zato dobro poglejte, dajte pod drobnogled področja svojega
                življenja, kjer se vam zatika. Preverite kakšna so vaša
                prepričanja. Prisluhnite razlagi vzroka (zakaj je ali ni do
                nečesa prišlo, se naredilo, se izgovorilo), da preprečite
                posledico. Ali pa jo izpeljite (posledico namreč) in dano
                situacijo izkoristite za osebno rast.
                <br />
                  <br />
                It´s up to you{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'belList' && this.state.showBlog ? 'blogShow' : ''}`}>
              <Link to={"/blog#belList"} className="blog-title pisava-special brown #belList" id="belList" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'belList' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>
                  Bel list</li>
              </Link>
              <div className={this.state.selectedId == "belList" && this.state.showBlog ? "displayBlog" : "hideBlog"}>
                <div className="blog-text pisava-special brown">
                  Si kdaj pomislil, da ko se rodiš, si kot bel, nepopisan list.
                  Nato prve zapise, na ta tvoj lep, beli list, naredijo tvoji
                  starši, kasneje jim seveda pomagajo tudi stari starši (ker bog
                ne daj, brez njih res ne gre{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />
                ). Nekaj časa so oni tvoji učitelji, vodiči, »vsevedi« in mogoče
                sta tu še kakšna starejša sestra ali brat, za povrh, da je mera
                polna{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                . Ja, prav vsi te učijo, usmerjajo in "itak" vedo kaj je
                najbolje zate. Kasneje se temu »klanu« pridruži vrtec, z vsemi
                pripadajočimi akterji (vrstniki in vzgojitelji), nato šola -
                isti koncept zasedbe, samo v širšem krogu. To se nadaljuje skozi
                cel tvoj proces šolanja. Zraven pa puščajo svojo sled, na tem
                čudovitem listu, seveda tudi prijatelji…tisti »ta najboljši« in
                tisti malo manj dobri.
                <br />
                Potem nastopi »ta resen« del… služba. Okolica in sodelavci,
                pridno igrajo svojo vlogo pri pisanju na tvoj list.
                <br />
                Nato spoznaš "Ljubezen svojega življenja" (če ne gre v prvo, pa
                mogoče v drugo, tretje….no, kakorkoli že{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                ).
                <br />
                  <br />
                Takrat nastopiš v svoji najboljši verziji, ki jo potegneš na
                plano, čez vest ta »balast«.  Na začetku se ti razprejo krila,
                zadihaš s polnimi pljuči, imaš zalet. In ko imaš občutek, da boš
                poletel v tej svoji "najboljši verziji"… <strong>
                    bam
                </strong>{" "}
                …pristanek na zadnjico in dobrodošel v »realnosti«. Goriva je
                zmanjkalo ali smetana se je polizala.
                <br />
                Na plano pridejo vsi ti »tvoji« zapisi. In velikokrat niti ne
                »porajtaš«, da pravzaprav razmišljaš, občutiš, razumeš, kot si
                bil naučen. Nekje globoko v sebi, pa ti tihi glasek govori, da
                mogoče pa le ni čisto vse tako ali »prav«, kot si vedel in znal
                da sedaj. Da mogoče obstaja kakšna drugačna realnost, tvoja
                realnost. Mogoče pa ti to, karkoli že, lahko izpelješ, se lahko
                naučiš, priučiš, si dovoliš povedati na glas kaj si misliš in
                kako razmišljaš, si dovoliš drugače občutiti, si SPLOH dovoliš
                občutiti in si določene stvari tudi priznati.
                <br />
                  <br />
                Mogoče, pa ti stvari <strong>lahko</strong> pelješ skozi
                življenje drugače kot tvoji starši, prijatelji in sodelavci...
                <br />
                  <br />
                  <strong>
                    Vse je mogoče! Kar je v naši domišljiji, je mogoče tudi v naši
                    realnosti. Ampak pozor
                </strong>
                !
                <br />
                  <br />
                Nič se ne spremeni čez noč in nič se ne bo zgodilo samo od sebe.
                Vsaka sprememba zahteva svoj čas. Se zavedaš, koliko radirke
                potrebuješ in koliko časa, da »zradiraš«, kar ti ne služi?
                <br />
                  <br />
                Potrebno si je <strong>resnično</strong> želeti boljši, bolj po
                tvojih željah naravnan dan in življenje.
                <br />
                  <br />
                Ker na tem tvojem "čudovitem listu" je tudi veliko{" "}
                  <strong>dobronamernih</strong> zapisov (prepričanj in vzorcev).
                <br />
                  <br />
                In da prideš do tega, kdo pravzaprav si <strong>
                    ti, ti
                </strong>{" "}
                in ne nekdo, kot ga je in ki ga je »popredalčkala« okolica in
                vsi njeni akterji, prisotni v tvojem življenju - zato je
                potrebno delo na sebi. In za preseči vse to, kar te zadržuje, je
                potrebno zopet delati na sebi.
                <br />
                  <br />
                Ja, če se odločiš za delo na sebi, ti garantiram, ne bo ti
                dolgčas in ne bo ti zmanjkalo dela.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/laugh.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Je pa noro dober <strong>občutek</strong>, ko se osvobodiš
                določenih spon, prepričanj, vzorcev... <strong>Poletiš.</strong>{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout >
    )
  }
}

export default Blog
