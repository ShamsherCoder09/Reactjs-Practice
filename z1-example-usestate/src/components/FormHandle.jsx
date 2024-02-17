import { useState } from "react";

function FormHandle(){
    const [username, setUsername] = useState("");
    const [password , setPassword] = useState("")
    // const handleUsername = (e)=>{
    //     setUsername(e.target.value)
    //     // console.log(e.target.value)
    // }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="App">
            <h1>Form Data Handle</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">userName:</label>
                <input type="text" 
                       id='username'
                       value={username}
                    //    onChange={handleUsername}
                       onChange={(e)=> setUsername(e.target.value)}
                 />

                 <label htmlFor="">password:</label>
                 <input 
                     type="password"
                     id="password"
                     value={password}
                     onChange={(e)=> setPassword(e.target.value)}
                  />
                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormHandle;