function Home({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100">
      <h1 className="text-3xl font-bold">Gestione Mezzi</h1>
      <button onClick={() => onSelect('consultazione')} className="bg-blue-500 text-white px-4 py-2 rounded">
        Consultazione
      </button>
      <button onClick={() => onSelect('gestione')} className="bg-green-500 text-white px-4 py-2 rounded">
        Gestione
      </button>
    </div>
  )
}

export default Home
