import React from 'react'
import Pointermove from './components/pointermove'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from './list'
import Avengers from './components/pointers'
import Short from './components/short'

const App = () => {
  return (
    <>
      
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<List/>}/>
            <Route path='pointer' element={<Pointermove/>}/>
            <Route path='avengers' element={<Avengers/>}/>
            <Route path='short' element={<Short/>}/>

         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App









