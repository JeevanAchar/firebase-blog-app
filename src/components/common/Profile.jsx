import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegUser, FaEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='w-full h-full'>
            <div className='max-w-[400px] mx-auto p-4 bg-gray-50 shadow-2xl'>
                <div className='flex items-center justify-between'>
                    <FaArrowLeft className='cursor-pointer' />
                    <span className='w-56 text-3xl font-semibold underline text-gray-500'>Profile</span>
                </div>
                <div className='flex items-center justify-center my-4' >
                    <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716508800&semt=sph" alt="profile-image" className='w-32 rounded-full' />
                </div>
                <div className='flex items-center justify-between px-2 my-3'>
                    <div className='flex items-center'>
                        <FaRegUser />
                        <span className='px-4'>jeevan</span>
                    </div>
                    <FaEdit className='cursor-pointer' />
                </div>
                <div className="flex items-center justify-between px-2 my-3">
                    <div className="flex items-center">
                        <MdEmail />
                        <span className='px-4'>jeevan@gmail.com</span>
                    </div>
                    <FaEdit className='cursor-pointer' />
                </div>
                <div className="flex items-center justify-between px-2 my-3">
                    <div className="flex items-center">
                        <GiSmartphone />
                        <span className='px-4'>+91 000 000 0000</span>
                    </div>
                    <FaEdit className='cursor-pointer' />
                </div>
                <div className="flex items-center justify-between px-2 my-3">
                    <div className="flex items-center">
                        <RiLockPasswordLine />
                        <span className='px-4'>password</span>
                    </div>
                    <FaEdit className='cursor-pointer' />
                </div>
                <div className="flex justify-center items-center">
                    <button className='bg-blue-600 text-white px-20 py-2 rounded-md'><Link to="/">Logout</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Profile