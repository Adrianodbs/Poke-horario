import { useState, useEffect } from 'react'
import { format, addDays, parseISO } from 'date-fns'
import './input.css'

export default function Input({ title }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [nextRespawnDate, setNextRespawnDate] = useState('')

  useEffect(() => {
    // Recuperar a data salva no Local Storage ao montar o componente
    const storedDate = localStorage.getItem(title)
    if (storedDate) {
      setSelectedDate(storedDate)
    }
  }, [title])

  useEffect(() => {
    if (selectedDate) {
      // Armazenar a nova data no Local Storage sempre que houver uma atualização
      localStorage.setItem(title, selectedDate)

      const initialDate = parseISO(selectedDate)
      const respawnInterval = title.includes('Boss') ? 12 : 3
      const nextDate = addDays(initialDate, respawnInterval)
      setNextRespawnDate(format(nextDate, 'dd-MM-yyyy'))
    } else {
      setNextRespawnDate('')
    }
  }, [selectedDate, title])

  return (
    <div className="data">
      <label className="label">
        <span>{title}</span>
        <input
          type="date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
      </label>
      {nextRespawnDate ? (
        <h4>
          <span className="respawn-title">Respawn: </span>
          <p>Dia {nextRespawnDate}</p>
        </h4>
      ) : (
        <h4>Nenhuma data cadastrada</h4>
      )}
    </div>
  )
}
