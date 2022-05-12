import React from 'react'
import { Navigate, useLocation } from 'react-router';

const PublicRoutes = ({ children }) => {
 

  const auth = sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  let location = useLocation();
  if (auth) {
    return <Navigate replace to="/admin" state={{ from: location }} />;
  }
  return children;
  
  
}

export default PublicRoutes
