import { NavLink } from 'react-router-dom'

const tabs = [
  { label: 'Schedule', path: 'schedule' },
  { label: 'Format', path: 'format' },
  { label: 'Prizes', path: 'prizes' },
  { label: 'Registration', path: 'registration' },
]

export default function EventSubNav({ eventId }) {
  return (
    <nav className="bg-card sticky top-0 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
      <div className="max-w-container mx-auto flex flex-wrap justify-center">
        {tabs.map(({ label, path }) => (
          <NavLink
            key={path}
            to={`/events/${eventId}/${path}`}
            className={({ isActive }) =>
              `px-7 py-5 font-semibold text-base uppercase tracking-wide transition-all duration-300 border-b-[3px] ${
                isActive
                  ? 'bg-card-alt border-accent text-primary'
                  : 'border-transparent text-primary hover:bg-card-alt hover:border-accent'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
