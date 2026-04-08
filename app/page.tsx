export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Discover Local Events Near You
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Find and book tickets for festivals, workshops, concerts, and more happening in your city
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/explore"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
          >
            Explore Events
          </a>
          <a
            href="/login"
            className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 font-semibold"
          >
            Sign In
          </a>
        </div>
      </div>
    </main>
  )
}
