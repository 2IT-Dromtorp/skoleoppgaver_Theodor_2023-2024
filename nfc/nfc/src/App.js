import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const playGame = async (choice) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/play', { playerChoice: choice });
      const data = response.data;
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors Game</h1>
      <button onClick={() => playGame('rock')} disabled={loading}>Rock</button>
      <button onClick={() => playGame('paper')} disabled={loading}>Paper</button>
      <button onClick={() => playGame('scissors')} disabled={loading}>Scissors</button>
      {loading && <p>Loading...</p>}
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;
