import React, { useState , useContext} from 'react'
import { todoContext } from '../context/TodosProvider';



function FormTodo() {
  const {dispatch} = useContext(todoContext);
    const [title, setTitle] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(title.trim().length ===0){
            alert("Something went wrong .......");
            return
        }
        const newTodo={
            title:title,
            completed: false,
            id:crypto.randomUUID(),
        }
        // console.log(newTodo);
        dispatch({
            type:"ADD_TODO",
            payload:{newTodo : newTodo},
        })
        setTitle("");
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
       <input type='text'
       id='title'
       name='title'
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
         />
         <button type='submit'>AddTodo</button>
       </form>
    </div>
  )
}

export default FormTodo