import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">Nexo Ilación Concomitancia</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/acceso">Acceso</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
