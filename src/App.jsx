import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'


import Upcoming from './pages/upcoming'
import Navbar from './components/landing page/Navbar'
import ErrorPage from './pages/ErrorPage'

import InterviewPrep from './pages/interview/InterviewPrep'
import Cheatsheet from './pages/cheatsheet/Cheatsheet'
import MachineCoding from './pages/interview/machineCoding'
import ChallengeDetail from "./pages/interview/ChallengeDetail"
import { useAPI } from './context/apiContext'

const App = () => {

  const {dark} = useAPI();

  return (
    <div className={`${dark? "bg-[#0F111D] text-white" :""} min-h-screen  overflow-x-hidden scroll-smooth`} >
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage  />} />
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
