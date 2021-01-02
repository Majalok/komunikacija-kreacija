const env = process.env.NODE_ENV || 'development'

module.exports = require(`../.${env}.js`)

/****
 *
 *
 kako vemo, v katerem okolju smo?
 v package.json nastavimo pod scripts NODE_ENV variablo

"scripts": {
    "start": "node index.js",
    "start:test": "NODE_ENV=test node index.js",
    "start:prod": "NODE_ENV=production node index.js"
  },

  ***/


/****
 *
 * v app.js uporabimo konfiguracijo
 *
 * const configuration = require('./configuration')

console.log('configuration: ', configuration)
 *
 */