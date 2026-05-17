export default function FormatCard({ section }) {
  return (
    <div className="bg-card rounded-xl p-8 mb-6 border-l-[5px] border-accent shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="text-accent font-bold text-2xl mb-4">{section.title}</div>
      {section.note && (
        <div className="text-muted text-sm italic mb-4">{section.note}</div>
      )}
      <div className="space-y-3">
        {section.items.map((item) => (
          <div key={item.course} className="text-secondary leading-relaxed">
            <span className="text-primary font-semibold">{item.course}</span>
            <span className="text-muted mx-2">·</span>
            <span>{item.holes} holes</span>
            <span className="text-muted mx-2">·</span>
            <span>{item.format}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
