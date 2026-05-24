function Filter({
  setDistanceFilter,
  setGenderFilter,
  setTypeFilter
}) {
  return (
    <section className="px-6 -mt-10 relative z-20">

      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-6 border border-gray-200">

        <div className="flex flex-col md:flex-row gap-4">

          {/* Distance */}
          <select
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onChange={(e) => setDistanceFilter(e.target.value)}
          >
            <option value="">All distances</option>
            <option value="5">5 min</option>
            <option value="7">7 min</option>
            <option value="10">10 min</option>
          </select>

          {/* Gender */}
          <select
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="">All genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* Type */}
          <select
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All types</option>
            <option value="S+0">S+0</option>
            <option value="S+1">S+1</option>
            <option value="S+2">S+2</option>
          </select>

        </div>

      </div>

    </section>
  )
}

export default Filter