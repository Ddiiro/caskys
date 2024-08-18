import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='flex bg-blue-950 place-content-between'>
      <Link to="/"><Logo className='w-1/6'/></Link>
      
      <NavBar className='w-5/6'/>
    </div>
  )
}

export default Nav