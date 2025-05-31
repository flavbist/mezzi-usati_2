function Consultazione({ onBack }) {
  return (
    <div className="p-4">
      <button onClick={onBack} className="mb-4 text-blue-500 underline">Torna indietro</button>
      <h2 className="text-xl font-bold mb-2">Elenco mezzi (Consultazione)</h2>
      {/* Qui andrà la logica per mostrare e filtrare i mezzi */}
    </div>
  )
}

export default Consultazione
