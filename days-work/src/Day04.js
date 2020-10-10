import React from 'react';
import cssimg from './images/css_logo.png';
import js from './images/js.png';
import profile from './images/Chamu.jpg';
import htmlLogo from './images/html_logo.png';
import reactLogo from './logo.svg'
import './App.css';
import HexaColor from './day04/HexaColorGenerator';
import SubscribeForm from './day04/form';
import TechImg from './day04/day04b';

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
        <div className="container">
          <h2>Front End Technologies</h2>
          <div className="imageComps" style={{
            display: "flex", marginTop: "50px", marginBottom: "50px",
            justifyContent: "space-evenly", gap: "20px", flexWrap: "wrap"
          }}>
            <TechImg src={htmlLogo} alt="html logo" />
            <TechImg src={cssimg} alt="cascading style sheet" />
            <TechImg src={js} alt="javascript logo" />
            <TechImg src={reactLogo} alt="react logo" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
