import { useReducer } from 'react'
import './App.css'
import FormTodo from './components/FormTodo'
import Todos from './components/Todos';


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
const  initialTodo = [
  {id:"1", title:"Learn React" , completed: false},
  {id:"2", title:"Learn English" , completed:true},
  {id:"3", title:"Do Coding", completed:false}
]

function App() {
  const[todos, dispatch] = useReducer(reducer,initialTodo);
  return (
    <>
      <h1>learn reactjs</h1>
      <FormTodo dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />

    </>
  )
}

export default App
