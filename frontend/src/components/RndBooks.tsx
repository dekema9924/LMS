import axios from 'axios'
import { API_URL } from '../config/Config'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import { RootState } from '../store/store'
import { useEffect } from 'react'
import HomeProps from './HomeProps'


const RndBooks = () => {
    const user = useSelector((state: RootState) => state.user.value);  // Fetch user data from Redux store
    const [rndBook, setRndBook] = useState<any[]>([]);  // Initialize state as an array

    useEffect(() => {
        // Fetch books from API when the component mounts
        axios
            .get(`${API_URL}/books`, {
                headers: { "Authorization": `Bearer ${user.token}` },
            })
            .then((response) => {
                setRndBook(response.data);  // Set the books to state once fetched
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
            });
    }, [user.token]);  // Only re-run the effect if user.token changes

    const getRandomBook = () => {
        if (rndBook.length === 0) return null; // Return null if no books are available
        const randomIndex = Math.floor(Math.random() * rndBook.length); // Get a random index
        return rndBook[randomIndex]; // Return the random book
    };

    const randomBook = getRandomBook();
    console.log(randomBook)

    return (
        <>
             <HomeProps
                           title={randomBook?.title}
                           category={randomBook?.category}
                           rating={randomBook?.rating}
                           author={randomBook?.author}
                           cover_image={randomBook?.cover_image}
                           description={randomBook?.description}
                    />
        </>
    )
}



 export default RndBooks;