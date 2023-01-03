import React from 'react';
import { Route, Redirect, Navigate, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children}) => {
  const {isAuthenticated}=useAuth0()
  const navigate = useNavigate();
   if(!isAuthenticated)
   {
    navigate('/');
   }
  return children;
};
export default PrivateRoute;
