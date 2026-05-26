import { useState, useEffect } from "react"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Home from "./pages/Home"
import ApartmentDetails from "./pages/ApartmentDetails"

function App() {
  const [distanceFilter, setDistanceFilter] = useState("")
  const [genderFilter, setGenderFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [apartments, setApartments] = useState([])

  useEffect(() => {

  fetch("http://localhost:5000/apartments")
    .then((res) => res.json())
    .then((data) => {
      setApartments(data)
    })

}, [])


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