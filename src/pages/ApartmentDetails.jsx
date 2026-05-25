import { useParams, Link } from "react-router-dom"

function ApartmentDetails({ apartments }) {

  const { id } = useParams()

  const apartment = apartments.find(
    (apt) => apt.id === Number(id)
  )

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Apartment not found
      </div>
    )
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
            src={apartment.image}
            alt={apartment.title}
            className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
          />

          {/* INFO */}
          <div className="mt-8">

            <h1 className="text-4xl font-bold mb-4">
              {apartment.title}
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              📍 {apartment.location}
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-4 mb-8">

              <div className="bg-white shadow px-4 py-2 rounded-xl">
                 {apartment.distance} min from university
              </div>

              <div className="bg-white shadow px-4 py-2 rounded-xl">
                 {apartment.gender}
              </div>

              <div className="bg-white shadow px-4 py-2 rounded-xl">
                 {apartment.type}
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-4">
                Description
              </h2>

              <p className="text-gray-700 leading-8">
                Comfortable student apartment located in Hay El Ons,
                close to ENET'Com, ISIMS, ISGI, and IIT.
                Includes modern furniture, calm environment,
                and easy transportation access.
              </p>

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
              {apartment.price}
            </h2>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg transition">
              Contact Owner
            </button>

            {/* QUICK INFO */}
            <div className="mt-8 space-y-4 text-gray-700">

              <div className="flex justify-between">
                <span>Distance</span>
                <span>{apartment.distance} min</span>
              </div>

              <div className="flex justify-between">
                <span>Gender</span>
                <span>{apartment.gender}</span>
              </div>

              <div className="flex justify-between">
                <span>Type</span>
                <span>{apartment.type}</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ApartmentDetails