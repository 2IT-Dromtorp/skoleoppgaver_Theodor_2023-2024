import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quizAnswers, setQuizAnswers] = useState(Array(15).fill(''));
  const [quizScore, setQuizScore] = useState(null);
  const [quizResponses, setQuizResponses] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  
  const quizQuestions = [
    { id: 1, question: ' 1 Hva står "IT" for?', options: ['Informasjonsnettverk', 'Intelligent Teknologi', 'Informatikk', 'Informasjonsteknologi'] },
    { id: 2, question: ' 2 Hvilken SQL-kommando brukes til å opprette en ny database?', options: ['MAKE DATABASE', 'NEW DATABASE', 'CREATE DATABASE', 'INSERT DATABASE'] },
    { id: 3, question: ' 3 Hva er formålet med en SQL SELECT-setning?', options: ['Å hente data fra en database', 'Å slette data fra en database', 'Å oppdatere data i en database', 'Å opprette en ny database'] },
    { id: 4, question: ' 4 Hvilken SQL-kommando brukes til å legge til data i en database?', options: ['INSERT INTO', 'ADD DATA', 'UPDATE DATA', 'CREATE DATA']},
    { id: 5, question: ' 5 Hva står "DBMS" for?', options: ['Data Backup and Management System', 'Data Block Management System', 'Database Model System', 'Database Management System']},
    { id: 6, question: ' 6 Hva er en vanlig funksjon til et DBMS?', options: ['Skriving av kodesnutter', 'Testing av applikasjoner', 'Utforming av grafiske grensesnitt', 'Sikkerhetskopiering av data']},
    { id: 7, question: ' 7 Hva er formålet med en SQL UPDATE-setning?', options: ['Å oppdatere eksisterende data i en database', 'Å slette data fra en database', 'Å opprette en ny database', 'Å endre tabellstruktur']},
    { id: 8, question: ' 8 Hva står "HTML" for?', options: ['High Tech Machine Learning', 'Hyper Terminal Markup Language', 'Human Technology Management Layer', 'HyperText Markup Language']},
    { id: 9, question: ' 9 Hva er formålet med "CSS" i webutvikling?', options: ['Styling av nettsider', 'Databaseadministrasjon', 'Dynamisk datahåndtering', 'Serverkommunikasjon']},
    { id: 10, question: ' 10 Hva er et vanlig bruk av JavaScript?', options: ['Interaktivitet på nettsider', 'Databaseadministrasjon', 'Nettverkssikkerhet', 'Serverkonfigurasjon']},
    { id: 11, question: ' 11 Hva er en "loop" i programmering?', options: ['En repetisjonsstruktur', 'En visuell effekt', 'En datatype', 'En sikkerhetsmekanisme']},
    { id: 12, question: ' 12 Hva er formålet med en "function" i programmering?', options: ['Gjenbruk av kode', 'Lagring av data', 'Håndtering av feil', 'Nettverkskommunikasjon']},
    { id: 13, question: ' 13 Hva er en vanlig oppgave for en nettverksadministrator?', options: ['Konfigurasjon av rutere og svitsjer', 'Koding av nettsider', 'Installasjon av operativsystemer', 'Design av grafiske brukergrensesnitt']},
    { id: 14, question: ' 14 Hva er en "firewall"?', options: ['En sikkerhetsteknologi', 'En grafisk brukergrensesnitt', 'En datamaskin', 'En nettside']},
    { id: 15, question: ' 15 Hva står "LAN" for i nettverksterminologi?', options: ['Large Access Node', 'Local Area Network', 'Long Antenna Network', 'Logarithmic Access Number']}
  ];

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...quizAnswers];
    newAnswers[index] = event.target.value;
    setQuizAnswers(newAnswers);
  };

  const submitQuiz = async () => {
    try {
      const response = await axios.post('http://localhost:3000/quiz', { answers: quizAnswers });
      setQuizScore(response.data.score);
      setQuizResponses(response.data.responses);
      setQuizCompleted(true);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div className="quiz-container"> 
      <h1>Quiz</h1>
      {quizCompleted ? (
        <div>
          <p>Your score: {quizScore}/15</p>
          <h2>Responses:</h2>
          <ul>
            {quizResponses.map(response => (
              <li key={response.id}>
                Question {response.id}: {response.response}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {quizQuestions.map((question, index) => (
            <div key={question.id}>
              <p>{question.question}</p>
              {question.options.map(option => (
                <label key={option}>
                  <input 
                    type="radio" 
                    name={`question${question.id}`} 
                    value={option} 
                    checked={quizAnswers[index] === option} 
                    onChange={(event) => handleAnswerChange(index, event)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button onClick={submitQuiz}>Submit Quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;
