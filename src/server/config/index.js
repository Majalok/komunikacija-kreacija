if (process.env.NODE_ENV === "prod") {
  console.log("--- process.env.NODE_ENV = production ", process.env.NODE_ENV)
  module.exports = require("./prod")
} else if (process.env.NODE_ENV === "dev") {
  console.log("--- process.env.NODE_ENV = dev", process.env.NODE_ENV)
  module.exports = require("./dev")
} else {
  console.log("--- process.env.NODE_ENV = local", process.env.NODE_ENV)
  module.exports = require("./local")
}
