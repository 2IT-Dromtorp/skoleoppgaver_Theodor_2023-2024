import React, { useState } from 'react';
import { render } from "react-dom";
import './App.css';
import ConfettiExplosion from 'react-confetti-explosion';



export default App;
function App() {
  const [counter, setCounter] = React.useState(10);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}

function Confetti() {
  const [isExploding, setIsExploding] = React.useState(true);
  return <>{isExploding && <ConfettiExplosion />}</>;
}