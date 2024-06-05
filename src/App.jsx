import React from 'react';
import './App.css';

function App() {
  
  // const busca = "futebol";
  let series = new Array("Game of Thrones", "House of the Dragon", "Dark", "Fallout", "The Lord of the Rings: The Rings of Power");
  
  return (
    <div>
        <h1 className="title">Séries</h1>
        <ul>
          {series.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* <a href={`https://google.com/search?q=${busca}`} title="Buscador" >
          Buscador
        </a> */}
    </div>
  );
}
export default App;

