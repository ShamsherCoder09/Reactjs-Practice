import React from 'react'
import useLocalStorage from './hooks/useLocalStorage'

function BasicForm() {
    const[firstname, setFirstname] = useLocalStorage("firstname", "");
    const[lastname, setLastname] = useLocalStorage("lastname","");
  return (
    <form>
        <label htmlFor="firstname">FirstName</label>
        <input 
        type="text"
        id='firstname'
        name='firstname'
        value={firstname}
        onChange={(e)=> setFirstname(e.target.value)}
         />

<p>firstName: {firstname}</p>
         <label htmlFor="lastname">LastName</label>
         <input 
         type="text"
         id='lastname'
         name='lastname'
         value={lastname}
         onChange={(e)=> setLastname(e.target.value)}
          />

          <p>lastName: {lastname}</p>
    </form>
  )
}

export default BasicForm