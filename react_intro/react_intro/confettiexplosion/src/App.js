import React, { useState, useEffect } from 'react';
import './App.css';
import Confetti from 'react-confetti';

function CountdownWithConfetti() {
  const [count, setCount] = useState(10); // 10 er hvor mange sekunder countdown er
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setShowConfetti(true);
      // useEffect < 1 gjør at confetti går av npr den når 0 showconfetti er explosionen
    }
  }, [count]);

  useEffect(() => {
    if (showConfetti) {
      // restart countdown og fjern confetti 
      const timer = setTimeout(() => {
        setCount(10); // resetter countdown
        setShowConfetti(false); // fjerner confettien
      }, 3000); // 3000 er ms så 3000 er 3 sek

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showConfetti]);

  useEffect(() => {
    if (count > 0 && !showConfetti) {
      // gjlr at countdown blir mindre per sekund
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000); 
      /* viser hvor mye countdown skifter med og hvor ofte 1000 = 1 sek per oppdatering og prev count er hvor mange den skifter med
      hvis den blir satt til et annet nummer en 1 og går under 0 som -1 så blir den stuck. setter du prevcount under 1 så får du en rounding error eks: den går 9.0 8.0 7.000008 og derfor blir stuck siden den ender opp under 0
      dette kan du fikse med å sette useEffect på < 0.01*/

      return () => {
        clearInterval(timer);
      };
    }
  }, [count, showConfetti]);

  return (
    <div>
      <h1>Countdown: {count}</h1>
      {showConfetti && <Confetti />}
    </div>
  );
}

export default CountdownWithConfetti;