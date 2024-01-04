// Importerer nødvendige React-hooks og komponenter
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './footer';  // Anta at dette er korrekt, men det kan være en feil i filbanen

// Importerer en annen Navbar-komponent
import TopNavbar from './topnavbar';

// ticket-komponenten tar imot props for å vise og håndtere billetter
const Ticket = ({ id, description, completed, onComplete, onRemove, onEdit }) => {
  // Tilstand for å håndtere redigering av billettbeskrivelsen
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  // Håndterer starten av redigeringsprosessen
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Lagrer endringene etter redigering
  const handleSave = () => {
    onEdit(id, editedDescription);
    setIsEditing(false);
  };

  // Avbryter redigering og tilbakestiller beskrivelsen til den opprinnelige
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedDescription(description);
  };

  return (
    <div className={`ticket ${completed ? 'completed' : 'incomplete'}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Lagre</button>
          <button onClick={handleCancelEdit}>Avbryt</button>
        </>
      ) : (
        <>
          <h3>{description}</h3>
          <p>Status: {completed ? 'Fullført' : 'Ufullført'}</p>
          <button onClick={() => onComplete(id)}>
            {completed ? 'Merk som Ufullført' : 'Merk som Fullført'}
          </button>
          <button onClick={handleEdit} disabled={completed}>
            Rediger
          </button>
          <button onClick={() => onRemove(id)}>Fjern</button>
        </>
      )}
    </div>
  );
};

// ErrorBoundary overvåker for feil i komponentene
const ErrorBoundary = ({ children, onError }) => {
  const [error, setError] = useState(null);

  // Håndterer feil som oppstår i children
  const componentDidCatch = (error, errorInfo) => {
    setError(error);
    onError(error, errorInfo);
  };

  // Viser feilmelding hvis det oppstår en feil
  if (error) {
    return (
      <div className="error">
        <h2>Feil oppstått:</h2>
        <p>{error.toString()}</p>
      </div>
    );
  }

  return children;
};

// Hovedappen som inneholder hele billettsystemet
const App = () => {
  // Tilstand for å lagre billettene og den nye billettbeskrivelsen
  const [tickets, setTickets] = useState(() => {
    const storedTickets = localStorage.getItem('tickets');
    return storedTickets ? JSON.parse(storedTickets) : [];
  });

  const [newTicketDescription, setNewTicketDescription] = useState('');

  // Håndterer fullføring av en billett
  const handleComplete = (ticketId) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, completed: !ticket.completed } : ticket
      )
    );
  };

  // Håndterer tillegg av en ny billett
  const handleAddTicket = () => {
    if (newTicketDescription.trim() !== '') {
      const newTicket = {
        id: tickets.length + 1,
        description: newTicketDescription,
        completed: false,
      };

      setTickets((prevTickets) => [...prevTickets, newTicket]);
      setNewTicketDescription('');
    }
  };

  // Håndterer fjerning av en billett
  const handleRemoveTicket = (ticketId) => {
    setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== ticketId));
  };

  // Håndterer redigering av en billettbeskrivelse
  const handleEditTicket = (ticketId, newDescription) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, description: newDescription } : ticket
      )
    );
  };

  // Lagrer billettdataen i localStorage når det skjer endringer
  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  // Håndterer feil og viser en feilmelding
  const handleOnError = (error, errorInfo) => {
    console.error('Feil:', error);
    console.error('Feil Info:', errorInfo);
  };

  return (
    <>
      <TopNavbar />
      <div className="container">
        <h1>Billettsystem</h1>
        <div className="form">
          <label htmlFor="newTicket">Ny Billett:</label>
          <input
            type="text"
            id="newTicket"
            value={newTicketDescription}
            onChange={(e) => setNewTicketDescription(e.target.value)}
          />
          <button onClick={handleAddTicket}>Legg til Billett</button>
        </div>
        {/* ErrorBoundary brukes her for å håndtere feil i billett-komponentene */}
        <ErrorBoundary onError={handleOnError}>
          {tickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              {...ticket}
              onComplete={handleComplete}
              onRemove={handleRemoveTicket}
              onEdit={handleEditTicket}
            />
          ))}
        </ErrorBoundary>
      </div>
      <Navbar />
    </>
  );
};

export default App;
