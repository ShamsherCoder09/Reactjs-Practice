import {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState("Mohd");
  function changeName(){
    if(name==="Mohd"){
      setName("Shamsher");
    }
    else{
      setName("Mohd");
    }
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={changeName}>nameChange</button>
    </div>
  );
}

export default App;
