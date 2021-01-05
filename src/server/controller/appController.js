const nodemailer = require("nodemailer")
const Mailgen = require("mailgen")

const { EMAIL, EMAIL_TO, MAIN_URL } = require("../config")

const request = require("request")

const dotenv = require("dotenv")
dotenv.config()

const PASSWORD = process.env.PASSWORD

const secretKey = process.env.RECAPTCHA_SECRET_KEY

let transporter = nodemailer.createTransport({
  service: "Yahoo",
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
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

const signup = (req, res) => {
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
    // to: "majalokar@yahoo.com",
    to: EMAIL,
    subject: "signup successful",
    html: mail,
  }

  console.log("email> ", EMAIL, ", ", PASSWORD)
  console.log("message> ", message.from, ", ", message.to)

  transporter
    .sendMail(message)
    /* .then(() => {
      return res
        .status(200)
        .json({ msg: "you should receive an email from us" })
    }) */
    .catch(error => {
      console.error("Napaka pri prijavi: ", error)
      return res.status(400).json({ msg: "Napaka pri prijavi" })
    })
  return true
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
  /*   let messageName = "maja test"
  let messageEmail = "maja@test.com"
  let messageContent = "test vsebina"
 */

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
    to: process.env.EMAIL_TO,
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
  console.log("+++++ res1.statusCode>> ", res.statusCode)
  console.log("++++++++++++++++++ end process form +++++++++++++++++")

  if (res.statusCode != 200) {
    return
  }

  console.log("++++++++++++++++++ signup +++++++++++++++++")

  let res2 = await signup(req, res)
  console.log("+++++ res2>> ", res2)
  console.log("++++++++++++++++++ end signup +++++++++++++++++")

  console.log(
    "\n\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  )
  console.log("++++++++++++++++++ sendMessage +++++++++++++++++")

  let res3 = await sendMessage(req, res)
  console.log("+++++ res3>> ", res3)
  console.log("++++++++++++++++++ end sendMessage +++++++++++++++++")
}

const processForm = (req, res) => {
  console.log("\n\n_________________________")
  console.log("SUBMIT")
  //app.post('/submit', (req, res) => {
  const { nameVal, emailVal, messageVal, token } = req.body

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

  /* to ! odkomentiraj nazaj */
  if (!token) {
    console.log("Napaka pri token-u")
    return res.status(400).json({
      msg: "There was a problem with your request. Please try again later.",
    })
  }

  let email = process.env.EMAIL

  let userEmail = process.env.EMAIL //"majalokar@yahoo.com"

  let name = "Maja Lokar"
  console.log(" process.env.EMAIL > ", name, userEmail)

  //let url = "http://localhost"

  request(verificationUrl, (err, response, body) => {
    // Stop process for any errors
    if (err) {
      console.log("Error resolving captcha")

      return res.status(400).json({
        msg: "Pošiljanje neuspešno. Error resolving captcha",
        score: score,
      })
    }

    // Destructure body object
    // Check the reCAPTCHA v3 documentation for more information
    const { success, score } = JSON.parse(body)

    console.log("score: , success: ", score, success)
    // reCAPTCHA validation
    if (!success || score < 0.4) {
      console.log(
        "call request(verificationUrl Unsuccessful  !success || score < 0.4"
      )
      return res.status(400).json({
        msg: "Pošiljanje neuspešno.",
        score: score,
      })
    }

    // When no problems occur, "send" the form
    console.log("Congrats you sent the form:\n", nameVal, emailVal, messageVal)
    console.log("***********************Sending email:*******************\n")

    // Return feedback to user with msg
    return res.status(200).json({
      msg: "Vaše sporočilo je bilo uspešno poslano.",
      score: score,
    })
  })
}

module.exports = {
  submitForm,
  signup,
  sendMessage,
}
