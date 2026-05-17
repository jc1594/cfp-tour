import { Link } from 'react-router-dom'

export default function EventCard({ event }) {
  const title = event.edition ? `${event.edition} ${event.name}` : event.name

  return (
    <div className="bg-card rounded-xl p-8 border-2 border-accent shadow-[0_4px_30px_rgba(52,152,219,0.2)] max-w-2xl mx-auto">
      <div className="text-muted text-xs font-semibold uppercase tracking-widest mb-2">
        Upcoming Event
      </div>
      <h2 className="text-3xl font-extrabold text-primary mb-2">{title}</h2>
      {event.tagline && (
        <div className="text-accent font-semibold mb-3">{event.tagline}</div>
      )}
      <div className="text-secondary text-lg mb-1">{event.dates.display}</div>
      <div className="text-muted mb-6">{event.location}</div>
      <div className="flex flex-wrap gap-3">
        <Link
          to={`/events/${event.id}`}
          className="bg-card-alt text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors duration-200"
        >
          View Details
        </Link>
        {event.registration && (
          <a
            href={event.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors duration-200"
          >
            Register
          </a>
        )}
      </div>
    </div>
  )
}
