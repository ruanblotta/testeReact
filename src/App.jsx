import React, { useState } from 'react';

function App() {
  const [contador, setContaor] = useState(0);

  const incrementar = () => {
    setContator(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  }

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );

  function App() {
    const nome = "Ruan";
    const sobrenome = "Marques";

    return (
      <div>
        <p>{nome} {sobrenome}</p>
      </div>
    );
  }
}
export default App;