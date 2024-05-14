import React from 'react'
import { Outlet   , Link} from 'react-router-dom'
function RootLayout() {
  return (
    <div>
        <h1>Nav</h1>
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="about">about</Link>
                </li>
                <li>
                <Link to="contact">Contact</Link>
                </li>
                <li>
                <Link to="posts">Post</Link>
                </li>
                
                <li>
                <Link to="error">Error</Link>
                </li>
            </ul>
        </nav>
        <main>
            <h1>main Content</h1>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout