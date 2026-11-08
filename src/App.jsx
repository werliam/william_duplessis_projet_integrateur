import { useState } from 'react'
import TableauDeBord from './pages/TableauDeBord'
import Ville from './pages/Ville'
import RechercheVille from './pages/RechercheVille'
import Page404 from './pages/Page404'
import Layout from './components/Layout'

import { Route, Routes } from 'react-router'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TableauDeBord/>} />
          <Route path="ville/:id" element={<Ville />} />
          <Route path="rechercheVille" element={<RechercheVille />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>

    </>
  )
}
export default App
