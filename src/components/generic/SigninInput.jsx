function SigninInput({input, onChange, type}) {

  return (
    <>
        <input 
            className='w-full h-12 mt-5 rounded-2xl text-black' 
            type={type}
            value={input}
            onChange={onChange}
            required
        />
    </>
  )
}

export default SigninInput