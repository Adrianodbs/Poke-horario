import './header.css'
import pokebola from '../../assets/img/pokebola.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <img src={pokebola} alt="pokebola" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dicas">Dicas</Link>
        </li>
      </ul>
      <h4>Bem vindo treinador</h4>
    </header>
  )
}
