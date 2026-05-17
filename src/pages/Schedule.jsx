import { useOutletContext } from 'react-router-dom'
import DayCard from '../components/DayCard'

export default function Schedule() {
  const event = useOutletContext()

  if (!event.schedule.length) {
    return (
      <div className="max-w-container mx-auto px-5 py-16 text-center">
        <div className="text-muted text-xl">Schedule coming soon.</div>
      </div>
    )
  }

  return (
    <div className="max-w-container mx-auto px-5 py-10">
      <h2 className="text-3xl font-extrabold uppercase tracking-wide border-b-[3px] border-accent pb-4 mb-8 text-primary">
        Schedule
      </h2>
      {event.schedule.map((day) => (
        <DayCard key={day.day} day={day} />
      ))}
    </div>
  )
}
