import React from 'react'

interface bookProps {
    totalBooks: number
    booksPerPage: number
    setCurrentPage: (page: number) => void; // Accepts a page number as a parameter
    currentPage: number
}

function Pagination({ totalBooks, booksPerPage, setCurrentPage, currentPage }: bookProps) {

    const pages = []
    
    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pages.push(i)
    }

    return (
        <>
        <div className='flex justify-end mr-10'>
            {
                pages.map((page, index) => {
                    return (
                        <>
                            <button key={index} className={`${page == currentPage ? "active": "not_active"} border-2 w-10 mx-2 transition-all duration-500 h-10 rounded-sm cursor-pointer`} 
                            onClick={()=> setCurrentPage(page)}>
                                {page}
                            </button>
                        </>
                    )
                })
            }
        </div>

        </>
    )
}

export default Pagination