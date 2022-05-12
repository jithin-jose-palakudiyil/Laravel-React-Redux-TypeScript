import React from 'react'
import { Navigate, useLocation } from 'react-router';
import Cookies from 'js-cookie'

// @ts-ignore
import LayoutView from '../../layouts/common/view/LayoutView.tsx'
const PrivateRoute = ({ children }) => {

  const auth = Cookies.get('authToken');
  
  //sessionStorage.getItem("authToken") || localStorage.getItem("authToken"); //js-cookie used

  let location = useLocation();
  if (!auth) {
    return <Navigate replace to="/admin/login" state={{ from: location }} />;
  }
  return <LayoutView>{children}</LayoutView>;
}

export default PrivateRoute
