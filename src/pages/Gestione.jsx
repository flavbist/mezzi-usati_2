import { useState } from 'react'

function Gestione({ onBack }) {
  const [password, setPassword] = useState('')
  const [accessoConsentito, setAccessoConsentito] = useState(false)

  const handleLogin = () => {
    if (password === '171073') setAccessoConsentito(true)
    else alert('Password errata')
  }

  if (!accessoConsentito) {
    return (
      <div className="p-4">
        <button onClick={onBack} className="mb-4 text-blue-500 underline">Torna indietro</button>
        <h2 className="text-xl font-bold mb-2">Accesso Gestione</h2>
        <input
          type="password"
          placeholder="Inserisci password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">
          Entra
        </button>
      </div>
    )
  }

  return (
    <div className="p-4">
      <button onClick={onBack} className="mb-4 text-blue-500 underline">Torna indietro</button>
      <h2 className="text-xl font-bold mb-2">Gestione Mezzi</h2>
      {/* Qui andrà la logica per inserire/modificare/eliminare i mezzi */}
    </div>
  )
}

export default Gestione
