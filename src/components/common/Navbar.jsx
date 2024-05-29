import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useState(false);

    return (
        <div className='w-full bg-gray-50 py-3 border-b-2 sticky top-0 '>
            <div className="md:w-3/5 sm:px-5 mx-auto flex items-center justify-between">
                <div className='flex items-center  justify-between'>
                    <div className="relative inline-flex items-center justify-center me-2 text-3xl font-bold text-black pb-2 ">
                        <Link to="/" className="relative px-5 py-2">
                            Blog app
                        </Link>
                    </div>

                    <nav className=''>
                        <ul className='flex justify-between items-center font-semibold text-gray-700 text-base'>
                            <li className='px-5 py-2'><Link to="/">home</Link></li>
                            <li className='px-5 py-2'><Link to="/about">About</Link></li>
                            <li className='px-5 py-2'><Link to="/faqs">Faq's</Link></li>

                        </ul>
                    </nav>
                </div>
                <div>
                    {user ?
                        <Link to="/profile"><FaUser className='text-gray-500 text-3xl cursor-pointer' /></Link> :
                        <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium bg-black text-white rounded-md border-2 focus:ring-4 focus:outline-none focus:ring-black-300">
                            <Link to="/login" className="px-5 py-2 transition-all ease-in duration-75 hover:bg-slate-900">
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