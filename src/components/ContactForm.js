import React, { useState } from "react"

import apiCalls from "../api/apiCalls"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import closeIcon from "../assets/icons/close.png"

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      },
    },
  }
}

export default function Form() {
  const { value: name, bind: bindName, reset: resetName } = useInput("")
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("")
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  )

  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")
  const [notification, setNotification] = useState("")

  let nameVal = name
  let emailVal = email
  let messageVal = message

  const handleSubmit = async e => {
    e.preventDefault()
    if (!executeRecaptcha) {
      return
    }
    if (!nameVal) {
      setNotification(`Prosimo vnesite ime.`)
      return
    }
    if (!emailVal) {
      setNotification(`Prosimo vnesite e-mail.`)
      return
    } else if (!messageVal) {
      setNotification(`Prosim vnesite sporočilo.`)
      return
    }
    const result = await executeRecaptcha("homepage")
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
    sendMessage(data)
  }
  const sendMessage = data => {
    console.log("\ncalling method sendMessage> data, ", data)
    setNotification("")
    apiCalls
      .sendMessage(data)
      .then(res => {
        if (res.status == 200) {
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className="modal-order-confirm">
                  <h2>Vaše sporočilo je bilo uspešno poslano.</h2>
                  <button className="btn-modal sendMessage" onClick={onClose}>
                    <img
                      className="close-icon confirm"
                      src={closeIcon}
                      title="Zapri"
                      alt=""
                    />
                    <span className="modal-close-txt">Zapri</span>
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
                  <button className="btn-modal sendMessage" onClick={onClose}>
                    <img
                      className="close-icon confirm"
                      src={closeIcon}
                      title="Zapri"
                      alt=""
                    />
                    <span className="modal-close-txt">Zapri</span>
                  </button>
                </div>
              )
            },
          })
        }
      })
      .catch(err => {
        console.log("ERROR api submit ", err)
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div className="modal-order-confirm">
                <div>
                  <h3>Prišlo je do napake pri pošiljanju sporočila.</h3>
                  <h4>Prosimo poskusite kasneje.</h4>
                </div>
                <button className="btn-modal sendMessage" onClick={onClose}>
                  <img
                    className="close-icon confirm"
                    src={closeIcon}
                    title="Zapri"
                    alt=""
                  />
                  <span className="modal-close-txt">Zapri</span>
                </button>
              </div>
            )
          },
        })
      })

    resetEmail()
    resetMessage()
    resetName()
  }
  /* 
  const onClose = () => {
    resetName()
    resetEmail()
    resetMessage()
  } */

  var callback = function(key) {
    console.log("callback recaptcha: ", key)
  }
  var loaded = function() {
    console.log("recaptchaLoaded")
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="contact-form" className="form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Ime in priimek
          </label>
          <input type="text" className="form-control" id="name" {...bindName} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email naslov
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...bindEmail}
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
            name="message"
            {...bindMessage}
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
        <div className="notification-div">
          {" "}
          {notification && <span>{notification}</span>}
        </div>
      </form>
    </>
  )
}
