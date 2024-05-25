import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
import Navbar from '../components/common/Navbar';
import Profile from '../components/common/Profile';
import HomePage from '../components/blogPost/HomePage';
import PageNotFound from '../components/common/PageNotFound';

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Router