// src/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAPI } from '../../context/apiContext';
// import { useAPI } from '../../context/authContenxt';


const ProtectedRoute = () => {
  const { isAuthenticated } = useAPI();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
