import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

export default function Home() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div>
      <div className="buttonContainer">
        <button className='button' onClick={() => handleButtonClick('select')}>Select</button>
        <button className='button' onClick={() => handleButtonClick('update')}>Update</button>
        <button className='button' onClick={() => handleButtonClick('insert')}>Insert</button>
        <button className='button' onClick={() => handleButtonClick('delete')}>Delete</button>
      </div>

      <div className='requestContainer'>
        {activeButton === 'select' && <h1>Get-request</h1>}
        {activeButton === 'update' && <h1>Put-request</h1>}
        {activeButton === 'insert' && <h1>Post-request</h1>}
        {activeButton === 'delete' && <h1>Delete-request</h1>}
      </div>
    </div>
  );
}
