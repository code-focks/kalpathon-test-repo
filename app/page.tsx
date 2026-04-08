export default function Home() {
  return (
    <main className="min-h-screen bg-surface overflow-hidden">
      {/* Nav */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between">
        <span className="font-editorial text-xl text-on_surface tracking-tight">LocalTix</span>
        <div className="flex items-center gap-6">
          <a href="/explore" className="text-on_surface_variant hover:text-on_surface text-sm font-medium transition-colors">Explore</a>
          <a href="/login" className="text-on_surface_variant hover:text-on_surface text-sm font-medium transition-colors">Sign In</a>
          <a href="/signup" className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-full">Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-8 lg:px-20">
        {/* Background accent blob */}
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ff6b00 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: editorial text block */}
          <div>
            <p className="label-micro text-primary mb-6">AI-Curated · Local · Immersive</p>
            <h1 className="font-editorial text-display-lg text-on_surface leading-[1.08] mb-6">
              Every great night<br />
              <em className="text-primary_container not-italic">begins here.</em>
            </h1>
            <p className="text-on_surface_variant text-lg leading-relaxed max-w-md mb-10">
              LocalTix surfaces events tuned to your taste — concerts, festivals, workshops, and experiences you won't find anywhere else.
            </p>
            <div className="flex items-center gap-4">
              <a href="/explore" className="btn-primary text-white font-semibold px-8 py-3.5 rounded-full text-sm">
                Explore Events
              </a>
              <a href="/signup" className="text-on_surface_variant hover:text-on_surface text-sm font-medium transition-colors flex items-center gap-2">
                Create account
                <span className="text-primary">→</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-14 flex gap-10">
              {[['2.4k+', 'Events listed'], ['18', 'Cities covered'], ['94%', 'Match accuracy']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-editorial text-3xl text-on_surface">{val}</p>
                  <p className="label-micro text-on_surface_variant mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: featured event card stack */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Back card */}
            <div className="absolute top-8 right-0 w-72 h-80 rounded-2xl bg-surface_container_low rotate-3 ghost-border" />
            {/* Front card */}
            <div className="absolute top-0 right-12 w-72 h-80 rounded-2xl bg-surface_container overflow-hidden card-event cursor-pointer">
              <div
                className="h-44 w-full"
                style={{ background: 'linear-gradient(135deg, #1c1b1b 0%, #2a1a0d 100%)' }}
              >
                <div className="h-full flex items-end p-4">
                  <span className="label-micro text-primary bg-surface_container_low px-2 py-1 rounded-full">
                    Trending · Music
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-editorial text-xl text-on_surface mb-1">Monsoon Beats Festival</h3>
                <p className="label-micro text-on_surface_variant">APR 20 · MUMBAI · ₹799</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">98% Match</span>
                  <button className="btn-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full">Book</button>
                </div>
              </div>
            </div>
            {/* AI chip floating */}
            <div className="absolute bottom-16 right-0 ai-pulse-chip active px-4 py-2 rounded-full text-xs text-primary font-medium">
              ✦ AI found 12 events for you
            </div>
          </div>
        </div>
      </section>

      {/* Category chips strip */}
      <section className="px-8 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <p className="label-micro text-on_surface_variant mb-6">Browse by category</p>
          <div className="flex flex-wrap gap-3">
            {['All', 'Music', 'Tech', 'Food', 'Comedy', 'Wellness', 'Art', 'Sports'].map((cat, i) => (
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
        </div>
      </section>

      {/* Featured section */}
      <section className="bg-surface_container_low px-8 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-editorial text-display-sm text-on_surface">
              Curated<br /><em className="text-on_surface_variant not-italic">for tonight</em>
            </h2>
            <a href="/explore" className="label-micro text-primary hover:text-primary_container transition-colors">
              View all →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Jazz Under the Stars', meta: 'APR 12 · DELHI · ₹499', tag: 'Jazz · Live', match: '96%' },
              { title: 'Indie Film Showcase', meta: 'APR 14 · BANGALORE · ₹299', tag: 'Film · Art', match: '91%' },
              { title: 'Tech Summit 2026', meta: 'APR 15 · PUNE · ₹999', tag: 'Tech · Networking', match: '88%' },
            ].map((event) => (
              <a key={event.title} href="/explore" className="card-event rounded-2xl overflow-hidden block group">
                <div
                  className="h-48"
                  style={{ background: 'linear-gradient(135deg, #1c1b1b 0%, #252220 100%)' }}
                >
                  <div className="h-full p-4 flex items-end">
                    <span className="label-micro text-on_surface_variant bg-surface_container px-2 py-1 rounded-full">
                      {event.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-editorial text-xl text-on_surface mb-1 group-hover:text-primary_container transition-colors">
                    {event.title}
                  </h3>
                  <p className="label-micro text-on_surface_variant mb-3">{event.meta}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{event.match} Match</span>
                    <span className="text-on_surface_variant text-xs">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-8 lg:px-20 py-24 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, #ff6b00 0%, transparent 60%)' }}
        />
        <p className="label-micro text-primary mb-4">Your concierge awaits</p>
        <h2 className="font-editorial text-display-md text-on_surface mb-6 mx-auto max-w-lg">
          Stop scrolling.<br />Start experiencing.
        </h2>
        <a href="/signup" className="btn-primary inline-block text-white font-semibold px-10 py-4 rounded-full text-sm">
          Create free account
        </a>
      </section>
    </main>
  )
}
