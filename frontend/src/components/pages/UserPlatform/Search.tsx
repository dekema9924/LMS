
import { SearchOutlined } from '@mui/icons-material'
import Allbooks from '../../Allbooks'
import { useState } from 'react'
import {  useSelector } from 'react-redux'
import { RootState } from '../../../store/store'


function Search({ setAllBooks }: any) {
    const [searchValue, setSearchValue] = useState("");
    const books = useSelector((state: RootState) => state.books.value);

    const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.trim().toLowerCase();
        setSearchValue(inputValue);

        if (!inputValue) {
            setAllBooks(books); // Reset to all books
            return;
        }

        const filteredBooks = books.filter((book) =>
            book.title.toLowerCase().includes(inputValue)
        );

        setAllBooks(filteredBooks); //  Update filtered books
    };
    return (
        <>
            <div>
                <div className='flex flex-col items-center text-center'>
                    <p className='uppercase text-sm'>discover your next bookmark.</p>
                    <h1 className='text-[2.6em] w-[500px]'>
                        Explore and Search for <span className='yellow_text'>Any Book </span>
                        In our Library
                    </h1>
                </div>
                <form action="">
                    <div className=' relative w-[440px] m-auto '>
                        <input onChange={HandleSearch} className=' w-full pl-12 h-14 bg-[#232839] outline-none rounded-md' type="text" placeholder='search' />
                        <SearchOutlined className='yellow_text absolute top-4 left-4 ' />
                    </div>
                </form>

                <div className='mt-10 '>
                    <p className='ml-7 text-2xl font-bold'>Search Result</p>
                </div>
                {/* <Allbooks /> */}
            </div>
        </>
    )
}

export default Search