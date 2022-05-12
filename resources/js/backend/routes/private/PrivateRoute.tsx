import React from 'react'
import { Navigate, useLocation } from 'react-router';
import Cookies from 'js-cookie'

// @ts-ignore
import LayoutView from '../../layouts/common/view/LayoutView.tsx'

const PrivateRoute = ({ children }) => {

  const auth = Cookies.get('authToken'); // get authToken from cookies 

  let location = useLocation(); //This hook returns the location object used by the react-router

  if (!auth) { // check cookies have authToken
    return <Navigate replace to="/admin/login" state={{ from: location }} />;
  }
  
  
  return <LayoutView>{children}</LayoutView>;
}

export default PrivateRoute
