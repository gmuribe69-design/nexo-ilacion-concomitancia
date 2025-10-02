import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Contacto from './pages/Contacto'
import Acceso from './pages/Acceso'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acceso" element={<Acceso />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
