import { useOutletContext } from 'react-router-dom'

export default function Registration() {
  const event = useOutletContext()

  if (event.status === 'past') {
    return (
      <div className="max-w-container mx-auto px-5 py-16 text-center">
        <div className="bg-card rounded-xl p-10 max-w-lg mx-auto">
          <div className="text-4xl mb-4">🏁</div>
          <h3 className="text-2xl font-bold text-primary mb-3">Registration Closed</h3>
          <p className="text-muted">This event has already taken place.</p>
          {event.results && (
            <div className="mt-6 text-secondary">Results posted below.</div>
          )}
        </div>
      </div>
    )
  }

  if (!event.registration) {
    return (
      <div className="max-w-container mx-auto px-5 py-16 text-center">
        <div className="bg-card rounded-xl p-10 max-w-lg mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-3">Registration</h3>
          <p className="text-muted">Registration details coming soon. Check back closer to the event.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-container mx-auto px-5 py-10">
      <h2 className="text-3xl font-extrabold uppercase tracking-wide border-b-[3px] border-accent pb-4 mb-8 text-primary">
        Registration
      </h2>
      <div className="bg-card rounded-xl p-10 max-w-lg">
        <p className="text-secondary mb-6">
          Registration is open. Click below to sign up for{' '}
          {event.edition ? `the ${event.edition} ${event.name}` : event.name}.
        </p>
        <a
          href={event.registration.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors duration-200"
        >
          Register Now
        </a>
      </div>
    </div>
  )
}
