import React from 'react'

function Todo({id, title , completed, dispatch}) {
    const deleteTodo = ()=>{
        dispatch({
            type:"DELETE_TODO",
            payload:{id: id},
        })   
    }
    const toggleCompleted = ()=>{
        dispatch({
            type:"TOGGLE_COMPLETED",
            payload:{id:id},
        })
    }
  return (
    <div style={{
       fontFamily: 'sans-serif',
       padding:"1rem",
       margin:"1rem",
       backgroundColor:"#cecece",
       borderRadius:"1rem"
    }}> 
        <p>id: {id}</p>
        <p style={{textDecoration: completed ? "line-through": "solid"}}>title: {title}</p>
        <p>completed:{completed ? "true": "false"}</p>
        <button onClick={deleteTodo}>Delete</button>
        <button onClick={toggleCompleted}>ToggleCompleted</button>
    </div>
  )
}

export default Todo