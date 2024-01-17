import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Insert.css';

function Delete() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/", {
          params: {
            page: 1,
            pageSize: 100
          }
        });
        if (response.data && response.data.data) {
          setUsers(response.data.data);
          if (response.data.data.length > 0) {
            setUserId(response.data.data[0].ElevID);
          }
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:3000/deleteuser`, { data: { id: userId } });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id='containerdelete'>
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          {users.map(user => (
            <option key={user.ElevID} value={user.ElevID}>
              {user.Fornavn} {user.Etternavn} (ID: {user.ElevID})
            </option>
          ))}
        </select>
      </label>
      <button type="submit" id='deletebutton'>Delete User</button>
    </form>
    </div>
  );
}

export default Delete;
