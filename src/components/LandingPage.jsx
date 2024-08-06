import React from 'react'
import Header from './generic/Header'
import Section from './Section'
import Aside from './Aside'
function LandingPage() {
  return (
    <>
    <Header/>
    <div className='flex mt-1'>
        <Aside/>
        <Section/>
    </div>
    </>
    
  )
}

export default LandingPage