import React from 'react'
import { Link } from 'react-router-dom'
function Post({id, title}) {
  return (
    <div>
        <h2>title:{title}</h2>
        <Link to={id.toString()}>
            <h2>{title}</h2>
        </Link>
        <p>id: {id}</p>
    </div>
  )
}

export default Post