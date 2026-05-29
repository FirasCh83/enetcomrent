import { useState, useEffect } from "react"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Home from "./pages/Home"
import ApartmentDetails from "./pages/ApartmentDetails"
import OwnerDashboard from "./pages/OwnerDashboard"
import AddApartment from "./pages/AddApartment"
import EditApartment from "./pages/EditApartment"
import StudentLogin from "./pages/StudentLogin"
import StudentSignup from "./pages/StudentSignup"
import OwnerLogin from "./pages/OwnerLogin"
import OwnerSignup from "./pages/OwnerSignup"

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
          <Route
            path="/owner-dashboard"
            element={<OwnerDashboard />}
          />
          <Route
            path="/add-apartment"
            element={<AddApartment />}
          />
          <Route
            path="/edit-apartment/:id"
            element={<EditApartment />}
          />
        <Route
        path="/student-login"
        element={<StudentLogin />}
        />

        <Route
        path="/student-signup"
        element={<StudentSignup />}
        />

        <Route
          path="/owner-login"
          element={<OwnerLogin />}
        />

        <Route
          path="/owner-signup"
          element={<OwnerSignup />}
        />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App