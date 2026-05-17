export default function SeriesHero() {
  return (
    <div
      className="relative overflow-hidden text-center px-5 py-20"
      style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', borderBottom: '4px solid #3498db' }}
    >
      <div className="relative z-10 max-w-container mx-auto">
        <div className="text-muted text-sm font-semibold uppercase tracking-widest mb-4">
          Disc Golf Events
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-primary mb-4">
          CFP Tour
        </h1>
        <p className="text-secondary text-xl font-light max-w-xl mx-auto">
          Multi-course tournaments across the country
        </p>
      </div>
    </div>
  )
}
