import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/First';

function App() {
  console.log(document.getElementById('root')._reactRootContainer._internalRoot);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstComponent/>
      </header>
    {console.log(document.getElementById('root')._reactRootContainer._internalRoot)}
    </div>
  );
  
}

export default App;
