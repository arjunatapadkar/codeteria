import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Cheatsheet from './pages/Cheatsheet'
import Playground from './pages/Playground'

const App = () => {
  return (
    <div className='  bg-[#6647DE] overflow-x-hidden scroll-smooth' >
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cheats' element={<Cheatsheet />} />
        {/* <Route path='/playground' element={<Playground />} /> */}
      </Routes>
    </div>
  )
}

export default App
