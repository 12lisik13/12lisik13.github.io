import { Route, Routes, HashRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactsPage from './pages/ContactsPage'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-bg text-text">
        {/* Background gradients/blobs */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-accent/25 via-accentSoft/10 to-accentGradientEnd/0 blur-3xl" />
          <div className="absolute -right-28 top-40 h-80 w-80 rounded-full bg-gradient-to-br from-accentGradientEnd/20 via-accent/10 to-accentSoft/0 blur-3xl" />
          <div className="absolute left-1/2 top-[70vh] h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-accentSoft/40 to-accentGradientEnd/0 blur-3xl" />
        </div>

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  )
}

