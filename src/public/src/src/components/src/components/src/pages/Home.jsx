import React from 'react'
import MapaMexico from '../components/MapaMexico'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Plataforma Jurídica Interactiva de México</h1>
        <p>Accede a las leyes estatales, federales e internacionales de manera intuitiva</p>
      </section>
      
      <section className="mapa-section">
        <h2>Mapa Jurídico de México</h2>
        <MapaMexico />
      </section>
    </div>
  )
}

export default Home
