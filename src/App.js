import React from 'react';
import logo from './logo.png';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>my_irc</h1>
        <div>
          <Link to={"/home"}><button className='btn btn-dark'>Home</button></Link>
        </div>
      </header>
    </div>
  );
}

export default App;