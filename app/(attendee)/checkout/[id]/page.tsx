export default function CheckoutPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl">
          {/* Checkout form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="border-t border-b border-gray-300 py-4 mb-6">
              <div className="flex justify-between mb-2">
                <span>Event Title</span>
                <span>1x Ticket</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹299</span>
              </div>
            </div>

            <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg">
              Proceed to Payment
            </button>
          </div>

          {/* Order details */}
          <div className="bg-white p-6 rounded-lg h-fit">
            <h3 className="text-xl font-bold mb-4">Order Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Ticket Type:</strong> General</p>
              <p><strong>Quantity:</strong> 1</p>
              <p><strong>Event Date:</strong> Apr 15, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
