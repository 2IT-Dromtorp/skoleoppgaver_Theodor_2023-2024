const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS

app.post('/play', (req, res) => {
    const { playerChoice } = req.body;
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }

    res.json({ playerChoice, computerChoice, result });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
