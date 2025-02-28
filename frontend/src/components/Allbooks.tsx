

import { useEffect, useState } from 'react'
import axios from 'axios'
import { BookInterface } from './Popular'
import { RootState } from '../store/store'
import { API_URL } from '../config/Config'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooks } from '../features/booksSlice'
import Search from './pages/UserPlatform/Search'

function Allbooks() {
    const [allBooks, setAllBooks] = useState<BookInterface[]>([]);
    const token = useSelector((state: RootState) => state.user.value.token);
    const [isLoading, setLoading] = useState(true);
    const books = useSelector((state: RootState) => state.books.value)
    const dispatch = useDispatch()


    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [booksPerPage, setBooksPerPage] = useState(16)
    const lastBookIndex = currentPage * booksPerPage
    const firstBookIndex = lastBookIndex - booksPerPage
    const currenBook = allBooks.slice(firstBookIndex, lastBookIndex)







    //fetch all books
    useEffect(() => {
        axios.get(`${API_URL}/books`, {
            headers: { 'Authorization': `bearer ${token}` }
        }).then((response) => {
            setLoading(false)
            setAllBooks(response.data)
            dispatch(getAllBooks(response.data))
        })
    }, [])



    return (
        <>
            <Search
                setAllBooks={setAllBooks}
            />
            <div className='w-full flex gap-6 items-center md:ml-15   overflow-hidden my-10 flex-wrap'>
                {
                    !isLoading ?
                        <>
                            {

                                currenBook.map((book) => {
                                    return (
                                        <Link to={`/bookinfo/${book.isbn}`} key={book._id} className='w-34 h-60 cursor-pointer '>
                                            <img className='rounded-md h-42 w-[120px] object-cover hover:scale-120 transition all duration-500' src={book.cover_image} alt="bookcover" />
                                            <p className='text-sm my-1 capitalize h-10 overflow-hidden'>{book.title} - by <span>{book.author}</span></p>
                                            <p className='blue_text text-sm '>{book.genre}</p>
                                        </Link>
                                    )
                                })
                            }
                        </>
                        : "...Loading"
                }
            </div>

            <Pagination
                totalBooks={books.length}
                booksPerPage={booksPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />



        </>
    )
}

export default Allbooks