import React from 'react'

function Button({buttonName, handleClick}) {
  return (
    <button 
        className='bg-indigo-600 w-2/6 rounded-2xl m-auto p-2'
        onClick={handleClick}
    >

        {buttonName}

    </button>
  )
}

export default Button