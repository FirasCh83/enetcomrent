import { useState } from "react"

function AddApartment() {

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [distance, setDistance] = useState("")
  const [gender, setGender] = useState("")
  const [rooms, setRooms] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    const newApartment = {
      title,
      location,
      price,
      distance,
      gender,
      rooms,
      description,
      image
    }
    const token = localStorage.getItem("token")

    const response = await fetch(
      "http://localhost:5000/apartments",
      {
        method: "POST",

        headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`
},

        body: JSON.stringify(newApartment)
      }
    )

    const data = await response.json()

    console.log(data)

    alert("Apartment added successfully 😄")
  }

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold mb-8">
          Add Apartment
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Apartment title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="number"
            placeholder="Price in DT"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="number"
            placeholder="Distance from university"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Mixed">Mixed</option>
          </select>

          <select
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          >
            <option value="">Apartment Type</option>
            <option value="S+0">S+0</option>
            <option value="S+1">S+1</option>
            <option value="S+2">S+2</option>
            <option value="S+3">S+3</option>
          </select>

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 rounded-2xl border h-40"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition"
          >
            Add Apartment
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddApartment