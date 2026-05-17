export default function CourseCard({ course }) {
  const stats = course.statsOverride
    ? course.statsOverride
    : `${course.holes} holes · Par ${course.par} · ${course.distance}`

  return (
    <div className="bg-card-alt rounded-lg p-6 hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(52,152,219,0.3)] transition-all duration-300">
      <div className="text-accent font-bold text-xl mb-3">{course.name}</div>
      <div className="text-secondary text-sm leading-relaxed mb-4">{stats}</div>
      {course.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="bg-card text-muted text-xs px-2 py-1 rounded-full border border-card-alt"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {course.udiscId && (
        <a
          href={`https://app.udisc.com/applink/course/${course.udiscId}?tab=info`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold text-sm hover:text-blue-400 transition-colors"
        >
          View on UDisc →
        </a>
      )}
    </div>
  )
}
