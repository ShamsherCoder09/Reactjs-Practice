import Users from './Users'

function ExampleuseState1({users , increaseAge, deleteUser}){
    return ( 
        <>
        <h1>user</h1>
        {/* {
            users.map((user)=>{
                return (
                    <p>firstName: {user.firstName}</p>
                )
            })
        } */}

        {/* write same code this way */}

        {/* {
            users.map((user)=>(
                <div className="div">
                <p>firstName: {user.firstName}</p>
                <p>lastName: {user.lastName}</p>
                <p>age: {user.age}</p>
                </div>

            ))
        } */}

        {
            users.map((user)=>(
                <Users {...user} key={user.id} increaseAge={increaseAge} deleteUser={deleteUser} />
            )
            )
        }
        </>
    )
}

export default ExampleuseState1