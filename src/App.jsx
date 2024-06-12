import React from 'react';
import './App.css';

function App() {
  
  return (

   <div className='App'>
      <h1>Magic the Gathering</h1>
      <img src="https://cards.scryfall.io/large/front/1/b/1b0f41e8-cf27-489b-812a-d566a75cf7f7.jpg?1559596849" alt="Basic Mountain" width="300" />
      <p>Basic Mountain.</p>
      <p>Artist: Douglas Shuler</p>
      <p>Revised Edition </p>
      <p>Card number 301</p>
      <button onClick={() => alert("Tap this Basic Mountain")}>Check for more info!</button>
   </div>
  )
}
export default App;

