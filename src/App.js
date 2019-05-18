import React from 'react';
//import logo from './logo.svg';
import qiqi from './qiqi.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={qiqi} className="App-logo" alt="logo" />
        <p>
          祝我最爱的琦琦坨5.20快乐！
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Love you~
        </a>
      </header>
    </div>
  );
}

export default App;
