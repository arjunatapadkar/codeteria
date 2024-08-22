import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className=' w-full text-center text-md font-semibold text-slate-300 flex justify-center items-center gap-10'>
      <Link className='hover:text-white duration-150 border px-4 py-1 rounded-full' to={"/playground"}>Playground</Link>
      <Link className='hover:text-white duration-150 border px-4 py-1 rounded-full' to={"/cheats"}>Cheats</Link>
    </div>
  )
}

export default Navigation
