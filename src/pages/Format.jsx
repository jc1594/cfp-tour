import { useOutletContext } from 'react-router-dom'
import FormatCard from '../components/FormatCard'

export default function Format() {
  const event = useOutletContext()

  if (!event.format.length) {
    return (
      <div className="max-w-container mx-auto px-5 py-16 text-center">
        <div className="text-muted text-xl">Format details coming soon.</div>
      </div>
    )
  }

  return (
    <div className="max-w-container mx-auto px-5 py-10">
      <h2 className="text-3xl font-extrabold uppercase tracking-wide border-b-[3px] border-accent pb-4 mb-8 text-primary">
        Format
      </h2>
      {event.format.map((section) => (
        <FormatCard key={section.title} section={section} />
      ))}
    </div>
  )
}
