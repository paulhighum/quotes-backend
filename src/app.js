const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const queries = require("./queries")

app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res, next) => {
  queries
    .quoteWithComments()
    .then(quotes => {
      res.json({ quotes })
    })
    .catch(next)
})

app.get("/quotes", (req, res, next) => {
  queries
    .list("quotes")
    .then(quotes => {
      res.json({ quotes })
    })
    .catch(next)
})

app.get("/comments", (req, res, next) => {
  queries
    .list("comments")
    .then(comments => {
      res.json({ comments })
    })
    .catch(next)
})

app.get("/quotes/:id", (req, res, next) => {
  queries
    .read(req.params.id, "quotes")
    .then(quotes => {
      quotes ? res.json({ quotes }) : res.sendStatus(404)
    })
    .catch(next)
})

app.get("/comments/:id", (req, res, next) => {
  queries
    .read(req.params.id, "comments")
    .then(comments => {
      comments ? res.json({ comments }) : res.sendStatus(404)
    })
    .catch(next)
})

app.post("/quotes", (req, res, next) => {
  queries
    .create(req.body, "quotes")
    .then(quotes => {
      res.status(201).json({ quotes })
    })
    .catch(next)
})

app.post("/comments", (req, res, next) => {
  queries
    .create(req.body, "comments")
    .then(comments => {
      res.status(201).json({ comments })
    })
    .catch(next)
})

app.put("/quotes/:id", (req, res, next) => {
  queries
    .update(req.body, req.params.id, "quotes")
    .then(quotes => {
      res.json({ quotes })
    })
    .catch(next)
})

app.put("/comments/:id", (req, res, next) => {
  queries
    .update(req.body, req.params.id, "comments")
    .then(comments => {
      res.json({ comments })
    })
    .catch(next)
})

app.delete("/quotes/:id", (req, res, next) => {
  queries
    .delete(req.params.id, "quotes")
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

app.delete("/comments/:id", (req, res, next) => {
  queries
    .delete(req.params.id, "comments")
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  })
})

module.exports = app
