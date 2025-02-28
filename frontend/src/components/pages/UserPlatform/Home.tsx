import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../features/userslice'
import { RootState } from '../../../store/store'
import cookie from 'js-cookie'
import axios from "axios"
import { API_URL } from '../../../config/Config'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Popular from '../../Popular'
import HomeProps from '../../HomeProps'
import RndBooks from '../../RndBooks'




function Home() {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(true)
  const user = useSelector((state: RootState) => state.user.value)
  let token = cookie.get('token')

  RndBooks()


  useEffect(() => {
    axios.get(`${API_URL}/profile`, {
      headers: { "Authorization": `Bearer ${user.token}` }
    }).then((response) => {
      setLoading(false)
      dispatch(login({
        token: token,
        name: response.data.result.name,
        username: response.data.result.username,
        email: response.data.result.email,
        id: response.data.result._id.slice(0,9)
      }))
    })


  }, [token])


  return (
    <>
      {!isLoading ?
        <>
          <RndBooks/>
          <Popular />
        </>
        : "...loading"}
    </>
  )
}

export default Home