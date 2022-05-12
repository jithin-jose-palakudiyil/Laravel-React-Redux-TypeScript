import React from 'react'
import { Navigate, useLocation } from 'react-router';
// @ts-ignore
import LayoutView from '../../layouts/common/view/LayoutView.tsx'
const PrivateRoute = ({ children }) => {
  const auth = sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  let location = useLocation();
  if (!auth) {
    return <Navigate replace to="/admin/login" state={{ from: location }} />;
  }
  return <LayoutView>{children}</LayoutView>;
}

export default PrivateRoute
