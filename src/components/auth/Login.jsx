import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { useFormik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = "required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    };

    if (!values.password) {
      errors.password = "required";
    } else if (!passwordRules.test(values.password)) {
      errors.password = "Must contain atleast 1 uppercase, 1 lowercase, and 1 numeric character. Minimum 8 character";
    };
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <div className='h-full w-full'>
      <div className='max-w-lg p-4 bg-gray-50 shadow-2xl mx-auto min-h-96 mt-16'>
        <h2 className='text-4xl font-normal text-center my-5 font-serif'>Login</h2>
        <form className='max-w-96 mx-auto' autoComplete='off' onSubmit={formik.handleSubmit} >
          <TextField id="email" label="email" name='email' variant="outlined" className='w-full' margin='dense' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <p className="h-5 w-full text-sm text-red-600 mb-3">
            {formik.touched.email && formik.errors.email ? formik.errors.email : null}
          </p>
          {/* <TextField id="password" label="password" name='password' variant="outlined" className='w-full' margin='dense' value={formik.values.password} onChange={formik.handleChange} onBlurCapture={formik.handleBlur} /> */}
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
          <p className="h-8 w-full text-sm text-red-600">
            {formik.touched.password && formik.errors.password ? formik.errors.password : null}
          </p>
          <div className='text-center'>
            <button className='px-24 py-3 bg-black text-white rounded-lg my-4' type='submit'>Submit</button>
          </div>
          <div className='font-medium'>Don't have a account <span className='text-blue-700 font-semibold cursor-pointer hover:text-blue-600 hover:underline'><Link to="/sign-up" >SignUp</Link></span></div>
        </form>
      </div>
    </div>
  )
}

export default Login;