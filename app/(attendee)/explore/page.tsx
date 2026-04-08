export default function ExplorePage() {
  const categories = ['All', 'Music', 'Tech', 'Food', 'Comedy', 'Wellness', 'Art', 'Sports']

  const events = [
    { title: 'Monsoon Beats Festival', meta: 'APR 20 · MUMBAI', price: '₹799', tag: 'Music', match: '98%' },
    { title: 'Jazz Under the Stars', meta: 'APR 12 · DELHI', price: '₹499', tag: 'Jazz', match: '96%' },
    { title: 'Tech Summit 2026', meta: 'APR 15 · PUNE', price: '₹999', tag: 'Tech', match: '88%' },
    { title: 'Indie Film Showcase', meta: 'APR 14 · BANGALORE', price: '₹299', tag: 'Film', match: '91%' },
    { title: 'Street Food Carnival', meta: 'APR 22 · HYDERABAD', price: '₹149', tag: 'Food', match: '85%' },
    { title: 'Comedy Night Live', meta: 'APR 18 · CHENNAI', price: '₹349', tag: 'Comedy', match: '93%' },
  ]

  return (
    <div className="min-h-screen bg-surface">
      {/* Glass nav */}
      <nav className="glass-nav sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <a href="/" className="font-editorial text-xl text-on_surface tracking-tight">LocalTix</a>
        <div className="flex items-center gap-6">
          <a href="/my-tickets" className="text-on_surface_variant hover:text-on_surface text-sm transition-colors">My Tickets</a>
          <a href="/login" className="label-micro text-primary hover:text-primary_container transition-colors">Sign In</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="label-micro text-primary mb-3">AI-Curated</p>
          <h1 className="font-editorial text-display-md text-on_surface leading-tight">
            Explore Events
          </h1>
        </div>

        {/* Search bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search events, artists, venues..."
            className="input-editorial w-full max-w-xl px-5 py-3.5 text-sm"
          />
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`ai-pulse-chip px-5 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0 ? 'active text-primary' : 'text-on_surface_variant hover:text-on_surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Event grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-on_surface_variant text-sm">
                <span className="text-on_surface font-semibold">6</span> events near you
              </p>
              <div className="flex items-center gap-2">
                <span className="label-micro text-on_surface_variant">Sort:</span>
                <select className="input-editorial text-xs px-3 py-1.5 rounded-lg">
                  <option>Best Match</option>
                  <option>Date</option>
                  <option>Price</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {events.map((event) => (
                <a key={event.title} href="/events/1" className="card-event rounded-2xl overflow-hidden block group">
                  <div
                    className="h-40"
                    style={{ background: 'linear-gradient(135deg, #1c1b1b 0%, #252220 100%)' }}
                  >
                    <div className="h-full p-3 flex items-end">
                      <span className="label-micro text-on_surface_variant bg-surface_container px-2 py-1 rounded-full">
                        {event.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-editorial text-lg text-on_surface mb-1 group-hover:text-primary_container transition-colors leading-tight">
                      {event.title}
                    </h3>
                    <p className="label-micro text-on_surface_variant mb-3">{event.meta}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-on_surface font-semibold text-sm">{event.price}</span>
                      <span className="text-xs text-primary font-medium">{event.match} Match</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Filters sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-surface_container_low rounded-2xl p-5 sticky top-24">
              <p className="label-micro text-on_surface_variant mb-5">Filters</p>

              <div className="space-y-6">
                <div>
                  <label className="label-micro text-on_surface_variant block mb-3">Distance</label>
                  <input type="range" min="0" max="50" defaultValue="25" className="w-full accent-primary" />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-on_surface_variant">0 km</span>
                    <span className="text-xs text-primary font-medium">25 km</span>
                    <span className="text-xs text-on_surface_variant">50 km</span>
                  </div>
                </div>

                <div>
                  <label className="label-micro text-on_surface_variant block mb-3">Price range</label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Min" className="input-editorial w-full px-3 py-2 text-xs rounded-lg" />
                    <input type="text" placeholder="Max" className="input-editorial w-full px-3 py-2 text-xs rounded-lg" />
                  </div>
                </div>

                <div>
                  <label className="label-micro text-on_surface_variant block mb-3">Date</label>
                  <input type="date" className="input-editorial w-full px-3 py-2 text-xs" />
                </div>

                <button className="btn-primary w-full py-3 text-white font-semibold text-sm rounded-full">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="mt-16">
          <p className="label-micro text-on_surface_variant mb-4">Map view</p>
          <div
            className="w-full h-72 rounded-2xl bg-surface_container_low flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #1c1b1b 0%, #1a1917 100%)' }}
          >
            <div className="text-center">
              <p className="font-editorial text-xl text-on_surface mb-2">Interactive Map</p>
              <p className="label-micro text-on_surface_variant">Location services required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
