import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AboutPage from './pages/About'
import HeroPage from './pages/Hero'
import Hero from './pages/Hero'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      {/* <HeroPage />
      <AboutPage /> */}
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
