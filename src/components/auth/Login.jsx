import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'

const Login = () => {
  return (
    <div className='h-full w-full'>
      <div className='max-w-lg p-4 bg-slate-100 shadow-lg mx-auto min-h-96 mt-5'>
        <h2 className='text-3xl font-semibold text-center font-mono my-5 underline'>Login</h2>
        <form className='max-w-96 mx-auto'>
          <TextField id="outlined-basic" label="email" variant="outlined" className='w-full' margin='normal' />
          <TextField id="outlined-basic" label="password" variant="outlined" className='w-full' margin='normal' />
          <div className='text-center'>
            <button className='px-24 py-3 bg-blue-700 text-white rounded-lg my-4'>Submit</button>
          </div>
          <div className='font-medium'>Don't have a account <span className='text-blue-700 font-semibold underline cursor-pointer hover:text-blue-500 hover:no-underline'><Link to="/sign-up" >SignUp</Link></span></div>
        </form>
      </div>
    </div>
  )
}

export default Login;