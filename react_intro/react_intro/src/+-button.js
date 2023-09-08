import React, { useState } from 'react';
import './+-button.css';
let button = document.getElementsByClassName("button")

export default function MyApp() {
  const [count, setCount] = useState(0);

  const PlusCount = () => {
    setCount(count + 1);
  };

  const MinusCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={PlusCount}>+</button>
      <h1>Count: {count}</h1>
      <button onClick={MinusCount}>-</button>
    </div>
  );
}


