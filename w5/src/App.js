import React, { useState, useEffect } from 'react'
import List from './components/List'

import './App.css'

function App() {
  const [state, setState] = useState(0);

  const [value, setValue] = useState({
    name: '',
    age: 0
  })

  useEffect(() => {
    console.log(state)
    console.log(value)
  }) 

  const add = () => {
    setState(state + 1);
    return;
  };

  const nameHandler = (ev) => {
    console.log(ev)
    setValue({...value, name: ev.target.value});
  };

  return (
    <div className="App">
      {state}
      <button onClick={add}>Add</button>
      <input type='text' onChange={nameHandler} />
      <List name='a' age={25}/>
    </div>
  );
}

export default App;