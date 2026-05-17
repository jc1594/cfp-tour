import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EventDetail from './pages/EventDetail'
import Schedule from './pages/Schedule'
import Format from './pages/Format'
import Prizes from './pages/Prizes'
import Registration from './pages/Registration'

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventId" element={<EventDetail />}>
          <Route index element={<Navigate to="schedule" replace />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="format" element={<Format />} />
          <Route path="prizes" element={<Prizes />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
