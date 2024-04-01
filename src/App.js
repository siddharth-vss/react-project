import React from 'react'
import Pointermove from './components/pointermove'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from './list'
import Avengers from './components/pointers'
import Sort from './components/sort'
import Prime from './components/primereact'
import DocumentDemo from './components/typer'
import Carousel from './components/componentsp/Carousel'
const App = () => {
  return (
    <>
      
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<List/>}/>
            <Route path='pointer' element={<Pointermove/>}/>
            <Route path='avengers' element={<Avengers/>}/>
            <Route path='short' element ={<Sort/>}/>
            <Route path='prime' element ={<Prime  Component={'Calendar'} />}/>
            <Route path='typer' element ={<DocumentDemo/>}/>
            <Route path='carousel' element={<Carousel />} />

         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App









