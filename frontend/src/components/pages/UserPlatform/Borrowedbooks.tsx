

import React from 'react'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

function Borrowedbooks() {
    return (
        <>
            <p className='blue_text text-[2em] my-10'>Borrowed books</p>
                <div className='flex flex-wrap gap-10 mr-10'>
                    <div className='bg-[#1f2333] cursor-pointer  w-66 h-[400px] flex flex-col relative  '>
                        <BookmarkAddedIcon style={{ fontSize: '40px' }} className='text-green-700 absolute -top-3 -right-3' />
                        <div className='bg-[#12141D] w-11/12 flex justify-center m-auto'>
                            <img className='rounded-md w-40 object-cover' src="https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg" alt="bookcover" />
                        </div>
                        <div className='p-2'>
                            <p className=' capitalize overflow-hidden text-2xl'>The Origin -By <span>Dan Brown</span></p>
                            <p className='blue_text text-sm mx-2 '>Thriller /  <span className='text-sm'><LocalLibraryIcon style={{ fontSize: '16px' }} /> Borrowed on Dec 31</span></p>

                        </div>
                    </div>
                    {/* //2 */}
                    <div className='bg-[#1f2333] cursor-pointer  w-66 h-[400px] flex flex-col relative '>
                        <BookmarkAddedIcon style={{ fontSize: '40px' }} className='text-green-700 absolute -top-3 -right-3' />
                        <div className='bg-[#12141D] w-11/12 flex justify-center m-auto'>
                            <img className='rounded-md w-40 object-cover' src="https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg" alt="bookcover" />
                        </div>
                        <div className='p-2'>
                            <p className=' capitalize overflow-hidden text-2xl'>The Origin -By <span>Dan Brown</span></p>
                            <p className='blue_text text-sm mx-2 '>Thriller /  <span className='text-sm'><LocalLibraryIcon style={{ fontSize: '16px' }} /> Borrowed on Dec 31</span></p>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default Borrowedbooks