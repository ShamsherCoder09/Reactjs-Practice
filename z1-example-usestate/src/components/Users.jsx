


function Users({firstName, lastName, age, id, increaseAge, deleteUser}){
    return (
        <>
        <div className="div">
            <p>firstName: {firstName}</p>
            <p>lastName: {lastName}</p>
            <p>age: {age}</p>
            <p>id: {id}</p>
        </div>
        <button onClick={()=>{increaseAge(id)}}>Increase Age</button>
        <button onClick={()=>{deleteUser(id)}}>Delete User</button>
        </>
    )
}

export default Users