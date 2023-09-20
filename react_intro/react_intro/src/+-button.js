import React, { useState } from 'react';
import './+-button.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
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
    <div className='center'>
      <button className='btn' onClick={PlusCount} id='up'><AiOutlineArrowUp size={60}/></button>
      <h1>Count: {count}</h1>
      <button className='btn' onClick={MinusCount} id='down'><AiOutlineArrowDown size={60}/></button>
    </div>
  );
}


