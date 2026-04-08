export default function EventDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          {/* Event header */}
          <div className="bg-gray-200 h-96 rounded-lg mb-8 flex items-center justify-center">
            <p className="text-gray-500">Event image placeholder</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event details */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">Event Title</h1>
              <p className="text-gray-600 mb-4">Event date and time</p>
              <p className="text-lg text-gray-700 mb-6">Event description goes here</p>

              <h3 className="text-2xl font-bold mb-4">Venue</h3>
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-8">
                <p className="text-gray-500">Map placeholder</p>
              </div>
            </div>

            {/* Ticket booking sidebar */}
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-2xl font-bold mb-4">Tickets</h3>
              <div className="space-y-4">
                <div className="border border-gray-300 p-4 rounded-lg">
                  <p className="font-semibold">Early Bird</p>
                  <p className="text-gray-600">₹199</p>
                  <button className="w-full mt-2 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Select
                  </button>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg">
                  <p className="font-semibold">General</p>
                  <p className="text-gray-600">₹299</p>
                  <button className="w-full mt-2 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
