import React from 'react'

function About() {
  return (
    <>
       <div className='flex mt-1 bg-blue-950 w-full'>
        <div className='w-2/6 p-11'>
          <h1 className='flex text-l w-2/6 m-auto mb-4'>About Us</h1>
          <p className='text-sm'>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of 
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className='text-sm'>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of 
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release.
          </p>
        </div>
        <div className='w-4/6'>
            <img className='w-full p-2 h-full' src="/src/assets/store.jpg" alt="" />
        </div>
       </div>
    </>
  )
}

export default About