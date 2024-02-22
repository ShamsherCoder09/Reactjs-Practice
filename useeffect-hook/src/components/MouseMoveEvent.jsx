import React, { useEffect, useState } from 'react'

function MouseMoveEvent() {
    const[mousePosition , setMousePosition] = useState({x:0, y:0});

    //1 isme ek kami hia ki jab mein component unMount kar dete hia interface se unmount component ho jata hai 
    // internally work karta rahta hia means console par work karta rahta hai
    // is problem ko solve karne ke liye hum function cleanUp ka use karte hai // mean ek remove addEventListner ka use karte ahi

    // useEffect(()=>{
    //     document.addEventListener("mousemove" , (e)=>{
    //         console.log({x: e.clientX , y: e.clientY} );
    //         setMousePosition({x: e.clientX , y:e.clientY})
    //     })
    // },[])

    useEffect(()=>{
        const handleMove = (e)=>{
          console.log({x: e.clientX , y:e.clientY});
          setMousePosition({x:e.clientX , y:e.clientY});
        }
        document.addEventListener("mousemove",handleMove);

        // function clean ka use karne se component document object model mei se remove ho jayega 
        // function ka work vahi ruk jayega 
        return ()=>{
            console.log("function cleanUp");
            document.removeEventListener("mousemove" , handleMove);
        }
    },[])

  return (
    <div>
        <h1>Mouse Eevent Value</h1>
        <p>x:{mousePosition.x}</p>
        <p>y:{mousePosition.y}</p>
    </div>
  )
}

export default MouseMoveEvent