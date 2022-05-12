import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
 

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";

// @ts-ignore
import PublicRoutes from "./public/PublicRoutes.tsx";
// @ts-ignore
import PrivateRoute from "./private/PrivateRoute.tsx";
// @ts-ignore



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="admin/login" element={ <PublicRoutes><Login /></PublicRoutes> } />
          <Route path="admin/dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute>   } />
      
          <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
