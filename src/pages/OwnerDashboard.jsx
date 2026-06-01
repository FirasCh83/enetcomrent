import {
  Link,
  useNavigate
} from "react-router-dom"

import {
  useEffect,
  useState
} from "react"

function OwnerDashboard() {

  const [apartments, setApartments] = useState([])

  const navigate = useNavigate()

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  useEffect(() => {

    const token =
      localStorage.getItem("token")

    fetch(
      "http://localhost:5000/owner/apartments",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setApartments(data)
      })

  }, [])

  const handleLogout = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("user")

    navigate("/owner-login")

  }

  const handleDelete = async (id) => {

    try {

      const token =
        localStorage.getItem("token")

      await fetch(
        `http://localhost:5000/apartments/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setApartments(
        apartments.filter(
          (apt) => apt._id !== id
        )
      )

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      {/* HEADER */}

      <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          <div>

            <h1 className="text-4xl font-bold mb-2">
              Welcome back, {user?.name} 
            </h1>

            <p className="text-gray-500 text-lg">
              Manage your apartments and listings.
            </p>


          </div>

          <div className="flex flex-wrap gap-3">

            <Link
              to="/"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              View Listings
            </Link>

            <Link
              to="/add-apartment"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              + Add Apartment
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

      {/* EMPTY STATE */}

      {apartments.length === 0 ? (

        <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

          <h2 className="text-3xl font-bold mb-4">
            No apartments yet
          </h2>

          <p className="text-gray-600 mb-8">
            Start by adding your first property.
          </p>

          <Link
            to="/add-apartment"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            Add Your First Apartment
          </Link>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {apartments.map((apt) => (

            <div
              key={apt._id}
              className="
                bg-white
                rounded-3xl
                shadow-xl
                overflow-hidden
                hover:shadow-2xl
                transition
                duration-300
              "
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

                <div className="space-y-2 mb-4">

                  <p className="text-gray-600">
                     {apt.location}
                  </p>

                  <p className="text-gray-600">
                     {apt.distance} min from ENET'Com
                  </p>

                  <p className="text-gray-600">
                     {apt.rooms}
                  </p>

                  <p className="text-gray-600">
                     {apt.gender}
                  </p>

                </div>

                <p className="text-2xl font-bold text-blue-600 mb-6">
                  {Number(apt.price).toLocaleString()} DT/month
                </p>

                <div className="flex gap-4">

                  <Link
                    to={`/edit-apartment/${apt._id}`}
                    className="
                      flex-1
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      py-3
                      rounded-2xl
                      font-semibold
                      text-center
                      transition
                    "
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(apt._id)
                    }
                    className="
                      flex-1
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      py-3
                      rounded-2xl
                      font-semibold
                      transition
                    "
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}

export default OwnerDashboard