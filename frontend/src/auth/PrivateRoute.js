import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './index';

// It is Higher order component in react

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
