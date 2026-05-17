import { useParams, Outlet, Navigate } from 'react-router-dom'
import { getEvent } from '../data/events'
import EventHero from '../components/EventHero'
import EventSubNav from '../components/EventSubNav'

export default function EventDetail() {
  const { eventId } = useParams()
  const event = getEvent(eventId)

  if (!event) {
    return (
      <div className="max-w-container mx-auto px-5 py-16 text-center">
        <div className="text-muted text-xl">Event not found.</div>
      </div>
    )
  }

  return (
    <div>
      <EventHero event={event} />
      <EventSubNav eventId={eventId} />
      <Outlet context={event} />
    </div>
  )
}
