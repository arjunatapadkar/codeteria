import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAPI } from '../../context/apiContext';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAPI();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
