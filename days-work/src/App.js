import React from 'react';
import logo from './logo.svg';
import './App.css';
import HexaColor from './day04/HexaColorGenerator'
import SubscribeForm from './day04/form'

function App() {
  return (
    <div className="App">
      <header className="App-header">  
      <h1>Hexadecimal Color generator</h1>   
       <HexaColor />
       <HexaColor />
       <HexaColor />
       <HexaColor />
       <HexaColor />
       <SubscribeForm />
      </header>
    </div>
  );
}

export default App;
