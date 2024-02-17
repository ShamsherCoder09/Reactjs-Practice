import { useState } from 'react';
import ExampleuseState1 from './components/ExampleuseState1';
import './App.css';

function App() {
  const [users , setUser] = useState([
    {id: 1, firstName: "Mohd", lastName:"Shamsher",age:22},
    {id:2, firstName: "Mohd", lastName:"Uvaiz", age:21},
    {id:3,firstName:"Sahil", lastName:"Khan", age:23}
  ])

  function increaseAge(id){
    setUser((prevState)=>{
      return prevState.map((user)=>{
        if(user.id === id){
          return  {...user, age: user.age+1}
        }
        else{
          return user;
        }
      })
    })
  }
  const deleteUser = (id)=>{
    setUser((prevState)=>{
      return prevState.filter((user)=>{
        return user.id !== id
      })
    })
  }
  return (
    <div className="App">
      <h1>User Example</h1>
      <ExampleuseState1 users = {users} increaseAge={increaseAge}  deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
