import React from 'react';
import './App.css';

function App() {
  const  name = 'tom';
    const text = <p> lili berca bien chez notre oncle francois nestor</p>
  return (
    <div className="App">
      <h1> Notre Composant</h1>
      <div> HELLO  {name}!!
        <h1> 1+1 = {1+1}</h1>
        <h2> texte : {text} </h2>
        <input type="button" value="ok"/>
      </div>
    </div>
  );
}

export default App;
