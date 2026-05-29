require("dotenv").config()
const bcrypt = require("bcryptjs")
const Apartment = require("./models/Apartment")
const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")



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

app.use(express.json())

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

    distance: "5",

    gender: "Male",

    rooms: "S+1",

    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

    description: "Modern studio apartment available for rent in a prime location."

  })

  await newApartment.save()

  res.send("Apartment saved 😄")

})

app.post("/apartments", async (req, res) => {

  const apartment = new Apartment(req.body)

  await apartment.save()

  res.json(apartment)

})

app.delete("/apartments/:id", async (req, res) => {
  console.log(req.params.id)

  try {

    await Apartment.findByIdAndDelete(req.params.id)

    res.json({
      message: "Apartment deleted successfully 😄"
    })

  } catch (error) {

    res.status(500).json({
      error: "Failed to delete apartment"
    })

  }

})

app.put("/apartments/:id", async (req, res) => {

  try {

    const updatedApartment =
      await Apartment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )

    res.json(updatedApartment)

  } catch (error) {

    res.status(500).json({
      error: "Failed to update apartment"
    })

  }

})

app.get("/apartments/:id", async (req, res) => {

  try {

    const apartment =
      await Apartment.findById(req.params.id)

    res.json(apartment)

  } catch (error) {

    res.status(500).json({
      error: "Apartment not found"
    })

  }

})

app.post("/owner/signup", async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body

    // CHECK IF EMAIL EXISTS
    const existingUser =
      await User.findOne({ email })

    if (existingUser) {

      return res.status(400).json({
        error: "Email already exists"
      })

    }
    if (!name || !email || !password) {

      return res.status(400).json({
        error: "All fields are required"
      })

    }
    if (password.length < 6) {

      return res.status(400).json({
        error: "Password must be at least 6 characters"
      })

    }
    if (!email.includes("@")) {

      return res.status(400).json({
        error: "Invalid email"
      })}


    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10)

    // CREATE USER
    const newUser = new User({

      name,
      email,

      password: hashedPassword,

      role: "owner"

    })

    await newUser.save()

    res.status(201).json({
      message: "Owner account created 😄"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      error: "Server error"
    })

  }

})

const User = require("./models/User")

app.listen(5000, () => {
  console.log("Server running on port 5000")
})