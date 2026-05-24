import { useParams } from "react-router-dom"

function ApartmentDetails() {
  const { id } = useParams()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-bold mb-4">
        Apartment Details
      </h1>

      <p className="text-xl text-gray-600">
        Apartment ID: {id}
      </p>

    </div>
  )
}

export default ApartmentDetails