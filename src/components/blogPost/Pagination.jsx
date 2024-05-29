import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='text-center my-10'>
            <nav aria-label='page navigation'>
                <ul className='inline-flex -space-x-px text-sm'>
                    <li>
                        <button className={`flex items-center justify-center px-5 h-8 ms-0  leading-tight text-gray-500 bg-white border border-e-0 border-gray-300
                            rounded-s-lg hover:bg-gray-500 hover:text-white ${currentPage === 1 ? "disabled:cursor-not-allowed" : ""}
                        `} disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} >Previous</button>
                    </li>
                    {
                        pageNumbers.map((number) => {
                            return (
                                <li key={number}>
                                    <button className='flex items-center justify-center px-5 h-8 ms-0  leading-tight text-gray-500 bg-white border border-gray-300
                         hover:bg-gray-500 hover:text-white'
                                        onClick={() => onPageChange(number)} >{number}</button>
                                </li>
                            )
                        })
                    }
                    <li>
                        <button className={`flex items-center justify-center px-7 h-8 ms-0  leading-tight text-gray-500 bg-white border  border-gray-300
                        rounded-e-lg  hover:bg-gray-500 hover:text-white ${currentPage === totalPages ? "disabled:cursor-not-allowed" : ""}
                        `} disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} >Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination