import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useUserStore from '../stores/useUserStore';
import { isTokenExpired } from '../utils/isTokenExpried';
import { validateToken } from '../api/user.api';

const PrivateRoute = () => {
  const { accessToken, setUser, setAccessToken } = useUserStore();

  useEffect(() => {
    if (!accessToken) {
      validateToken(setUser, setAccessToken);
    }
  }, [accessToken]);

  const isToken = isTokenExpired(accessToken);

  return isToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
