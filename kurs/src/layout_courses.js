import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Courses(){
    const navigate = useNavigate();
        return (
    <div className="coursebox">
      <button onClick={() => navigate('/')} className="top-right-button-courses">Top Right</button>
      <div className="middle-buttons-courses">
        <button onClick={() => navigate('/datakunnskap')} className="middle-button-courses">Grunnleggende datakunnskap</button>
        <button onClick={() => navigate('/norsk')} className="middle-button-courses">Norsk</button>
        <button onClick={() => navigate('/heimkunnskap')} className="middle-button-courses">Heimkunnskap</button>
        <button onClick={() => navigate('/kroppsøving')} className="middle-button-courses">Kroppsøving</button>
      </div>
    </div>
  );    
};


