import { useState } from "react"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Home from "./pages/Home"
import ApartmentDetails from "./pages/ApartmentDetails"
import apartments from "./data/apartments"

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

      <BrowserRouter>

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <Home
                apartments={apartments}
                filteredApartments={filteredApartments}
                setDistanceFilter={setDistanceFilter}
                setGenderFilter={setGenderFilter}
                setTypeFilter={setTypeFilter}
              />
            }
          />

          {/* DETAILS PAGE */}
          <Route
            path="/apartment/:id"
            element={<ApartmentDetails apartments={apartments} />}
          />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App