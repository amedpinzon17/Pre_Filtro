import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import CreateRestaurantes from './components/restaurantes/createRestaurante'
import Create from './components/combos/create';

export const Prueba = () => {
  return (
    <Routes>
        <Route path="/holii" element={<CreateRestaurantes />}></Route>
        <Route path="/create" component={<Create />}></Route>
    </Routes>
  )
}
