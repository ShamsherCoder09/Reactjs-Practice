import React from 'react'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    console.log(typeof children);
  return (
    <AuthContext.Provider value={{ isLoggedIn , setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
    return useContext(AuthContext);
}

export default AuthProvider