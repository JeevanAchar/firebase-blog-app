import React from 'react'
import Blogs from './Blogs';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoNewspaperOutline } from "react-icons/io5";
import Footer from '../common/Footer';

const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <div className='h-[calc(100vh-8vh)] flex flex-col justify-center items-center'>
        <h2 className='text-5xl font-bold my-3'>Welcome to the Blog Z</h2>
        <p className='my-3 text-gray-500 text-xl font-semibold'>Immerse Yourself in a Diverse Community of Writers and Readers, and Unleash Your Creative Potential. Embark on a Journey of Discovery and Inspiration.</p>
        <div>
          <Link className='inline-block'>
            <button className='px-5 py-1 border-2 mx-3 rounded-md font-semibold hover:bg-zinc-50 flex items-center justify-between'>
              <span className='w-6 leading-3'>
                <IoNewspaperOutline />
              </span>
              <span>
                Explore Stories
              </span>
            </button>
          </Link>
          <Link className='inline-block'>
            <button className='px-6 py-1 border-2 mx-3 rounded-md font-semibold bg-black text-white hover:bg-zinc-800 flex items-center justify-between'>
              <span className='w-6 leading-3'>
                <FaEdit />
              </span>
              <span>
                Start Writing
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default HomePage