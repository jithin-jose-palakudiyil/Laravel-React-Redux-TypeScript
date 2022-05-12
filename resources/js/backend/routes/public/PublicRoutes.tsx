import React from 'react'
import { Navigate, useLocation } from 'react-router';
import Cookies from 'js-cookie'

const PublicRoutes = ({ children }) => {
 
  const auth = Cookies.get('authToken');
  
  //const auth = sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  let location = useLocation();
  if (auth) {
    return <Navigate replace to="/admin" state={{ from: location }} />;
  }
  return children;
  
  
}

export default PublicRoutes
