import axios from "axios"

const instance = axios.create({
  // baseURL: 'https://reavisys.si/api',
  baseURL: "https://komunikacija-kreacija.webdev.reavisys.si/api",
  // baseURL: "https://localhost:5001",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    status: "ok",
  },
})
export default {
  /***************************************************** */
  sendMessage: data =>
    instance({
      method: "POST",
      url: instance.baseURL,
      data: data,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      transformResponse: [
        function(data) {
          console.log("\n\n\n\n Transforming data...")
          console.log("*************************Send message /api/submit...")
          console.log("data::: ", data)
          const json = JSON.parse(data)
          console.log("json data::: ", json)
          return json
        },
      ],
    }),

  /**************************************************** */
}
