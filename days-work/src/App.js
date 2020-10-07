import React from 'react';
import logo from './logo.svg';
import './App.css';

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div style={{backgroundColor: hexaColor(), width: '90%', height: '50px', margin: '5px auto', lineHeight: '50px'}}>{hexaColor()}</div>


function App() {
  return (
    <div className="App">
      <header className="App-header">     
       <HexaColor />
       <HexaColor />
       <HexaColor />
       <HexaColor />
       <HexaColor />
      </header>
    </div>
  );
}

export default App;
