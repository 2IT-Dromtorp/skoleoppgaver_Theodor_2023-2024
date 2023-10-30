import React, { useState, useEffect } from 'react';
import Elev from './Elev';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Home() {
  const initialNames = ["Andreas", "Ahmad", "Philip", "Gabriel", "Theodor", "Mattis", "Alva", "Silas", "Axel", "Vetle", "Kristoffer", "Johannes", "Elias", "Matheo"];

  const [shuffledNames, setShuffledNames] = useState([]);
  const [currentNames, setCurrentNames] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(initialNames);
    setShuffledNames(shuffled);
    setCurrentNames(shuffled);
  }, []);

  const assignName = () => {
    if (currentNames.length === 0) {
      // If all names have been used, reshuffle and reset the list
      const shuffled = shuffleArray(initialNames);
      setShuffledNames(shuffled);
      setCurrentNames(shuffled);
    }

    const name = currentNames.pop();
    return name;
  };

  return (
    <div className="container">
      <div className='leftside'>
        <div className='box'>
          <div className='sitteplasser'>
            <Elev name={assignName()} />
            <Elev name={assignName()} />
          </div>
          <div className='sitteplasser'>
            <Elev name={assignName()} />
          </div>
          <div className='sitteplasser'>
            <Elev name={assignName()} />
            <Elev name={assignName()} />
          </div>
        </div>
      </div>
      <div className='rightside'>
        <div className='box'>
          <div className='sitteplasser'>
            <Elev name={assignName()} />
            <Elev name={assignName()} />
            <Elev name={assignName()} />
          </div>
          <div className='sitteplasser'>
            <Elev name={assignName()} />
            <Elev name={assignName()} />
            <Elev name={assignName()} />
          </div>
          <div className='sitteplasser'>
            <Elev name={assignName()} />
            <Elev name={assignName()} />
            <Elev name={assignName()} />
          </div>
        </div>
      </div>
    </div>
  );
}
