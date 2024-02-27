import React, {  useContext } from 'react'
import Todo from './Todo'
import { todoContext } from '../context/TodosProvider';

function Todos() {
  const{todos, dispatch} = useContext(todoContext);
  return (
    <div>
        {
            todos.map((todo)=>(
                <Todo {...todo} dispatch={dispatch} key={todo.id} />
            ))
        }
    </div>
  )
}

export default Todos