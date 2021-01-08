const nodemailer = require("nodemailer")
const Mailgen = require("mailgen")

const { EMAIL, EMAIL_TO, MAIN_URL } = require("../config")

const rp = require("request-promise")

const dotenv = require("dotenv")
dotenv.config()

const PASSWORD = process.env.PASSWORD

const secretKey = process.env.RECAPTCHA_SECRET_KEY

let transporter = nodemailer.createTransport({
  // service: "Yahoo",
  host: "cwp01.dc01.reavisys.si",
  port: 465,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
  /*   tls: {
    rejectUnauthorized: false,
  }, */
  secure: true,
})

let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Nodemailer",
    link: MAIN_URL,
  },
})

console.log("PROCESS.ENV.email (iz config)> ", EMAIL)
console.log("PROCESS.ENV.password (iz process.env)> ", process.env.PASSWORD)
console.log("MAIN URL (iz config)> ", MAIN_URL)
console.log("PROCESS.ENV.email_TO EMAIL_TO URL (iz config)> ", EMAIL_TO)

const signup = async (req, res) => {
  console.log("\n\n_________________________")

  console.log("SIGNUP")
  //console.log("req.body: ", req.body.userEmail, req.body.name)
  const { userEmail, name } = req.body

  // sign up the user .....

  // then send the email
  let response = {
    body: {
      name,
      intro: "Welcome to Nodemailer! We're very excited to have you on board.",
    },
  }

  let mail = MailGenerator.generate(response)

  let message = {
    from: EMAIL,
    to: EMAIL,
    subject: "signup successful",
    html: mail,
  }

  console.log("email> ", EMAIL, ", ", PASSWORD)
  console.log("message> ", message.from, ", ", message.to)

  let transporterSendMail = await transporter
    .sendMail(message)
    /* .then(() => {
      console.error(" TEEEEEEEEEESSSSSSST        Napaka pri prijavi: ")
      return res.status(400).json({ msg: "Napaka pri prijavi" })
    }) */

    .then(res => {
      console.log("res>> ", res)
      console.log("res.response >> ", res.response)
      return true
    })
    .catch(error => {
      console.error("Napaka pri prijavi: ", error)
      return false
    })

  let signinResult = transporterSendMail

  console.log("signup result> ", signinResult)
  return signinResult
}

const sendMessage = (req, res) => {
  console.log("\n\n_________________________")
  console.log("SEND MESSAGE")

  const { nameVal, emailVal, messageVal } = req.body
  console.log(
    "messageName, messageEmail, messageContent: ",
    nameVal,
    emailVal,
    messageVal
  )
  let response = {
    body: {
      intro: [
        "Imate novo sporočilo",
        "<hr/>",
        "Ime pošiljatelja: " + nameVal,
        "Email pošiljatelja: " + emailVal,
      ],
      outro: ["Vsebina sporočila: ", messageVal, "<hr/>"],
    },
  }
  console.log("Before MailGenerator.generate(response)")

  let mail = MailGenerator.generate(response)

  let message = {
    from: EMAIL,
    //to: "majalokar@gmail.com",
    to: EMAIL_TO,
    subject: "Novo sporocilo",
    html: mail,
  }
  console.log("from: ", EMAIL, "to: ", EMAIL_TO)
  console.log("Before transporter.sendMail1")
  transporter
    .sendMail(message)
    /*     .then(() => {
      return res.status(200).json({ msg: "Email je bil poslan" })
    }) */
    .catch(error => {
      console.error("Napaka pri posiljanju sporocila> ", error)
      return res.status(400).json({ msg: "Napaka pri posiljanju sporocila" })
    })

  return true
}

const submitForm = async (req, res) => {
  console.log("++++++++++++++++++ process form +++++++++++++++++")

  let res1 = await processForm(req, res)
    .then(status => {
      console.log("status!!! ", status)
      if (status) {
        return true
      }
      return false
    })
    .catch(err => {
      console.log("Napaka pri processForm ", err)
      return false
    })

  console.log("+++++ rezultat funkcije processForm>> ", res1)

  if (!res1) {
    return res.status(400).json({
      msg: "Pošiljanje neuspešno. Error resolving captcha",
    })
  }

  //ali se je verifikacija token-a pravilno izvedla
  if (res1) {
    console.log("\n\n\n++++++++++++++++++ signup +++++++++++++++++")

    let res2 = await signup(req, res)
    console.log("+++++ rezultat funkcije signup>> ", res2)

    if (res2) {
      console.log("\n\n\n++++++++++++++++++ sendMessage +++++++++++++++++")
      let res3 = await sendMessage(req, res)
      console.log("+++++ res3>> ", res3)

      if (res3) {
        return res
          .status(200)
          .json({ msg: "Pošiljanje e-maila je bilo uspešno." })
      }
    }
  }
  console.log("Pri posiljanju sporocila je prislo do napake.")
  return res.status(400).json({ msg: "Napaka pri posiljanju sporocila" })
}
const processForm = (req, res) => {
  console.log("\n\n_________________________")
  console.log("SUBMIT")

  const { token } = req.body

  console.log("secret key: ", secretKey)
  console.log("token: ", token)
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`

  console.log("\n\ncall /submit- posiljam podatke 1...", req.data, req.emailVal)
  console.log(
    "\n\ncall /submit- posiljam podatke 2...",
    req.body.nameVal,
    req.body.emailVal,
    req.body.messageVal,
    req.body.token
  )
  console.log("verification url ...", verificationUrl)
  return rp(verificationUrl).then(body => {
    console.log("\n\n\n... executing rp(verificationUrl)", body)
    const { success, score } = JSON.parse(body)
    return success
  })
}
module.exports = {
  submitForm,
  signup,
  sendMessage,
}
