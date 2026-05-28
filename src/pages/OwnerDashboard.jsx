import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function OwnerDashboard() {
  const [apartments, setApartments] = useState([])
  useEffect(() => {

  fetch("http://localhost:5000/apartments")
    .then((res) => res.json())
    .then((data) => {
      setApartments(data)
    })

}, [])

const handleDelete = async (id) => {

  try {

    await fetch(
      `http://localhost:5000/apartments/${id}`,
      {
        method: "DELETE"
      }
    )

    setApartments(
      apartments.filter((apt) => apt._id !== id)
    )

  } catch (error) {

    console.log(error)

  }

}
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            Owner Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your apartments in Hay El Ons
          </p>
        </div>

        <Link
          to="/add-apartment"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
        >
          + Add Apartment
        </Link>

      </div>

      {/* EMPTY STATE */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {apartments.map((apt) => (

    <div
      key={apt._id}
      className="bg-white rounded-3xl shadow-xl overflow-hidden"
    >

      <img
        src={apt.image}
        alt={apt.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-2">
          {apt.title}
        </h2>

        <p className="text-gray-600 mb-4">
          {apt.location}
        </p>

        <p className="font-semibold text-lg mb-6">
          {Number(apt.price).toLocaleString()} DT/month
        </p>

        <div className="flex gap-4">

          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition">
            Edit
          </button>

          <button
  onClick={() => handleDelete(apt._id)}
  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold transition"
>
  Delete
</button>

        </div>

      </div>

    </div>

  ))}

</div>

    </div>
  )
}

export default OwnerDashboard