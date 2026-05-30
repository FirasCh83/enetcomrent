const mongoose = require("mongoose")

const apartmentSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  distance: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true
  },

  rooms: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  ownerId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
}

})

module.exports = mongoose.model(
  "Apartment",
  apartmentSchema
)