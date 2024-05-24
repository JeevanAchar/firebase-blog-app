import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full bg-slate-100 py-3'>
            <div className="sm:w-3/5 sm:px-10 px-2 mx-auto flex items-center justify-between">
                <div className='px-3 py-1 rounded text-white text-center inline-block bg-gradient-to-r from-purple-500 to-pink-500'>blog </div>
                <nav className='w-56'>
                    <ul className='flex justify-between items-center font-semibold text-gray-600'>
                        <li className='hover:underline'><Link to="/">home</Link></li>
                        <li className='hover:underline'><Link to="/sign-in">SignUp</Link></li>
                        <li className='hover:underline'><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <div>
                    <Link to="/profile"><CgProfile className='text-gray-500 text-3xl cursor-pointer' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar