import React, { useState } from 'react';
import axios from 'axios';

function Delete() {
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/deleteuser`, { params: { id: userId } });
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
      <button type="submit">Delete User</button>
    </form>
  );
}

export default Delete;
