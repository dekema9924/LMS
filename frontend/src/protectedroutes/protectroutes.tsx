

import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Cookies from "js-cookie";

const isAuthenticated = Cookies.get('token')

export const ProtectiveRoute =()=>{
    // const isAuthenticated = Cookies.get('token')
    console.log(isAuthenticated)
    return(
      isAuthenticated ?  <Outlet/> : <Navigate to={'/'}/>
    )
}

export const LocalRoutes=()=>{
    console.log(isAuthenticated)
    return(
      !isAuthenticated ?  <Outlet/> : <Navigate to={'/home'}/>
    )
}