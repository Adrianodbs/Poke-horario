import './header.css'
import pokebola from '../../assets/img/pokebola.png'

export default function Header() {
  return (
    <header>
      <img src={pokebola} alt="pokebola" />
      <ul>
        <li>Home</li>
        <li>Dicas</li>
      </ul>
      <h4>Bem vindo treinador</h4>
    </header>
  )
}
