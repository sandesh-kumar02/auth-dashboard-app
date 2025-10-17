import React from 'react'
import {Navigate} from "react-router-dom";

export default function ProtectedRoute({children, isAuthenticated}) {
  if(!isAuthenticated) {
    return <Navigate to={'/login'}/>
  }
  return children;
}
