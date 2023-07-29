import './header.css'
import pokebola from '../../assets/img/pokebola.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [activeLink, setActiveLink] = useState('home')

  const handleLinkClick = link => {
    setActiveLink(link)
  }
  return (
    <header>
      <img src={pokebola} alt="pokebola" />
      <ul className="listMenu">
        <li>
          <Link
            to="/"
            className={activeLink === 'home' ? 'active' : ''}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/dicas"
            className={activeLink === 'dicas' ? 'active' : ''}
            onClick={() => handleLinkClick('dicas')}
          >
            Dicas
          </Link>
        </li>
      </ul>
      <h4>Bem vindo treinador</h4>
    </header>
  )
}
