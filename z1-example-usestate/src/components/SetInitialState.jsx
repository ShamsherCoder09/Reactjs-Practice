import React from 'react'
import { useState } from 'react';

 function generateNums(){
    console.log("first time rende")
    const rundomNums=[];
    for(let i =0; i<10; i++){
        rundomNums.push(Math.random()*100);
    }
}

function SetInitialState() {
   
    const [nums , setNums]=useState(generateNums);

  return (
    <div>
        <ul>
        {
            nums.map((num)=> <li>{num}</li>)
        }
        </ul>
        <button onClick={()=> {
            setNums((prevState)=>[...prevState, Math.random()*100])
            }} >Add New Number</button>
    </div>
  )
}

export default SetInitialState