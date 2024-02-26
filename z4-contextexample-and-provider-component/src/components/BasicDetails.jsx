import React, { useContext } from 'react'

import { AuthContext } from './AuthProvider.jsx'


function BasicDetails() {
    const {username, email} = useContext(AuthContext);
  return (
    <div>
        <h3>BasicDetails</h3>
        <p>userName:{username}</p>
        <p>email:{email}</p>
    </div>
  )
}

export default BasicDetails