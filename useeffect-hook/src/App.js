
import { useState } from 'react';
import './App.css';
import CleanUpFunctionDemo from './components/CleanUpFunctionDemo';

function App() {
  const[showComponent , setShowComponent] = useState(true);
  return (
    <div className="App">
      <label htmlFor='showComponent'>Show components</label>
      <input type='checkbox' name='showComponent' id='showComponent'
      checked={showComponent}
      onChange={()=> setShowComponent(!showComponent)}
      />
      {showComponent && <CleanUpFunctionDemo />}
    </div>
  );
}

export default App;
