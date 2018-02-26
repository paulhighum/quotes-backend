const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const queries = require("./queries")

app.use(bodyParser.json())
app.use(cors())

app.get("/", (request, response, next) => {
  queries
    .quoteWithComments()
    .then(quotes => {
      response.json({ quotes })
    })
    .catch(next)
})

app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  })
})

module.exports = app
