import { useState } from "react";

function ExampleuseStateinObject(){
    const[person , setPerson] = useState({
        firstName:"Mohd",
        lastName:"Shamsher",
        email:"mohdsahsm@gamil.com",
        phone:"8768768766",
        age:21
    })
    function changeAge()
    {
        // setPerson({
        //     ...person,
        //     age: person.age+1
        // })

        // same work ko callbacki help se karte hai
        // setPerson((previusState)=>{
        //     return {
        //         ...previusState,
        //         age:previusState.age+1
        //     }
        // })
        
        setPerson(prevState => ({...prevState, age:prevState+1}))


    }
    return (
        <>
        <p>firstName: {person.firstName}</p>
        <p>lastName: {person.lastName}</p>
        <p>email: {person.email}</p>
        <p>phone: {person.phone}</p>
        <p>age: {person.age}</p>

        <button onClick={changeAge}>Increase Age</button>
        </>
    )
}

export default ExampleuseStateinObject;