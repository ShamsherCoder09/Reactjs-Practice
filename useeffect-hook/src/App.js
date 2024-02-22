
import { useState } from 'react';
import './App.css';
// import CleanUpFunctionDemo from './components/CleanUpFunctionDemo';
import MouseMoveEvent from './components/MouseMoveEvent';

function App() {
  // const[showComponent , setShowComponent] = useState(true);
  const[mouseEvent , setMouseEvent] = useState(true);
  return (
    <div className="App">
      {/* <label htmlFor='showComponent'>Show components</label>
      <input type='checkbox' name='showComponent' id='showComponent'
      checked={showComponent}
      onChange={()=> setShowComponent(!showComponent)}
      />
      {showComponent && <CleanUpFunctionDemo />} */}

      <label htmlFor='mouseEvent'>ShowMouseEvent</label>
      <input type='checkbox' name='mouseEvent' id='mouseEvent' 
      value={mouseEvent} 
      onChange={()=> setMouseEvent(!mouseEvent)}
       />
       {mouseEvent && <MouseMoveEvent/>}
    </div>
  );
}

export default App;
