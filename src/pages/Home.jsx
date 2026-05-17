import SeriesHero from '../components/SeriesHero'
import EventCard from '../components/EventCard'
import PastEventCard from '../components/PastEventCard'
import { upcomingEvents, pastEvents } from '../data/events'

export default function Home() {
  return (
    <div>
      <SeriesHero />

      <div className="max-w-container mx-auto px-5 py-12">
        {upcomingEvents.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold uppercase tracking-wide border-b-[3px] border-accent pb-4 mb-8 text-primary">
              Upcoming Events
            </h2>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-extrabold uppercase tracking-wide border-b-[3px] border-accent pb-4 mb-8 text-primary">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pastEvents.map((event) => (
                <PastEventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
