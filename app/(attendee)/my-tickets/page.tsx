export default function MyTicketsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Tickets</h1>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-2">Tech Summit 2026</h3>
            <p className="text-gray-600 mb-4">Apr 15, 2026 • 10:00 AM</p>
            <div className="bg-gray-100 h-32 rounded flex items-center justify-center mb-4">
              <p className="text-gray-500">QR Code</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-semibold">✓ Confirmed</span>
              <button className="text-blue-600 hover:underline">View Details</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-gray-300">
            <h3 className="text-xl font-bold mb-2">Music Festival</h3>
            <p className="text-gray-600 mb-4">May 20, 2026 • 6:00 PM</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-semibold">Upcoming</span>
              <button className="text-blue-600 hover:underline">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
