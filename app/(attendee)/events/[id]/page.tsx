export default function EventDetailsPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Glass nav */}
      <nav className="glass-nav sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <a href="/" className="font-editorial text-xl text-on_surface tracking-tight">LocalTix</a>
        <a href="/explore" className="label-micro text-on_surface_variant hover:text-on_surface transition-colors">← Back to Explore</a>
      </nav>

      {/* Hero image area */}
      <div className="relative h-[55vh] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #1a1410 0%, #0d0d0d 100%)' }}
        />
        {/* Gradient overlay bottom */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, #131313 100%)' }}
        />
        {/* Floating tags */}
        <div className="absolute top-6 left-8 flex gap-2">
          <span className="ai-pulse-chip active px-3 py-1.5 rounded-full label-micro text-primary">✦ 96% Match</span>
          <span className="label-micro text-on_surface_variant bg-surface_container_low px-3 py-1.5 rounded-full">Music · Live</span>
        </div>
        {/* Overlap title */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-20 pb-8">
          <p className="label-micro text-primary mb-2">APR 20, 2026 · 7:00 PM</p>
          <h1 className="font-editorial text-display-md text-on_surface leading-tight max-w-2xl">
            Monsoon Beats Festival
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Meta row */}
            <div className="flex flex-wrap gap-6">
              {[
                ['Venue', 'Bandra Amphitheatre, Mumbai'],
                ['Duration', '4 hours'],
                ['Audience', '2,000 expected'],
              ].map(([key, val]) => (
                <div key={key}>
                  <p className="label-micro text-on_surface_variant mb-1">{key}</p>
                  <p className="text-on_surface text-sm font-medium">{val}</p>
                </div>
              ))}
            </div>

            {/* Divider via spacing — no line */}
            <div>
              <h2 className="font-editorial text-2xl text-on_surface mb-4">About the event</h2>
              <p className="text-on_surface_variant leading-relaxed text-base">
                Monsoon Beats is an immersive open-air music festival celebrating the vibrancy of
                Indian contemporary music. Set against the backdrop of Mumbai's iconic skyline,
                the night features curated sets from indie artists, live percussion, and ambient
                light installations that pulse with the rhythm of the crowd.
              </p>
              <p className="text-on_surface_variant leading-relaxed text-base mt-4">
                Doors open at 6:30 PM. Food and beverages available on site. Rain-or-shine event.
              </p>
            </div>

            {/* Artists */}
            <div>
              <h2 className="font-editorial text-2xl text-on_surface mb-5">Performing Artists</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Prateek Kuhad', 'When Chai Met Toast', 'Naezy', 'Ritviz', 'Seedhe Maut'].map((artist) => (
                  <div key={artist} className="bg-surface_container_low rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-surface_container_high mb-2" />
                    <p className="text-on_surface text-sm font-medium">{artist}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div>
              <h2 className="font-editorial text-2xl text-on_surface mb-4">Venue</h2>
              <div
                className="w-full h-48 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1c1b1b 0%, #1a1917 100%)' }}
              >
                <div className="text-center">
                  <p className="text-on_surface text-sm font-medium">Bandra Amphitheatre</p>
                  <p className="label-micro text-on_surface_variant mt-1">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-surface_container_low rounded-2xl p-6 sticky top-24">
              <p className="label-micro text-on_surface_variant mb-4">Select tickets</p>
              <div className="space-y-3">
                {[
                  { type: 'Early Bird', price: '₹499', note: 'Limited' },
                  { type: 'General Admission', price: '₹799', note: '' },
                  { type: 'VIP Lounge', price: '₹1,999', note: 'Includes F&B' },
                ].map((ticket) => (
                  <div
                    key={ticket.type}
                    className="bg-surface_container rounded-xl p-4 cursor-pointer hover:bg-surface_container_high transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-on_surface text-sm font-medium">{ticket.type}</p>
                        {ticket.note && (
                          <p className="label-micro text-primary mt-0.5">{ticket.note}</p>
                        )}
                      </div>
                      <p className="font-editorial text-lg text-on_surface">{ticket.price}</p>
                    </div>
                    <button className="btn-primary w-full mt-3 py-2.5 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Select
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a href="/checkout/1" className="btn-primary block text-center py-3.5 text-white font-semibold text-sm rounded-full">
                  Proceed to Checkout
                </a>
                <p className="label-micro text-on_surface_variant text-center mt-3">
                  Secure payment · Instant confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
