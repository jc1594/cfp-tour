import { Fragment } from 'react'
import CourseCard from './CourseCard'

function BreakNotice({ label }) {
  return (
    <div className="text-center py-5 px-6 bg-card-alt rounded-lg my-5 text-muted italic text-lg">
      — {label} —
    </div>
  )
}

export default function DayCard({ day }) {
  return (
    <div className="bg-card rounded-xl p-8 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-l-[5px] border-accent">
      <div className="text-accent font-bold text-2xl uppercase tracking-wide mb-1">
        Day {day.day}
      </div>
      <div className="text-secondary text-lg mb-1">{day.date}</div>
      <div className="text-muted text-sm mb-5">{day.label}</div>

      {day.scoring && (
        <span className="inline-block bg-badge text-white text-sm font-semibold px-5 py-2 rounded-full mb-5">
          Tournament Scoring
        </span>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {day.courses.map((course, i) => (
          <Fragment key={course.name}>
            <CourseCard course={course} />
            {day.breakAfterIndex === i && (
              <div className="col-span-full">
                <BreakNotice label="Lunch Break" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
