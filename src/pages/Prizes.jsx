import { useOutletContext } from 'react-router-dom'
import PrizeCard from '../components/PrizeCard'

export default function Prizes() {
  const event = useOutletContext()

  if (!event.prizes) {
    return (
      <div className="max-w-container mx-auto px-5 py-16 text-center">
        <div className="text-muted text-xl">Prize details coming soon.</div>
      </div>
    )
  }

  return (
    <div className="max-w-container mx-auto px-5 py-10">
      <h2 className="text-3xl font-extrabold uppercase tracking-wide border-b-[3px] border-accent pb-4 mb-6 text-primary">
        Prizes
      </h2>
      <div
        className="rounded-xl p-6 mb-8 text-center text-white text-lg font-semibold"
        style={{ background: 'linear-gradient(135deg, #3498db, #2980b9)' }}
      >
        Prize Pool: {event.prizes.poolDescription}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {event.prizes.cards.map((card) => (
          <PrizeCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  )
}
