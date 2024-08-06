import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

function Nav() {
  return (
    <div className='flex bg-blue-950 place-content-between'>
      <Logo className='w-1/6'/>
      <NavBar className='w-5/6'/>
    </div>
  )
}

export default Nav