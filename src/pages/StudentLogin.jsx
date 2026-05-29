import { Link } from "react-router-dom"

function StudentLogin() {

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center mb-2">
          Student Login
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to your account
        </p>

        <form className="space-y-6">

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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-600 mt-8">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-blue-600 font-semibold"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>

  )
}

export default StudentLogin