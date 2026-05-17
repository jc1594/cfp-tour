export default function EventHero({ event }) {
  const title = event.edition ? `${event.edition} ${event.name}` : event.name

  return (
    <div
      className="relative overflow-hidden text-center px-5 py-20"
      style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', borderBottom: '4px solid #3498db' }}
    >
      <div className="relative z-10 max-w-container mx-auto">
        {event.tagline && (
          <div className="text-muted text-sm font-semibold uppercase tracking-widest mb-3">
            {event.tagline}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-3 text-primary">
          {title}
        </h1>
        {event.description && (
          <div className="text-primary text-lg font-light mb-4">{event.description}</div>
        )}
        <div className="inline-block bg-accent px-10 py-3 rounded-full text-lg font-bold mt-4 shadow-[0_4px_15px_rgba(52,152,219,0.4)]">
          {event.dates.display} · {event.location}
        </div>
        {event.quote && (
          <blockquote className="mt-8 max-w-2xl mx-auto text-secondary italic text-base leading-relaxed border-l-4 border-accent pl-4 text-left">
            "{event.quote.text}"
            <footer className="mt-2 text-muted not-italic text-sm">— {event.quote.author}</footer>
          </blockquote>
        )}
      </div>
    </div>
  )
}
