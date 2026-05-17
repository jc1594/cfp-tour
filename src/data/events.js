export const events = [
  {
    id: 'cfp-invitational-2025',
    name: 'CFP Invitational',
    edition: '1st Annual',
    status: 'past',
    dates: { display: '2025', start: '2025-03-01', end: '2025-03-02' },
    location: 'Western North Carolina',
    registration: null,
    results: null,
    schedule: [],
    format: [],
    prizes: null,
  },
  {
    id: 'cfp-invitational-2026',
    name: 'CFP Invitational',
    edition: '2nd Annual',
    status: 'past',
    dates: { display: 'March 13–15, 2026', start: '2026-03-13', end: '2026-03-15' },
    location: 'Western North Carolina',
    tagline: '101 Tournament Holes',
    description: "North Carolina's Premier Multi-Course Tournament",
    quote: {
      text: "You've all probably had people in your life tell you you can't play 100 holes of disc golf in a day. This is your chance to prove them wrong.",
      author: 'Cameron F. Pierce',
    },
    registration: null,
    results: null,
    schedule: [
      {
        day: 1,
        date: 'Friday, March 13, 2026',
        label: 'Practice Day (Optional)',
        scoring: false,
        courses: [
          {
            name: 'Bethel Methodist',
            holes: 12,
            par: 36,
            distance: '3,089 ft',
            tags: ['Rolling elevation', 'Wooded'],
            udiscId: 6444,
          },
        ],
      },
      {
        day: 2,
        date: 'Saturday, March 14, 2026',
        label: 'Tournament Day — 101 Holes',
        scoring: true,
        breakAfterIndex: 2,
        courses: [
          {
            name: 'Crossnore',
            holes: 9,
            par: 27,
            distance: '1,907 ft',
            tags: ['Elevation changes', 'Beginner-friendly'],
            udiscId: 41013,
          },
          {
            name: 'Jack Warren Park',
            holes: 18,
            par: 54,
            distance: '2,312 ft',
            tags: ['Minimal elevation', 'Pitch-and-putt style'],
            udiscId: 44441,
          },
          {
            name: 'Sunrise',
            holes: 18,
            par: 55,
            distance: '4,008 ft',
            tags: ['Elevation changes', 'Wooded'],
            udiscId: 22013,
          },
          {
            name: 'Davie',
            holes: 20,
            par: 70,
            distance: '6,941 ft',
            tags: ['Rolling elevation', 'Wooded'],
            udiscId: 27728,
          },
          {
            name: 'Little Davie',
            holes: 18,
            par: 64,
            distance: '5,632 ft',
            tags: ['Minimal elevation', 'Mostly wooded'],
            udiscId: 44244,
          },
          {
            name: 'Patriot',
            holes: 18,
            statsOverride: '18 holes · Red: Par 54, 5,040 ft / Blue: Par 60, 7,061 ft',
            tags: ['Rolling elevation'],
            udiscId: 5793,
          },
        ],
      },
      {
        day: 3,
        date: 'Sunday, March 15, 2026',
        label: 'Recovery Day (Optional)',
        scoring: false,
        courses: [
          {
            name: 'Neatman Creek',
            holes: 18,
            par: 61,
            distance: '5,670 ft',
            tags: ['Extreme elevation', 'Private course', '4.8/5 rating', 'Top-20 worldwide'],
            udiscId: 30855,
          },
        ],
      },
    ],
    format: [
      {
        title: 'Warmup',
        note: null,
        items: [{ course: 'Crossnore', holes: 9, format: 'Practice Round' }],
      },
      {
        title: 'Individual Competition',
        note: null,
        items: [
          { course: 'Jack Warren Park', holes: 18, format: 'Match Play with Ace Pot' },
          { course: 'Sunrise', holes: 18, format: 'Stroke Play' },
        ],
      },
      {
        title: 'Team Competition',
        note: 'Teams are set based on individual standings',
        items: [
          { course: 'Davie', holes: 20, format: 'Best Disc' },
          { course: 'Little Davie', holes: 18, format: 'Stroke Play' },
        ],
      },
      {
        title: 'Final Round',
        note: null,
        items: [
          {
            course: 'Patriot',
            holes: 18,
            format: 'TBD — Best Disc from long tees or Stroke Play from short tees',
          },
        ],
      },
    ],
    prizes: {
      poolDescription: 'Premium and special edition CFP stamped discs',
      cards: [
        {
          title: 'Individual Prizes',
          items: [
            '1st Place — First pick from prize pool',
            '2nd Place — Second pick from prize pool',
            '3rd Place — Third pick from prize pool',
          ],
        },
        {
          title: 'Team Prize',
          items: ['Winning Team: Custom mini markers for each team member'],
        },
        {
          title: 'Ace Pots',
          items: ['Jack Warren Park ace pot', 'Overall ace pot'],
        },
      ],
    },
  },
  {
    id: 'northwoods-classic-2026',
    name: 'Northwoods Classic',
    edition: null,
    status: 'upcoming',
    dates: { display: 'August 29–30, 2026', start: '2026-08-29', end: '2026-08-30' },
    location: 'Madison, WI',
    registration: null,
    results: null,
    schedule: [],
    format: [],
    prizes: null,
  },
]

export const upcomingEvents = events
  .filter((e) => e.status === 'upcoming')
  .sort((a, b) => new Date(a.dates.start) - new Date(b.dates.start))

export const pastEvents = events
  .filter((e) => e.status === 'past')
  .sort((a, b) => new Date(b.dates.start) - new Date(a.dates.start))

export const getEvent = (id) => events.find((e) => e.id === id)
