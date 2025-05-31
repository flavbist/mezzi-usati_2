import { useState } from 'react'
import Home from './pages/Home'
import Consultazione from './pages/Consultazione'
import Gestione from './pages/Gestione'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'consultazione') return <Consultazione onBack={() => setPage('home')} />
  if (page === 'gestione') return <Gestione onBack={() => setPage('home')} />

  return <Home onSelect={setPage} />
}

export default App
