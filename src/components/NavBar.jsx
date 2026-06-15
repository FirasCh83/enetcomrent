import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
function Navbar() {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

useEffect(() => {

  const storedUser =
    localStorage.getItem("user")

  if (storedUser) {
    setUser(JSON.parse(storedUser))
  }

}, [])
  const handleLogout = () => {

  localStorage.removeItem("token")
  localStorage.removeItem("user")

  setUser(null)

  navigate("/")

}
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div>

          <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight">
            Enetcomrent
          </h1>

        </div>

        {/* LINKS */}
        

        {/* BUTTONS */}
<div className="flex items-center gap-4">

  {user ? (

    <>
      {/* USER NAME */}
      <span className="font-semibold text-gray-700">
        👋 {user.name}
      </span>

      {/* DASHBOARD */}
      <Link
        to="/owner-dashboard"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow transition"
      >
        Dashboard
      </Link>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold transition"
      >
        Logout
      </button>
    </>

  ) : (

    <>
      {/* STUDENT LOGIN */}
      <Link
        to="/student-login"
        className="bg-white border border-gray-300 hover:bg-gray-100 px-5 py-2.5 rounded-xl font-semibold transition"
      >
        Connexion Étudiant
      </Link>

      {/* OWNER LOGIN */}
      <Link
        to="/owner-login"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow transition"
      >
        Espace Propriétaire
      </Link>
    </>

  )}

</div>
        

</div>

    </nav>
  )}

export default Navbar