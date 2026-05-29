import { Link } from "react-router-dom"

function OwnerSignup() {

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Join Enetcomrent today 😄
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full name"
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="password"
            placeholder="Password"
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
            to="/login"
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