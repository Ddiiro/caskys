import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

function Nav() {
  return (
    <div className='flex col-blue'>
      <Logo className='w-1/6'/>
      <NavBar className='w-5/6'/>
    </div>
  )
}

export default Nav