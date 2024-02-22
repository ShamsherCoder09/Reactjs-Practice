import React, { useEffect, useState } from 'react'

function CleanUpFunctionDemo() {
    console.log("Component Rerender");
    const[counter , setCounter] = useState(0);

    // useEffect
    // 1 this is first case jab component  unMount hota hia CleanUp function run hota hai
    // useEffect Rerender hota ahi // 2 then fir cleanup function run hota hai ye jab hot tab component UnMount hota hai 

    // useEffect(()=>{
    //     console.log("useEffect Rerender");
    //     return function() {
    //         console.log("CleanUp Function")
    //     }
    // },[])


    // In seconc case // dependancy array mein counter pass karne  par
    // 1 component rerender run hoga // 2 then cleanUp function run hoga // then useEffect chalega

    useEffect(()=>{
        console.log("useEffect Rerender");
        return function(){
            console.log("CleanUp Funciton");
        }
    },[counter])

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=> setCounter(preValue => preValue+1)}>Increase</button>
    </div>
  )
}

export default CleanUpFunctionDemo