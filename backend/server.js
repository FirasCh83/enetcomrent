require("dotenv").config()
const Apartment = require("./models/Apartment")
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


app.use(cors())

app.get("/", (req, res) => {
  res.send("Enetcomrent backend is running 😄")
})
app.get("/apartments", async (req, res) => {

  const apartments = await Apartment.find()

  res.json(apartments)

})

app.get("/create", async (req, res) => {

  const newApartment = new Apartment({

    title: "Modern Studio",

    location: "Hay El Ons",

    price: "450 DT/month",

    distance: "5 min from ENET'Com",

    gender: "Male",

    rooms: "S+1",

    image: "https://via.placeholder.com/300"

  })

  await newApartment.save()

  res.send("Apartment saved 😄")

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})