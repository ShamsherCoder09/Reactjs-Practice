import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../context/AuthProvider.jsx'

function RequireComponent({children}) {
    console.log("children" ,children)
   const {isLoggedIn, setIsLoggedIn} = useAuth()
    if(isLoggedIn){
        return children;
    }
  return (
    <div>
        <Navigate to="/login" />
    </div>
  )
}

export default RequireComponent