import React from 'react'
import Navbar from '../components/core/Navbar'
import Hero from '../components/landing page/Hero'
import Cheats from '../components/landing page/Cheats'
import Cheatsheets from '../components/landing page/Cheatsheets'
import PuzzleBoard from '../components/landing page/PuzzleBoard'
import Footer from '../components/core/Footer'

const Homepage = () => {
  return (
    <div className='px-10 lg:px-36 space-y-9 flex flex-col items-center  w-full overflow-hidden'>
        {/* <Navbar /> */}
        <Hero />
        <Cheats />
        <div className="divider divider-accent text-3xl pt-24 text-white">Features</div>
        <Cheatsheets />
        <PuzzleBoard />
        <Footer />
    </div>
  )
}

export default Homepage
