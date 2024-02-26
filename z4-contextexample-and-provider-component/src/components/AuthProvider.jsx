import React from 'react'
import { createContext } from 'react'
export const AuthContext = createContext();


function AuthProvider({children}) {
  return (
    <AuthContext.Provider value={{username:"thesame",email:"same@gmail.com"}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider