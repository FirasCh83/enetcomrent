import { Link } from "react-router-dom"
function Navbar() {
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

        {/* Student Login */}
        <Link
        to="/student-login"
        className="bg-white border border-gray-300 hover:bg-gray-100 px-5 py-2.5 rounded-xl font-semibold transition"
        >
        Connexion Étudiant
        </Link>

        {/* Owner Space */}
<Link
  to="/owner-signup"
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow transition"
>
  Espace Propriétaire
</Link>
        

</div>

      </div>

    </nav>
  )
}

export default Navbar