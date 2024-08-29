import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Cheatsheet from './pages/Cheatsheet'

import Upcoming from './pages/upcoming'
import Navbar from './components/landing page/Navbar'
import ErrorPage from './pages/ErrorPage'
import InterviewPrep from './pages/InterviewPrep'
import MachineCoding from './pages/machineCoding'
import ChallengeDetail from './pages/ChallengeDetail'

const App = () => {
  return (
    <div className=' min-h-screen  overflow-x-hidden scroll-smooth' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cheats' element={<Cheatsheet />} />
        <Route path='/interview' element={<InterviewPrep />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/machinecoding' element={<MachineCoding />} />
        <Route path="/challenge/:id" element={<ChallengeDetail />} />

        {/* page not found */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </div>
  )
}

export default App
