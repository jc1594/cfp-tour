import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-card shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
      <div className="max-w-container mx-auto px-5 py-4 flex items-center">
        <Link
          to="/"
          className="text-primary font-extrabold text-xl uppercase tracking-widest hover:text-accent transition-colors"
        >
          CFP Tour
        </Link>
      </div>
    </header>
  )
}
