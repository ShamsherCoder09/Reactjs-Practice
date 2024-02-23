import React from 'react'
import Todo from './Todo'

function Todos({todos , dispatch}) {
  return (
    <div>
        {
            todos.map((todo)=>(
                <Todo {...todo} dispatch={dispatch} key={todos.id} />
            ))
        }
    </div>
  )
}

export default Todos