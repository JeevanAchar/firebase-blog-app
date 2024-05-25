import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/pnf.png";

const PageNotFound = () => {
    return (
        <div className="w-full h-full absolute top-0 bg-white z-40">
            <div className='max-w-[450px] mx-auto mt-9 text-center'>
                <p className='text-[200px] text-blue-600 font-semibold'>404</p>
                <p className='text-2xl text-gray-500 font-semibold'>The page you are looking for doesn't exit</p>
                <button className='text-base bg-gray-500 px-4 py-2 m-4 text-white font-semibold rounded-md'><Link to="/">Back to home</Link></button>
            </div>
            <div className='flex justify-center items-center'>
                <img src={img} alt="page not found" className='h-[400px]' />
            </div>
        </div>
    )
}

export default PageNotFound