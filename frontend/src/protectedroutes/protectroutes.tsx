

import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect, useState } from 'react';


export const ProtectiveRoute = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.value.token);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};


export const LocalRoutes=()=>{
    const isAuthenticated = useSelector((state:RootState)=> state.user.value.token)
    return(
      !isAuthenticated ? <Outlet/> : <Navigate to={'/home'}/>
    )
}