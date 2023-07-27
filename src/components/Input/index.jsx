import './input.css'

export default function Input({ title, respawn }) {
  return (
    <div className="data">
      <label className="label">
        <span>{title}</span>
        <input type="date" />
      </label>
      <h4>
        Respawn: <p>Dia {respawn}</p>
      </h4>
    </div>
  )
}
