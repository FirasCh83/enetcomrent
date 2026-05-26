require("dotenv").config()
const express = require("express")
const cors = require("cors")

const mongoose = require("mongoose")

const app = express()

mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log("MongoDB connected 😄")
})
.catch((error) => {
  console.log(error)
})

const apartments = require("./apartments")

app.use(cors())

app.get("/", (req, res) => {
  res.send("Enetcomrent backend is running 😄")
})
app.get("/apartments", (req, res) => {
  res.json(apartments)
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})