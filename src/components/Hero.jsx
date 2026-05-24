function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-100 py-24 px-6 overflow-hidden">

      {/* BACKGROUND BLUR CIRCLES */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto text-center">

        <p className="text-blue-600 font-semibold mb-4 tracking-wide uppercase">
          Student Housing Made Simple
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">

          Find Your Perfect Apartment
          <span className="text-blue-600"> Near ENET'Com</span>

        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">

          Enetcomrent helps students find trusted apartments and shared housing
          in Hay El Ons near ENET'Com, ISIMS, ISGI, and IIT.

          Simple, fast, and designed for student life.

        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition duration-300">
            Explore Apartments
          </button>

          <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-2xl font-semibold border shadow-sm transition duration-300">
            Learn More
          </button>

        </div>

      </div>

    </section>
  )
}

export default Hero