import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div>
        <ul className='flex gap-5 mt-2 mr-5'>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Order">Order</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
        </ul>
    </div>
  )
}

export default NavBar