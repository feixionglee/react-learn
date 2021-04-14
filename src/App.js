import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [users, setUsers] = useState([])

  const getUser = async () => {
    try {
      const usersArr = await axios.get('http://jsonplaceholder.typicode.com/users');
      console.log(usersArr);
      setUsers(usersArr.data);
    } catch (e) {
      console.log(e)
    }
  }

  const cleanUser = () => {
    setUsers([])
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getUser}>get users</button>
        <button onClick={cleanUser}>clean users</button>
        {users.length}
        <div>{users.map(user => `<div>${user.name}</div>`)}</div>
      </header>
    </div>
  );
}

export default App;
