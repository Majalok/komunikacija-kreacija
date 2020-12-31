import React, { useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange,
  }
}

export default function Form() {
  const email = useFormInput("")
  const message = useFormInput("")
  const name = useFormInput("")

/*   const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("") */
  const [notification, setNotification] = useState("")

  // Value for body-parser
  const nameVal = name.value
  const emailVal = email.value
  const messageVal = message.value

  const handleSubmit = async e => {
    e.preventDefault()
debugger
    // Check if the captcha was skipped or not
   /*  if (!executeRecaptcha) {
      return
    } */

    // handle empty fields just in case
    if (!name.value) {
      setNotification(`Prosimo vnesite ime.`)
    }
    if (!email.value) {
      setNotification(`Prosimo vnesite e-mail.`)
    } else if (!message.value) {
      setNotification(`Prosim vnesite sporočilo.`)
    }

    // This is the same as grecaptcha.execute on traditional html script tags
   // const result = await executeRecaptcha("homepage")
   // setToken(result) //--> grab the generated token by the reCAPTCHA
    debugger
    console.log(
      "nameVal> ",
      nameVal,
      " emailVal> ",
      emailVal,
      "messageVal> ",
      messageVal
    )
    // Prepare the data for the server, specifically body-parser
    /* const data = JSON.stringify({ nameVal, emailVal, messageVal, token }) */
    const data = JSON.stringify({ nameVal, emailVal, messageVal })
    
     console.log("DATA> ", data)
    // POST request to your server
    fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials':'true'
        },
        body: data,
    })
       // .then(res => res.json())
        .then(data => {
            debugger
            console.log("THEN..",data)
            setNotification(data.msg)
        })
  }

  return (
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
      {notification && <span>{notification}</span>}
    </form>
  )
}
