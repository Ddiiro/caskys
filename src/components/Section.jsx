import React from 'react'

function Section() {
  return (
    <>
        <div className='flex bg-blue-950 w-full'>
            <div className='flex flex-col w-5/6 place-content-between m-20 gap-10 p-10'>
                <h1 className='text-5xl'>Sign in</h1>
                <div>
                    <label htmlFor="">Email</label>
                    <input className='w-full h-12 mt-5 rounded-2xl' type="email" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input className='w-full h-12 mt-5 rounded-2xl' type="password" />
                </div>
                <button className='bg-indigo-600 w-2/6 rounded-2xl m-auto p-2'>Login</button>
            </div>
        </div>
        
    </>
    
  )
}

export default Section