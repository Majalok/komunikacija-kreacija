const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

var cors = require("cors")

// Config
const app = express()
const port = process.env.PORT || 5000
const publicPath = path.join(__dirname, "../..", "public")
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())
app.use(express.static(publicPath))

//methods for mail testing

const appRoute = require("./routes/appRoute.js")

const { signup, submit, sendMessage } = require("./controller/appController.js")

app.use(cors())

app.use("/api/", appRoute)

console.log("process.env ", process.env.TEST)

// Render landing page
/* app.get('', (req, res) => {
    res.sendfile(path.join(publicPath, 'index.html'))
})
 */

// Render 404 page
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "404.html"))
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`)
  console.log(publicPath)
})
