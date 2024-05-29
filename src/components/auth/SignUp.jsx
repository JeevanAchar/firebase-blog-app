import { FormControl, InputLabel, TextField, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmit = (values, actions) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("required"),
      password: Yup.string().matches(passwordRules, "Must contain atleast 1 uppercase, 1 lowercase, and 1 numeric character. Minimum 8 character").required("required"),
    }),
    onSubmit: handleSubmit,
  })

  return (
    <div className='w-full h-full'>
      <div className="max-w-lg p-4 bg-gray-50 shadow-2xl mx-auto min-h-96 mt-16">
        <h2 className='text-center font-normal text-4xl my-5 font-serif'>Create an account</h2>
        <form className="max-w-96 mx-auto" onSubmit={formik.handleSubmit} autoComplete='off'>
          <TextField id="email" label="email" name='email' variant="outlined" className='w-full' margin='dense' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <p className='h-5 w-full text-sm text-red-600 mb-2'>{
            formik.touched.email && formik.errors.email ? formik.errors.email : null
          }</p>
          <FormControl className='w-full mt-3'>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput id="password" label="password" name='password' type={showPassword ? "text" : "password"} variant="outlined" margin='dense'
              value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              } />
          </FormControl>
          <p className="h-8 w-full text-sm text-red-600">{
            formik.touched.password && formik.errors.password ? formik.errors.password : null
          }</p>
          <div className='text-center'>
            <button className='px-24 py-3 text-white font-semibold bg-blue-600 rounded-md my-3' type='submit'>Submit</button>
          </div>
          <div className="font-medium">Have an account <span className='text-blue-700 underline cursor-pointer font-bold hover:text-blue-500 hover:no-underline'><Link to="/login">Login</Link></span></div>
        </form>
      </div>
    </div>
  )
}

export default SignUp