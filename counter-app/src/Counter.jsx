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

    // make counter the functionality by suing call back function
    function increase(){
        // setCount((previuosState)=>{
        //     return previuosState+1;
        // })

        setCount(previuosState => previuosState+1);
    }

    function reset(){
        setCount(0);
    }

    function decrease(){
        // setCount((previuosState)=>{
        //     return previuosState-1;
        // })

        setCount (previuosState => previuosState -1);
    }

    return (
        <>
        <h1>Counter App</h1> 
        <h1>{count}</h1>
        {/* <button onClick={increase}>Increase</button>
        <button onClick={reset}> Reset</button>
        <button onClick={decrease}>Decrease</button> */}

        {/* all code write by using arrow function */}
        {/* <button onClick={()=>{
            setCount(count+1);
        }}>Increase</button>
        <button onClick={()=>{
            setCount(0);
        }}>Reset</button>
        <button onClick={()=>{
            setCount(count-1);
        }}>Decrease</button> */}

        {/* make the program by using callback function */}

        <button onClick={increase}>Increase</button>
        <button onClick={reset}> Reset</button>
        <button onClick={decrease}>Decrease</button>
        </>
    )
}

export default Counter;