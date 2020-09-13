import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="content">Hello World!</p>
        <p className="version">V 0.2</p>
      </header>
    </div>
  );
}

export default App;
