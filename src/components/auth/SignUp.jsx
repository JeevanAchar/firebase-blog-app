import { TextField } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='w-full h-full'>
      <div className="max-w-lg p-4 bg-slate-100 shadow-lg mx-auto min-h-96 mt-5">
        <h2 className='text-center font-semibold text-4xl my-5'>Sign-up</h2>
        <form className="max-w-96 mx-auto">
          <TextField id="outlined-basic" label="email" variant="outlined" className='w-full' margin='normal' />
          <TextField id="outlined-basic" label="password" variant="outlined" className='w-full' margin='normal' />
          <div className='text-center'>
            <button className='px-24 py-3 text-white font-semibold bg-blue-600 rounded-md my-3'>Submit</button>
          </div>
          <div className="font-medium">Have an account <span className='text-blue-700 underline cursor-pointer font-bold hover:text-blue-500 hover:no-underline'><Link to="/login">Login</Link></span></div>
        </form>
      </div>
    </div>
  )
}

export default SignUp