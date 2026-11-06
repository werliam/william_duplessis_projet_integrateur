import { useState } from 'react'
import TableauDeBord from './pages/TableauDeBord'
import ListeVille from './pages/ListeVille'
import Ville from './pages/Ville'
import Page404 from './pages/Page404'
import Layout from './components/Layout'

import { Route, Routes } from 'react-router'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TableauDeBord/>} />
          <Route path="listeVille" element={<ListeVille />} />
          <Route path="ville" element={<Ville />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
