import React from 'react';
import blogs from "./Blogs.json";

const Blogs = () => {
    return (
        <div className='w-full h-full'>
            <div className='sm:w-3/5 mx-auto m-0 p-3'>
                {
                    blogs.map((blog, index) => {
                        return (
                            <div className='overflow-y-hidden bg-white hover:shadow-lg px-6 py-3 cursor-pointer my-3' key={index}>
                                <p className='sm:text-2xl text-xl font-semibold text-blue-500'>{blog.blogName}</p>
                                <p className='my-2 sm:text-sm text-xs font-semibold text-gray-500'>Written by {blog.author}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blogs