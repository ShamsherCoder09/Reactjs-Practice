import { useState } from "react";

function Counter(){
    const[count , setCount] = useState(0);
    // function increase(){
    //     setCount(count+1);
    // }
    // function reset(){
    //     setCount(0)
    // }
    // function decrease(){
    //     setCount(count-1);
    // }
    return (
        <>
        <h1>Counter App</h1> 
        <h1>{count}</h1>
        {/* <button onClick={increase}>Increase</button>
        <button onClick={reset}> Reset</button>
        <button onClick={decrease}>Decrease</button> */}

        {/* all code write by using arrow function */}
        <button onClick={()=>{
            setCount(count+1);
        }}>Increase</button>
        <button onClick={()=>{
            setCount(0);
        }}>Reset</button>
        <button onClick={()=>{
            setCount(count-1);
        }}>Decrease</button>
        </>
    )
}

export default Counter;