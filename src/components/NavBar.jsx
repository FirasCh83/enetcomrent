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
        <button className="hidden sm:block text-gray-700 hover:text-blue-600 font-medium transition">
          Connexion Étudiant
        </button>

        {/* Owner Space */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow transition">
          Espace Propriétaire
        </button>
        

</div>

      </div>

    </nav>
  )
}

export default Navbar