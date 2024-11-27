import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useUserStore from '../stores/useUserStore';

const PrivateRoute = () => {
  const { user } = useUserStore();

  return !!user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
