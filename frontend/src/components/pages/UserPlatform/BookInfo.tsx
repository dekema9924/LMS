import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../../config/Config'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import HomeProps from '../../HomeProps'
import { useEffect, useState } from 'react'
import { HomeInterface } from '../../HomeProps'
import Popular from '../../Popular'

function BookInfo() {
    const { id } = useParams()
    const token = useSelector((state: RootState) => state.user.value.token)
    const [bookInfo, setBookInfo] = useState<HomeInterface>()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${API_URL}/books/bookinfo/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then((response) => {
            setBookInfo (response.data)
            setLoading(false)
        }).catch(error => {
            console.error("There was an error fetching the data", error);
        });
    }, [id])

    return (
        <>
            {
                !isLoading ? 
                <>
                    <HomeProps
                           title={bookInfo?.title}
                           arthur={bookInfo?.arthur}
                           category={bookInfo?.category}
                           rating={bookInfo?.rating}
                           publisher={bookInfo?.publisher}
                           cover_image={bookInfo?.cover_image}
                           description={bookInfo?.description}
                    />
                    <Popular/>
                </> : "...Loading"
            }
        </>
    )
}

export default BookInfo