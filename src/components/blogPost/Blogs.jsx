import React, { useState } from 'react';
import blogs from "./Blogs.json";
import Pagination from './Pagination';

const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);

    // calculate the total number of pages
    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    // Determine the items to display on the current page 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className='w-full h-full'>
            <div className='md:w-3/5 mx-auto m-0 p-3'>
                {
                    currentItems.map((blog, index) => {
                        return (
                            <div className='overflow-y-hidden bg-white hover:shadow-lg px-6 py-3 cursor-pointer my-3' key={index}>
                                <p className='sm:text-2xl text-xl font-semibold text-blue-500'>{blog.blogName}</p>
                                <p className='my-2 sm:text-sm text-xs font-semibold text-gray-500'>Written by {blog.author}</p>
                            </div>
                        )
                    })
                }
                <div className='text-black'>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Blogs