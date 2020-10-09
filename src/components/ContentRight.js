import React from "react"

const ContentRight = () => (
    <div /* style={{
        backgroundImage: `url(../assets/4.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100 %'
    }} */ >
        <p className="right-title">naslov vsebina na desni </p>

        <div className="povezave-right">
            <ul className="right-list-112">
                <li className="right-112">
                    <strong>vsebina na desni</strong>
                </li>
                <br />
            </ul>
        </div>

        <hr />

        <p className="right-title">POVEZAVE</p>

        <div className="povezave-content content-section">
            {/*  <a
                className="povezava-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://meteo.arso.gov.si/met/sl/warning/fire"
                title="ARSO-Požarna ogroženost"
            >
                <img src="../icons/arso.png" alt="Logo" />
            </a>       */}
            <hr />
            <div className="povezave-right address">
                <br />
                <p className="">test</p>
                <p className="">test1</p>
            </div>
            <br />
            <p className="povezave-link">
                <a href="mailto: test@gmail.com">
                    test@gmail.com
              </a>
            </p>
            <br />
            <hr />
        </div >
    </div >
)

export default ContentRight
