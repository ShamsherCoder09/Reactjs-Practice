import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const url = "https://jsonplaceholder.typicode.com/posts";

function PostDetails() {
    const {id} = useParams();
    const [post , setPost] = useState(null);
    async function fetchData(){
        const res = await fetch(`${url}/${id}`);
        const resData =await res.json();
        console.log(resData);
        setPost(resData);
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <div>
        {
            post && (
                <>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </>
            )
        }
    </div>
  )
}

export default PostDetails