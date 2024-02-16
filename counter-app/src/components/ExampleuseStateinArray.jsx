import { useState } from "react";
import {v4 as uuid} from 'uuid';
function ExampleuseStateinArray(){
    const[fruits, setFruit] = useState(['apple','banana','mango']);

    function addFruit(){
        // setFruit([...fruits, "newFruits"]);

        // setFruit((previuosState)=>{
        //     return [...previuosState, "newFruit" ]
        // })

         setFruit(previuosState=>[...previuosState, "newFruit" ])

    }
    return(
        <>
        <ul>
            {
                fruits.map((fruit)=>( 
                <li key={uuid()}>{fruit}</li>

                ))}
        </ul>
        <button onClick={addFruit}>add new fruits</button>
        </>
    )
}

export default ExampleuseStateinArray;