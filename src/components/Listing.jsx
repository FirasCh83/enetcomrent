import { Link } from "react-router-dom"
function Listing({ apartments }) {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">

      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Available Apartments
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {apartments.map((apt) => (
          <div
            key={apt._id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={apt.image}
                alt={apt.title}
                className="h-56 w-full object-cover"
              />

              {/* TYPE BADGE */}
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600 shadow">
                {apt.type}
              </span>

            </div>

            {/* CONTENT */}
            <div className="p-5">

              <div className="flex justify-between items-center">

                <h3 className="text-xl font-bold text-gray-800">
                  {apt.title}
                </h3>

                <p className="text-blue-600 font-bold">
                  {apt.price}
                </p>

              </div>

              <p className="text-gray-500 mt-2">
                 {apt.location}
              </p>

              {/* INFO BADGES */}
              <div className="flex gap-3 mt-5">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {apt.distance} min
                </span>

                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                  {apt.gender}
                </span>

              </div>

              {/* BUTTON */}
              <Link to={`/apartment/${apt._id}`}>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                View Details
              </button>

            </Link>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Listing