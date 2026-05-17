export default function PrizeCard({ card }) {
  return (
    <div className="bg-card rounded-xl p-8 text-center border-t-[5px] border-accent shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <h3 className="text-accent font-bold text-2xl mb-6">{card.title}</h3>
      <div className="space-y-3">
        {card.items.map((item) => (
          <div key={item} className="bg-card-alt px-4 py-3 rounded-lg text-primary text-base">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
