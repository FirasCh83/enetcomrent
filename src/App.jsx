import { useState } from "react"

import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Filter from "./components/Filter"
import Listing from "./components/Listing"

const apartments = [
  {
    id: 1,
    title: "Modern Studio",
    price: "250 TND",
    location: "Hay El Ons",
    distance: "5",
    gender: "Male",
    type: "S+0",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    id: 2,
    title: "Shared Apartment",
    price: "180 TND",
    location: "Hay El Ons",
    distance: "10",
    gender: "Female",
    type: "S+2",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156"
  },
  {
    id: 3,
    title: "Quiet Room",
    price: "220 TND",
    location: "Hay El Ons",
    distance: "7",
    gender: "Male",
    type: "S+1",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  }
]

function App() {
  const [distanceFilter, setDistanceFilter] = useState("")
  const [genderFilter, setGenderFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  

  const filteredApartments = apartments.filter((apt) => {
    return (
      (distanceFilter === "" || apt.distance === distanceFilter) &&
      (genderFilter === "" || apt.gender === genderFilter) &&
      (typeFilter === "" || apt.type === typeFilter)
    )
  })

  return (
    <div>
      <Navbar />

      <Hero />

      <Filter
        setDistanceFilter={setDistanceFilter}
        setGenderFilter={setGenderFilter}
        setTypeFilter={setTypeFilter}
      />

      <Listing apartments={filteredApartments} />
    </div>
  )
}

export default App