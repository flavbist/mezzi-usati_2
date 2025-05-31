import React, { useState } from 'react';

const Gestione = () => {
  const [autenticato, setAutenticato] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "171073") {
      setAutenticato(true);
    } else {
      alert("Password errata");
    }
  };

  if (!autenticato) {
    return (
      <div>
        <h2>Area Riservata</h2>
        <input
          type="password"
          placeholder="Inserisci password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entra</button>
      </div>
    );
  }

  return <div>Gestione mezzi (in sviluppo)</div>;
};

export default Gestione;