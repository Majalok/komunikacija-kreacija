const express = require("express")

const {
  submitForm,
  signup,
  sendMessage,
} = require("../controller/appController.js")

const router = express.Router()

// /api/user/signup
router.post("/user/signup", signup)

// /send-message
router.post("/send-message", sendMessage)

router.post("/submit", submitForm)

module.exports = router
