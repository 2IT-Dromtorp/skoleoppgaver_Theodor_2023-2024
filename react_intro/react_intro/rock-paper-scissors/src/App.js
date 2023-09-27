import React, { useState } from 'react';
import maskin_papir from './image/maskin_papir.png'
import maskin_stein from './image/maskin_stein.png'
import maskin_saks from './image/maskin_saks.png'
import Resizer from "react-image-file-resizer";
import './App.css';

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];

  const choiceImages = {
    rock: maskin_stein,
    paper: maskin_papir,
    scissors: maskin_saks,
  };

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'It\'s a tie!';
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  };

  const handleUserChoice = (choice) => {
    const computer = generateComputerChoice();
    setUserChoice(choice);
    setComputerChoice(computer);
    const winner = determineWinner(choice, computer);
    setResult(winner);
  };

  return (
    <div className="center">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button
            className="button-round"
            key={choice}
            onClick={() => handleUserChoice(choice)}
          >
            <img src={choiceImages[choice]} alt={choice} height={50} width={50} />
          </button>
        ))}
      </div>
      <div className="result">
        {userChoice && computerChoice && (
          <>
            <p>You chose: {userChoice}</p>
            <img src={choiceImages[userChoice]} alt={userChoice} height={160} width={160} />
            <p>Computer chose: {computerChoice}</p>
            <img src={choiceImages[computerChoice]} alt={computerChoice} height={160} width={160} /> 
            <p>{result}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RockPaperScissors;
