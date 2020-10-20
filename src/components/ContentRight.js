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
