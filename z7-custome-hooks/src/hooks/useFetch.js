import { useEffect } from "react";
import { useState } from "react"


const url = "https://jsonplaceholder.typicode.com/users";

function useFetch() {
    const[data, setData] = useState(null);
    useEffect(()=>{
        
          const  fetchData = async ()=>{
        
            
          const dataFetch = await fetch(url);
          console.log(dataFetch);
          console.log("data is fetch");
          
          const resData = await dataFetch.json();
          setData(resData);
          console.log(resData);
         
        
        
      }
        fetchData();
    },[url]);
  return (
    {data}
  )
}

export default useFetch