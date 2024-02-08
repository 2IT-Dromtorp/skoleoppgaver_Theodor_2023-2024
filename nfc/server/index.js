const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Spill rute
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

// Quiz rute
const quizQuestions = [
    { id: 1, question: 'Hva står "IT" for?', options: ['Informasjonsnettverk', 'Intelligent Teknologi', 'Informatikk', 'Informasjonsteknologi'], correctAnswer: 'Informasjonsteknologi' },
    { id: 2, question: 'Hvilken SQL-kommando brukes til å opprette en ny database?', options: ['MAKE DATABASE', 'NEW DATABASE', 'CREATE DATABASE', 'INSERT DATABASE'], correctAnswer: 'CREATE DATABASE' },
    { id: 3, question: 'Hva er formålet med en SQL SELECT-setning?', options: ['Å hente data fra en database', 'Å slette data fra en database', 'Å oppdatere data i en database', 'Å opprette en ny database'], correctAnswer: 'Å hente data fra en database' },
    { id: 4, question: 'Hvilken SQL-kommando brukes til å legge til data i en database?', options: ['INSERT INTO', 'ADD DATA', 'UPDATE DATA', 'CREATE DATA'], correctAnswer: 'INSERT INTO' },
    { id: 5, question: 'Hva står "DBMS" for?', options: ['Data Backup and Management System', 'Data Block Management System', 'Database Model System', 'Database Management System'], correctAnswer: 'Database Management System' },
    { id: 6, question: 'Hva er en vanlig funksjon til et DBMS?', options: ['Skriving av kodesnutter', 'Testing av applikasjoner', 'Utforming av grafiske grensesnitt', 'Sikkerhetskopiering av data'], correctAnswer: 'Sikkerhetskopiering av data' },
    { id: 7, question: 'Hva er formålet med en SQL UPDATE-setning?', options: ['Å oppdatere eksisterende data i en database', 'Å slette data fra en database', 'Å opprette en ny database', 'Å endre tabellstruktur'], correctAnswer: 'Å oppdatere eksisterende data i en database' },
    { id: 8, question: 'Hva står "HTML" for?', options: ['High Tech Machine Learning', 'Hyper Terminal Markup Language', 'Human Technology Management Layer', 'HyperText Markup Language'], correctAnswer: 'HyperText Markup Language' },
    { id: 9, question: 'Hva er formålet med "CSS" i webutvikling?', options: ['Styling av nettsider', 'Databaseadministrasjon', 'Dynamisk datahåndtering', 'Serverkommunikasjon'], correctAnswer: 'Styling av nettsider' },
    { id: 10, question: 'Hva er et vanlig bruk av JavaScript?', options: ['Interaktivitet på nettsider', 'Databaseadministrasjon', 'Nettverkssikkerhet', 'Serverkonfigurasjon'], correctAnswer: 'Interaktivitet på nettsider' },
    { id: 11, question: 'Hva er en "loop" i programmering?', options: ['En repetisjonsstruktur', 'En visuell effekt', 'En datatype', 'En sikkerhetsmekanisme'], correctAnswer: 'En repetisjonsstruktur' },
    { id: 12, question: 'Hva er formålet med en "function" i programmering?', options: ['Gjenbruk av kode', 'Lagring av data', 'Håndtering av feil', 'Nettverkskommunikasjon'], correctAnswer: 'Gjenbruk av kode' },
    { id: 13, question: 'Hva er en vanlig oppgave for en nettverksadministrator?', options: ['Konfigurasjon av rutere og svitsjer', 'Koding av nettsider', 'Installasjon av operativsystemer', 'Design av grafiske brukergrensesnitt'], correctAnswer: 'Konfigurasjon av rutere og svitsjer' },
    { id: 14, question: 'Hva er en "firewall"?', options: ['En sikkerhetsteknologi', 'En grafisk brukergrensesnitt', 'En datamaskin', 'En nettside'], correctAnswer: 'En sikkerhetsteknologi' },
    { id: 15, question: 'Hva står "LAN" for i nettverksterminologi?', options: ['Large Access Node', 'Local Area Network', 'Long Antenna Network', 'Logarithmic Access Number'], correctAnswer: 'Local Area Network' }
];

app.post('/quiz', (req, res) => {
    const { answers } = req.body;
    let score = 0;
    let responses = [];

    quizQuestions.forEach((question, index) => {
        const correctAnswer = question.correctAnswer;
        const userAnswer = answers[index];

        if (correctAnswer === userAnswer) {
            score++;
            responses.push({ id: question.id, response: 'correct' });
        } else {
            responses.push({ id: question.id, response: 'incorrect' });
        }
    });

    res.json({ score, responses });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
