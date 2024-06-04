import React from 'react';
import './App.css';

function App() {
    let name = "Ruan";
    let num1 = 1;
    let num2 = 1;
    let sum = num1 + num2;
    return (
      <div>
        <p>Meu nome é <span>{name}</span></p>
        <p>A soma é {sum}</p>
      </div>
      
    );
}
export default App;