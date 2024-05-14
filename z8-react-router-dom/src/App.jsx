import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { Home, About, Contact, Error, Posts, PostDetails , Login } from './pages'
import RootLayout from './layout/RootLayout'
import RequireComponent from './components/RequireComponent'
import AuthProvider from './context/AuthProvider'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />} />
        <Route path='posts' element={
        <RequireComponent>
          <Posts />
        </RequireComponent>
        // <Posts />
      } />
        <Route path='login' element={<Login/>}/>
        <Route path='posts/:id' element={<PostDetails />} />
        <Route path='*' element={<Error />} />
      </Route>
    )
  )
  return (
    <AuthProvider>
      <RouterProvider  router={router} /> 
    </AuthProvider>
    // <RouterProvider  router={router} /> 
  )
}

export default App