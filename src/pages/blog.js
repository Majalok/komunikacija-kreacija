import React, { Component } from "react"
import { Link } from "gatsby"
import { FaCalendarAlt } from "react-icons/fa"
import DropdownMenu from "../components/dropdown"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SplosnaKomunikacija from "./komunikacija-splosna"

class Blog extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Layout>
        <div className="blog">
          <div className="blog-content">
            <div className="blog-item">
              <div className="blog-title">
                Bel list
              </div>
              <div className="blog-text">Si kdaj pomislil, da ko se rodiš, si kot bel, nepopisan list. Nato prve zapise, na ta tvoj lep beli list,
              naredijo tvoji starši, kasneje jim seveda pomagajo tudi stari starši (ker bog ne daj, brez njih res
              ne gre ;)). Nekaj časa so oni tvoji učitelji, vodiči, »vsevedi« in mogoče še kakšna starejša sestra ali
              brat, za povrh, da je mera polna. Ja, prav vsi te učijo, usmerjajo in itak vedo kaj je najbolje zate.
              Kasneje se temu »klanu« pridruži vrtec z vsemi pripadajočimi akterji (vrstniki in vzgojitelji),
              nato šola isti koncept zasedbe, samo v širšem krogu. To se nadaljuje skozi cel tvoj proces šolanja.
              Zraven pa puščajo svojo sled, na tem čudovitem listu, seveda tudi prijatelji…tisti »ta najboljši« in
              tisti malo manj »boljši«.
              <br />
              Potem nastopi »ta resen« del….služba. Okolica in sodelavci pridno igrajo svojo vlogo pri pisanju
              na tvoj list.
              <br />
              Nato spoznaš Ljubezen svojega življenja (če ne gre v prvo, pa mogoče v drugo, tretje….no,
              kakorkoli že <span className="emoji">😉</span>).
              <br />
                <br />
              Takrat nastopiš v svoji najboljši verziji, ki jo potegneš na plano, čez vest ta »balast«.  Na začetku
              se ti razprejo krila, zadihaš s polnimi pljuči, imaš zalet. In ko imaš občutek, da boš poletel v svoji
              najboljši verziji…BAM…pristanek na zadnjico in dobrodošel v »realnosti«. Goriva je zmanjkalo ali
              smetana se je polizala.
              <br />
              Na plano pridejo vsi ti »tvoji« zapisi. In velikokrat niti ne »porajtaš«, da pravzaprav razmišljaš,
              občutiš, razumeš kot si bil naučen. Nekje globoko v sebi pa ti tihi glasek govori, da mogoče pa le
              ni čisto vse tako ali »prav«, kot si vedel in znal da sedaj. Da mogoče obstaja kakšna drugačna
              realnost, tvoja realnost. Mogoče pa ti to, karkoli že, lahko izpelješ, se lahko naučiš, priučiš, si
              dovoliš povedati na glas kaj si misliš in kako razmišljaš, si dovoliš drugače občutiti, si dovoliš
              občutiti na sploh in si določene stvari tudi priznati.
              <br />
                <br />
              Mogoče, pa ti stvari LAHKO pelješ skozi življenje drugače kot tvoji starši, prijatelji sodelavci...
              <br />
                <br />
                <strong>Vse je mogoče! Kar je v naši domišljiji je mogoče tudi v naši realnosti. Ampak POZOR!</strong>
                <br />
                <br />
              Nič se ne spremeni  čez noč in nič se ne bo zgodilo samo od sebe. Vsaka sprememba zahteva svoj
              čas. Se zavedaš, koliko radirke potrebuješ in časa, da »zradiraš«, kar ti ne služi?
              <br />
                <br />

              Potrebno si je RESNIČNO želeti boljši, bolj po tvojih željah naravnan dan in življenje.
              <br />
                <br />
              Ker na tem tvoje čudovitem listu je veliko DOBRONAMERNIH zapisov (prepričanj in vzorcev).
              <br />
                <br />
              In da prideš do tega, kdo pravzaprav si TI TI in ne kdo si, kot te je definirala okolica in vsi njeni
              akterji prisotni v tvojem življenju, zato je potrebno delo na sebi. In za preseči vse to, kar te
              zadržuje, je potrebno zopet delati na sebi.
              <br />
                <br />
              Ja, če se odločiš za delo na sebi, ti garantiram, ne bo ti dolgčas in ne bo ti zmanjkalo dela  <span className="emoji">😃</span> .
              <br />
                <br />
              Je pa noro dober OBČUTEK, ko se osvobodiš določenih spon, prepričan, vzorcev...POLETIŠ <span className="emoji">😉</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

}

export default Blog
