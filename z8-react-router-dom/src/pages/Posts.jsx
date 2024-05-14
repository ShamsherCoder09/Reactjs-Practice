import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
const url = "https://jsonplaceholder.typicode.com/posts"
function Posts() {
    const [data , setData] = useState(null);

    const fetchData = async ()=>{
        const res = await fetch(url);
        const resData =await res.json();
        console.log(resData);
        setData(resData);
        
    }
    
    useEffect(()=>{
      fetchData();
    },[])


  return (
    <div>
        {
        data && data.map((post)=>
             <Post key={post.id} id={post.id} title={post.title} />
        )
        }
    </div>
  )
}

export default Posts