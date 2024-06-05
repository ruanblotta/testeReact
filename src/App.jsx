import React from 'react';
import './App.css';

function App() {
  
  const busca = "futebol";
  
  return (
    <div>
        <h1 className="title">Site de Buscas</h1>
        <a href={`https://google.com/search?q=${busca}`} title="Buscador" >
          Buscador
        </a>
    </div>
  );
}
export default App;

