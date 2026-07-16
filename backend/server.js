require("dotenv").config()
const bcrypt = require("bcryptjs")
const Apartment = require("./models/Apartment")
const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const verifyToken = require("./middleware/verifyToken")



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

  try {

    const apartments =
      await Apartment.find()

    res.json(apartments)

  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch apartments"
    })

  }

})


app.post(
  "/apartments",
  verifyToken,
  async (req, res) => {

  const apartment = new Apartment({

  ...req.body,

  ownerId: req.user.id

})
  await apartment.save()
  res.json(apartment)

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


app.delete(
  "/apartments/:id",
  verifyToken,
  async (req, res) => {

  try {

    const apartment =
  await Apartment.findById(req.params.id)
  if (
  apartment.ownerId.toString()
  !==
  req.user.id
) 

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

app.put(
  "/apartments/:id",
  verifyToken,
  async (req, res) => {
    try {
    const apartment =
  await Apartment.findById(req.params.id)
  if (
  apartment.ownerId.toString()
  !==
  req.user.id
) {

  return res.status(403).json({
    error: "Not authorized"
  })

}

  

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

app.post("/owner/login", async (req, res) => {

  try {

    const { email, password } = req.body

    // FIND USER
    const user = await User.findOne({ email })

    if (!user) {

      return res.status(400).json({
        error: "User not found"
      })

    }

    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!isMatch) {

      return res.status(400).json({
        error: "Invalid password"
      })

    }

    // GENERATE TOKEN
    const token = jwt.sign(

      {
        id: user._id,
        role: user.role
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    )

    res.json({

      message: "Login successful 😄",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      error: "Server error"
    })

  }

})

app.post("/student/signup", async (req, res) => {

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

    // VALIDATION
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
      })

    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10)

    // CREATE STUDENT
    const newUser = new User({

      name,
      email,

      password: hashedPassword,

      role: "student"

    })

    await newUser.save()

    res.status(201).json({

      message: "Student account created 😄"

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      error: "Server error"

    })

  }

})

app.post("/student/login", async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {

      return res.status(400).json({
        error: "User not found"
      })

    }

    if (user.role !== "student") {

      return res.status(403).json({
        error: "This account is not a student account"
      })

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!isMatch) {

      return res.status(400).json({
        error: "Invalid password"
      })

    }

    const token = jwt.sign(

      {
        id: user._id,
        role: user.role
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    )

    res.json({

      message: "Student login successful 😄",

      token,

      user: {

        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role

      }

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      error: "Server error"

    })

  }

})

app.get(
  "/owner/apartments",
  verifyToken,
  async (req, res) => {

    const apartments =
      await Apartment.find({
        ownerId: req.user.id
      })

    res.json(apartments)

  }
)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})