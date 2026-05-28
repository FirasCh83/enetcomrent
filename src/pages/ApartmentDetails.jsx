import { useState } from "react"

import {
  useParams,
  Link
} from "react-router-dom"

function ApartmentDetails({ apartments }) {

  const { id } = useParams()

  const apartment = apartments.find(
    (apt) => apt._id === id
  )
  const [selectedImage, setSelectedImage] = useState("")

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Apartment not found
      </div>
    )
  }
  
  if (!selectedImage) {
  setSelectedImage(apartment.image)
}

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* BACK BUTTON */}
      <Link
        to="/"
        className="inline-block mb-8 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to listings
      </Link>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          {/* IMAGE */}
          <img
            src={selectedImage}
            alt={apartment.title}
            className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
          />
          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-4 overflow-x-auto">

             <img
    src={apartment.image}
    alt="Apartment"
    onClick={() => setSelectedImage(apartment.image)}
    className="w-28 h-20 object-cover rounded-xl border-4 border-blue-600 cursor-pointer"
  />



</div>

          {/* INFO */}
          <div className="mt-8">

            <h1 className="text-4xl font-bold mb-4">
              {apartment.title}
            </h1>

            <p className="text-gray-600 text-lg mb-6">
               {apartment.location}
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-4 mb-8">

              <div className="bg-white shadow px-4 py-2 rounded-xl">
                 {apartment.distance} min from ENET'Com
              </div>

              <div className="bg-white shadow px-4 py-2 rounded-xl">
                 {apartment.gender}
              </div>

              <div className="bg-white shadow px-4 py-2 rounded-xl">
                 {apartment.rooms}
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-4">
                Description
              </h2>

              <p className="text-gray-700 leading-8">
                {apartment.description}
              </p>

            </div>
            {/* AMENITIES */}
            <div className="bg-white rounded-3xl shadow p-8 mt-8">

              <h2 className="text-2xl font-bold mb-6">
                  Amenities
              </h2>

              <div className="flex flex-wrap gap-4">

                {["WiFi", "Kitchen", "Desk"].map((item, index) => (

                <div
                  key={index}
                  className="bg-gray-100 px-5 py-3 rounded-2xl font-medium"
                  >
                 {item}
      </div>

    ))}

  </div>

</div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-10">

            <p className="text-gray-500 mb-2">
              Monthly Rent
            </p>

            <h2 className="text-4xl font-bold mb-6">
              {apartment.price} DT/month
            </h2>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg transition">
              Contact Owner
            </button>

            {/* QUICK INFO */}
            <div className="mt-8 space-y-4 text-gray-700">

              <div className="flex justify-between">
                <span>Distance</span>
                <span>{apartment.distance} min from ENET'Com</span>
              </div>

              <div className="flex justify-between">
                <span>Gender</span>
                <span>{apartment.gender}</span>
              </div>

              <div className="flex justify-between">
                <span>Type</span>
                <span>{apartment.rooms}</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ApartmentDetails