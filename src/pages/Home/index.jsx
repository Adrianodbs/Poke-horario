import Input from '../../components/Input'
import './home.css'

export default function Home() {
  return (
    <div className="container">
      <form className="form">
        <Input title="Boss de Kanto" />
        <Input title="Boss de Johto" />
        <Input title="Boss de Hoenn" />
        <Input title="Boss de Sinnoh" />
      </form>
      <form className="form">
        <Input title="Dig de Kanto" />
        <Input title="Dig de Johto" />
      </form>
    </div>
  )
}
