import React from 'react'
import { createContext , useReducer } from 'react'

export const  todoContext = createContext();

function reducer(todos, action) {
    if(action.type === "ADD_TODO"){
      return [...todos, action.payload.newTodo]
    }
    if(action.type === "DELETE_TODO"){
      // const newState = [];
      // for(let todo of todos){
      //   if(todo.id !== action.payload.id){
      //     newState.push(todo);
      //   }
      // }
      // return newState;
      // you can write this code this way
      return todos.filter((todo)=> todo.id !== action.payload.id)
    }
  
    if(action.type === "TOGGLE_COMPLETED"){
      // console.log("toggling this")
      return todos.map((todo)=>{
        if(todo.id === action.payload.id){
          return {...todo, completed:!todo.completed}
        } 
        else{
          return todo
        }
      })
      
    }
  
    return todos;
  
  }

// Reducer initials value  
const  initialTodo = [
    {id:"1", title:"Learn React" , completed: false},
    {id:"2", title:"Learn English" , completed:true},
    {id:"3", title:"Do Coding", completed:false}
  ]

function TodosProvider({children}) {
    const[todos, dispatch] = useReducer(reducer,initialTodo);
  return (
    <todoContext.Provider value={{todos:todos , dispatch:dispatch}}>
        {children}
    </todoContext.Provider>
  )
}

export default TodosProvider