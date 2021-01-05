import React, { useState } from "react"

import apiCalls from "../api/apiCalls"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
//import MessageSuccess from "../components/MessageSuccess"
import { confirmAlert } from "react-confirm-alert" // Import
import "react-confirm-alert/src/react-confirm-alert.css" // Import css

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }

  return {
    value,
    //reset: () => setValue(""),
    onChange: handleChange,
  }
}

export default function Form5() {
  const email = useFormInput("")
  const message = useFormInput("")
  const name = useFormInput("")
  const { reset } = useFormInput("")

  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")
  const [notification, setNotification] = useState("")

  // Value for body-parser
  let nameVal = name.value
  let emailVal = email.value
  let messageVal = message.value

  const handleSubmit = async e => {
    debugger
    e.preventDefault()
    console.log("executeRecaptcha ")
    //console.log("executeRecaptcha ", executeRecaptcha)
    // Check if the captcha was skipped or not
    if (!executeRecaptcha) {
      return
    }

    // handle empty fields just in case
    if (!name.value) {
      setNotification(`Prosimo vnesite ime.`)
      return
    }
    if (!email.value) {
      setNotification(`Prosimo vnesite e-mail.`)
      return
    } else if (!message.value) {
      setNotification(`Prosim vnesite sporočilo.`)
      return
    }
    debugger
    // This is the same as grecaptcha.execute on traditional html script tags
    const result = await executeRecaptcha("homepage")
    //setToken(result) //--> grab the generated token by the reCAPTCHA
    let token = result
    console.log("result", result)
    console.log(
      "nameVal> ",
      nameVal,
      " emailVal> ",
      emailVal,
      "messageVal> ",
      messageVal,
      "token> ",
      token
    )

    const data = JSON.stringify({ nameVal, emailVal, messageVal, token })
    // Prepare the data for the server, specifically body-parser
    /* const data = JSON.stringify({ nameVal, emailVal, messageVal, token }) */

    sendMessage(data)
  }
  const sendMessage = data => {
    //
    console.log("DATA> ", data)

    let url = "http://localhost:5001/api/submit"

    console.log("sendMessage - data ", data)
    console.log("calling method sendMessage> data, ", data)
    console.log("...\n")

    apiCalls
      .sendMessage(data, url)
      .then(res => {
        if (res.status == 200) {
          setNotification(res.data.msg)
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className="modal-order-confirm">
                  <h2>Vaše sporočilo je bilo uspešno poslano.</h2>
                  <button className="btn-modal order" onClick={onClose}>
                    Zapri
                  </button>
                </div>
              )
            },
          })
        } else {
          console.log("res.status != 200")
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className="modal-order-confirm">
                  <div>
                    <h3>Prišlo je do napake pri pošiljanju sporočila.</h3>
                    <h4>Prosimo poskusite kasneje.</h4>
                  </div>
                  <button className="btn-modal order" onClick={onClose}>
                    Zapri
                  </button>
                </div>
              )
            },
          })
        }
        nameVal = ""
      })
      .catch(err => {
        console.log("ERROR api submit ", err, err.status)
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div className="modal-order-confirm">
                <div>
                  <h3>Prišlo je do napake pri pošiljanju sporočila.</h3>
                  <h4>Prosimo poskusite kasneje.</h4>
                </div>
                <button className="btn-modal order" onClick={onClose}>
                  Zapri
                </button>
              </div>
            )
          },
        })
      })
    //reset()
    setNotification()
    return
  }

  return (
    <>
      {" "}
      {/*   <GoogleReCaptchaProvider
        reCaptchaKey="6LfGuxsaAAAAAMbVSYcIXABn5VO183wlMCfNxpwh"
        scriptProps={{
          async: true, // optional, default to false,
          defer: true, // optional, default to false
        }}
      > */}
      <form onSubmit={handleSubmit} id="contact-form" className="form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Ime in priimek
          </label>
          <input type="text" className="form-control" id="name" {...name} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email naslov
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...email}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Sporočilo
          </label>
          <textarea
            className="form-control"
            rows="5"
            maxLength="300"
            name="message"
            {...message}
            id="message"
          />
        </div>
        <br />
        <br />
        <input
          type="submit"
          className="send-msg-btn"
          value="Pošlji sporočilo"
        ></input>
        <br />
        {/*  <div className="notification-div">
          {" "}
          {notification && <span>{notification}</span>}
        </div> */}
      </form>
      {/*     </GoogleReCaptchaProvider> */}
      {/*     <MessageSuccess
       ref={this.childOrderSuccess}
        closeParent={this.closeModal} 
      /> */}
    </>
  )
}
