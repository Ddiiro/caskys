import React, { useState } from 'react'
import SigninInput from './generic/SigninInput'

function Section() {
    const [inputValue , setInputValue] = useState('')
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const [pass , setPass] = useState('')
    const handlePasword = (e) => {
        setPass(e.target.value);
    }

    let email = inputValue;
    let password = pass;
    const click = () => {
        if(inputValue == '') {
            alert('Email is required')
        } else if(pass == '') {
            alert('Password is required')
        } else {
            alert(
                ` User Details:

                Email: ${email} 

                Passwprd: ${password}`
            )
        }
    }


  return (
    <>
        <div className='flex bg-blue-950 w-full'>
            <div className='flex flex-col w-5/6 place-content-between m-20 gap-10 p-10'>
                <h1 className='text-5xl'>SIGN IN</h1>
                <div>
                    <label htmlFor="">EMAIL</label>
                    <SigninInput
                    type="email"
                    input={inputValue}
                    onChange={handleInput}
                />
                </div>
                <div>
                    <label htmlFor="">PASSWORD</label>
                    <SigninInput
                    type='password'
                    input={pass}
                    onChange={handlePasword}
                />
                </div>


                <button className='bg-indigo-600 w-2/6 rounded-2xl m-auto p-2' onClick={click}>LOGIN</button>
            </div>
        </div>
        
    </>
    
  )
}

export default Section