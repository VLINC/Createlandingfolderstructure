export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50" role="region" aria-labelledby="gallery-title">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="gallery-title" className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Before & After Transformations
        </h2>

        <div className="grid md:grid-cols-2 gap-10" role="list">
          {/* Item 1 - Kitchen */}
          <article className="rounded-[1.25rem] overflow-hidden shadow-lg bg-white" role="listitem">
            <div className="space-y-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1657213077302-79e89564a042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMG1lc3N5JTIwa2l0Y2hlbiUyMGJlZm9yZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc2NTgzMjE4OXww&ixlib=rb-4.1.0&q=80&w=1080" 
                  className="w-full h-64 object-cover" 
                  alt="Kitchen before professional cleaning - showing cluttered counters and dusty surfaces" 
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Before</span>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1724217600531-fdde7cad8651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFya2xpbmclMjBjbGVhbiUyMGtpdGNoZW4lMjB3aGl0ZSUyMGNvdW50ZXJzfGVufDF8fHx8MTc2NTgzMjE5MHww&ixlib=rb-4.1.0&q=80&w=1080" 
                  className="w-full h-64 object-cover" 
                  alt="Kitchen after professional cleaning - showing spotless counters and gleaming surfaces" 
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">After</span>
              </div>
            </div>
          </article>

          {/* Item 2 - Bedroom */}
          <article className="rounded-[1.25rem] overflow-hidden shadow-lg bg-white" role="listitem">
            <div className="space-y-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1612311533219-3687fcf1ee78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bnRpZHklMjBtZXNzeSUyMGJlZHJvb20lMjBjbHV0dGVyfGVufDF8fHx8MTc2NTgzMjE5MHww&ixlib=rb-4.1.0&q=80&w=1080" 
                  className="w-full h-64 object-cover" 
                  alt="Bedroom before professional cleaning - showing dusty furniture and untidy space" 
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Before</span>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1758523670739-0d26a3ee976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG9yZ2FuaXplZCUyMGJlZHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU4MzIxODh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  className="w-full h-64 object-cover" 
                  alt="Bedroom after professional cleaning - showing pristine furniture and organized space" 
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">After</span>
              </div>
            </div>
          </article>
        </div>

        <p className="text-center mt-6 text-gray-600">
          Real results delivered with care, detail, and professionalism.
        </p>
      </div>
    </section>
  );
}