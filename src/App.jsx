import React, { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("view"); // "view", "login", "manage"
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [mezzi, setMezzi] = useState([]);

  // Login
  const tryLogin = (e) => {
    e.preventDefault();
    if (password === "171073") {
      setAuthenticated(true);
      setMode("manage");
    } else {
      alert("Password sbagliata!");
    }
  };

  // Aggiungi mezzo
  const addMezzo = (e) => {
    e.preventDefault();
    const form = e.target;
    const nome = form.nome.value.trim();
    const anno = form.anno.value.trim();
    if (!nome || !anno) {
      alert("Compila tutti i campi");
      return;
    }
    setMezzi((old) => [...old, { id: Date.now(), nome, anno }]);
    form.reset();
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      {mode === "view" && (
        <div>
          <h1>Area pubblica di consultazione (in sviluppo)</h1>

          {mezzi.length === 0 ? (
            <p>Nessun mezzo disponibile</p>
          ) : (
            <ul>
              {mezzi.map((m) => (
                <li key={m.id}>{m.nome} - {m.anno}</li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setMode("login")}
            style={{ marginTop: 20, padding: "10px 15px", cursor: "pointer" }}
          >
            Accedi alla gestione
          </button>
        </div>
      )}

      {mode === "login" && !authenticated && (
        <form onSubmit={tryLogin} style={{ marginTop: 20 }}>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginLeft: 10 }}
            />
          </label>
          <button type="submit" style={{ marginLeft: 10, cursor: "pointer" }}>
            Entra
          </button>
          <button
            type="button"
            onClick={() => setMode("view")}
            style={{ marginLeft: 10, cursor: "pointer" }}
          >
            Annulla
          </button>
        </form>
      )}

      {mode === "manage" && authenticated && (
        <div style={{ marginTop: 20 }}>
          <h2>Gestione mezzi</h2>
          <form onSubmit={addMezzo}>
            <div>
              <label>
                Nome: <input name="nome" type="text" />
              </label>
            </div>
            <div>
              <label>
                Anno: <input name="anno" type="number" />
              </label>
            </div>
            <button type="submit" style={{ marginTop: 10, cursor: "pointer" }}>
              Aggiungi
            </button>
          </form>

          <h3 style={{ marginTop: 20 }}>Mezzi inseriti:</h3>
          {mezzi.length === 0 ? (
            <p>Nessun mezzo inserito</p>
          ) : (
            <ul>
              {mezzi.map((m) => (
                <li key={m.id}>{m.nome} - {m.anno}</li>
              ))}
            </ul>
          )}

          <button
            onClick={() => {
              setAuthenticated(false);
              setPassword("");
              setMode("view");
            }}
            style={{
              marginTop: 20,
              padding: "10px 15px",
              cursor: "pointer",
              backgroundColor: "#c0392b",
              color: "white",
              border: "none",
              borderRadius: 4,
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
