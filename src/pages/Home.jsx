import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Filter from "../components/Filter"
import Listing from "../components/Listing"

function Home({
  apartments,
  setDistanceFilter,
  setGenderFilter,
  setTypeFilter,
  filteredApartments,
  darkMode,
  setDarkMode
}) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

      <Filter
        setDistanceFilter={setDistanceFilter}
        setGenderFilter={setGenderFilter}
        setTypeFilter={setTypeFilter}
      />

      <Listing apartments={filteredApartments} />
    </>
  )
}

export default Home