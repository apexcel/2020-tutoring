import '@babel/polyfill';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from './List';
import './App.css'

function App() {

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [login, setLogin] = useState(false);

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleInput = (ev) => {
    ev.preventDefault();
    const {value, name} = ev.target;
    setUser({...user, [name]: value})
  }

  const postUserData = async () => {
    const {username, password} = user;
    const config = {
      url: 'http://localhost:9000/users/post-user-info',
      data: {
        username: username,
        password: password
      }
    }
    const response = await axios.post(config.url, config.data);
    console.log(response)
    if (response.data.msg === 'success') {
      setLogin(true);
    }
    return;
  }

  return (
    <div className="App">
    {login ? <List /> :
      <div>
        <input id='username' name='username' onChange={handleInput} type='text' />
        <input id='password' name='password' onChange={handleInput} type='password' />
        <button onClick={postUserData}>post User Data</button>
      </div>
      }
    </div>
  );
}

export default App;
