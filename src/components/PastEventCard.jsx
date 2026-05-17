import { Link } from 'react-router-dom'

export default function PastEventCard({ event }) {
  const title = event.edition ? `${event.edition} ${event.name}` : event.name

  return (
    <div className="bg-card rounded-xl p-6 border-l-[4px] border-card-alt hover:border-accent transition-colors duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
      <div className="text-muted text-xs font-semibold uppercase tracking-widest mb-1">Past Event</div>
      <h3 className="text-xl font-bold text-primary mb-1">{title}</h3>
      <div className="text-secondary text-sm mb-1">{event.dates.display}</div>
      <div className="text-muted text-sm mb-4">{event.location}</div>
      <Link
        to={`/events/${event.id}`}
        className="text-accent font-semibold text-sm hover:text-blue-400 transition-colors"
      >
        View Details →
      </Link>
    </div>
  )
}
