import React, { useState } from 'react';
import axios from 'axios';

function Delete() {
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Using axios.post and sending data in the body
      const response = await axios.post(`http://localhost:3000/deleteuser`, { id: userId });
      console.log(response.data);
      // Handle success (show success message, clear input, etc.)
    } catch (error) {
      console.error(error);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" />
      <button type="submit" id='deletebutton'>Delete User</button>
    </form>
  );
}

export default Delete;
