import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../features/userslice'
import { RootState } from '../../../store/store'
import cookie from 'js-cookie'
import axios from "axios"
import { API_URL } from '../../../config/Config'



function Home() {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(true)
  const user = useSelector((state:RootState)=> state.user.value)
  let token = cookie.get('token')

useEffect(()=>{
  axios.get(`${API_URL}/profile`, {
    headers: {"Authorization" : `Bearer ${token}`}
  }).then((response)=>{
      setLoading(false)
      dispatch(login({
        token: token,
         name: response.data.result.name,
          username: response.data.result.username,
           email: response.data.result.email}))
  })
},[token])


  return (
    <>
      <p>Home</p>
      {
        !isLoading ? 
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </>
         : <></>
      }
    </>
  )
}

export default Home