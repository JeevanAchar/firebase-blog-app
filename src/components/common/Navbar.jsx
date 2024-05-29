import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useState(false);

    return (
        <div className='w-full bg-gray-50 py-3 border-b-2 sticky top-0 '>
            <div className="md:w-3/5 sm:px-5 mx-auto flex items-center justify-between">
                <div className='flex items-center  justify-between'>
                    <div className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white focus:ring-4 focus:outline-none focus:ring-purple-200">
                        <Link to="/" className="relative px-5 py-2 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                            Blog app
                        </Link>
                    </div>

                    <nav className='w-60'>
                        <ul className='flex justify-between items-center font-semibold text-gray-500 text-base'>
                            <li className='hover:text-green-900 active:text-green-900 px-5 py-2'><Link to="/">home</Link></li>
                            <li className='hover:text-green-900 active:text-green-900 px-5 py-2'><Link to="/about">About</Link></li>
                            <li className='hover:text-green-900 active:text-green-900 px-5 py-2'><Link to="/faqs">Faq's</Link></li>

                        </ul>
                    </nav>
                </div>
                <div>
                    {user ?
                        <Link to="/profile"><FaUser className='text-gray-500 text-3xl cursor-pointer' /></Link> :
                        <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <Link to="/login" className="relative px-5 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                login
                            </Link>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar