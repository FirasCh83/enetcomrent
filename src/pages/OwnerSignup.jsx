import { Link } from "react-router-dom"
import { useState } from "react"

function OwnerSignup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {

  e.preventDefault()

  try {

    const response = await fetch(
      "http://localhost:5000/owner/signup",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    )

    const data = await response.json()

console.log(data)

if (!response.ok) {

  alert(data.error)

  return

}

alert("Account created 😄")

  } catch (error) {

    console.log(error)

  }

}



  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Join Enetcomrent today 😄
        </p>

        <form
           onSubmit={handleSubmit}
           className="space-y-6"
          >

          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="w-full p-4 rounded-2xl border"
          />

          <button
            className="w-full bg-black text-white py-4 rounded-2xl font-semibold transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-600 mt-8">

          Already have an account?{" "}

          <Link
            to="/owner-login"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  )
}

export default OwnerSignup