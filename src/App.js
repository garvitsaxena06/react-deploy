import React from 'react';
import './App.css';
import image from "./img/my-img.jpeg"

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h3>AUTHOR : Gavit Saxena</h3>
      <img src={image} width="200px" alt="my-profile" />
    </div>
  );
}

export default App;
