import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

export default function HomeLayout() {
  const navigate = useNavigate();
  return (
    <div className="Home_container">
      <button onClick={() => navigate('/login')} className="button top-right">login</button>     
      <button onClick={() => navigate('/courses')} className="button bottom-right">kurs</button>
      <div>
        <h1>velkommen</h1>
      </div>
    </div>
  );
}


