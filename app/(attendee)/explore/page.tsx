export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Explore Events Near You</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map placeholder */}
          <div className="lg:col-span-2 bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Map view coming soon</p>
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>All Events</option>
                <option>Fest</option>
                <option>Workshop</option>
                <option>Comedy</option>
                <option>Music</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">Distance</label>
              <input type="range" min="0" max="50" className="w-full" />
            </div>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
