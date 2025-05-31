import React, { useState } from "react";

export default function App() {
  // Stati principali
  const [mode, setMode] = useState("view"); // "view" o "manage"
  const [passwordInput, setPasswordInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Stato mezzi (semplice array di oggetti)
  const [mezzi, setMezzi] = useState([]);

  // Controlla password
  function handleLogin(e) {
    e.preventDefault();
    if (passwordInput === "171073") {
      setIsAuthenticated(true);
      setMode("manage");
    } else {
      alert("Password errata!");
    }
  }

  // Aggiungi mezzo nuovo
  function handleAddMezzo(e) {
    e.preventDefault();
    const form = e.target;
    const nome = form.nome.value.trim();
    const anno = form.anno.value.trim();

    if (!nome || !anno) {
      alert("Compila tutti i campi!");
      return;
    }

    setMezzi([...mezzi, { id: Date.now(), nome, anno }]);
    form.reset();
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial" }}>
      {mode === "view" && (
        <div>
          <h1>Area pubblica di consultazione (in sviluppo)</h1>
          {mezzi.length === 0 ? (
            <p>Nessun mezzo disponibile</p>
          ) : (
            <ul>
              {mezzi.map((mezzo) => (
                <li key={mezzo.id}>
                  {mezzo.nome} - {mezzo.anno}
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setMode("login")}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Accedi alla gestione
          </button>
        </div>
      )}

      {mode === "login" && !isAuthenticated && (
        <form onSubmit={handleLogin} style={{ marginTop: 20 }}>
          <label>
            Inserisci password:
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{ marginLeft: 10, padding: 5 }}
            />
          </label>
          <button
            type="submit"
            style=
