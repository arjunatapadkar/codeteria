import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Cheatsheet from './pages/Cheatsheet'

import Upcoming from './pages/upcoming'
import Navbar from './components/landing page/Navbar'
import ErrorPage from './pages/ErrorPage'
import InterviewPrep from './pages/InterviewPrep'

const App = () => {
  return (
    <div className='   overflow-x-hidden scroll-smooth' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cheats' element={<Cheatsheet />} />
        <Route path='/interview' element={<InterviewPrep />} />
        <Route path='/upcoming' element={<Upcoming />} />

        {/* page not found */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
