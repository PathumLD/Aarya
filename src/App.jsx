import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AboutPage from './pages/About'
import HeroPage from './pages/Hero'
import Hero from './pages/Hero'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

import './firebase/Firebase'
import AddProjectPage from './pages/AddProjectPage'

function App() {

  return (
    <>
      <Header />
      {/* <HeroPage />
      <AboutPage /> */}
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/add" element={<AddProjectPage />} />
      </Routes>
    </>
  )
}

export default App
