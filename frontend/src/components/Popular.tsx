

import React, { useEffect, useState } from 'react'
import { API_URL } from '../config/Config'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Link } from 'react-router-dom'

export interface BookInterface {
    title: string
    author: string
    genre: string
    _id: string
    cover_image: string
    isbn:string
}



function Popular() {
    const user = useSelector((state: RootState) => state.user.value)
    const [isLoading, setLoading] = useState(true)
    const [popularBooks, setPopularBooks] = useState<BookInterface[]>([])
    useEffect(() => {
        axios.get(`${API_URL}/books/popular`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then((response) => {
            setLoading(false)
            setPopularBooks(response.data)
            console.log(response.data)
        })

    }, [])


    return (
        <>
            {
                !isLoading ?
                    <>
                        <section>
                            <h1 className='blue_text text-2xl '>Popular Books</h1>
                            <div className='w-full flex gap-10 items-center overflow-hidden my-10'>
                                {
                                    popularBooks.map((book) => {
                                        return (
                                            <Link to={`/bookinfo/${book.isbn}`} key={book._id} className='w-34 h-60 cursor-pointer '>
                                                <img className='rounded-md h-42 w-[120px] object-cover hover:scale-120 transition all duration-500' src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="bookcover" />
                                                <p className='text-sm my-1 capitalize h-10 overflow-hidden'>{book.title} - by <span>{book.author}</span></p>
                                                <p className='blue_text text-sm '>{book.genre}</p>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </>
                    : "...Loading"
            }
        </>
    )
}

export default Popular