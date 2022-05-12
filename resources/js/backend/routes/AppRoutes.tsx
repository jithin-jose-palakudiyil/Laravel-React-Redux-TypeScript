import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
 
// @ts-ignore
import Login from "../pages/login/Login.tsx";
 
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin/login" element={  <Login /> } />
      
       
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
