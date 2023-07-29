import Input from '../../components/Input'
import './home.css'

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <h3>Tempo de Cooldown do Boss (12dias)</h3>
        <form className="form">
          <Input title="Boss de Kanto" />
          <Input title="Boss de Johto" />
          <Input title="Boss de Hoenn" />
          <Input title="Boss de Sinnoh" />
        </form>
      </div>

      <div className="content">
        <h3>Tempo de Cooldown do Dig (3dias)</h3>
        <form className="form">
          <Input title="Dig de Kanto" />
          <Input title="Dig de Johto" />
        </form>
      </div>

      <div className="content">
        <h3>Tempo de Cooldown da Battle Tower (4dias)</h3>
        <form className="form">
          <Input title="Battle Tower" />
        </form>
      </div>
    </div>
  )
}
