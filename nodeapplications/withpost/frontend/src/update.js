import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Insert.css';

export default function UpdateUserForm() {
  const [users, setUsers] = useState([]);
  const [newHobby, setNewHobby] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedUserFornavn, setSelectedUserFornavn] = useState('');
  const [selectedUserEtternavn, setSelectedUserEtternavn] = useState('');
  const [selectedUserKlasse, setSelectedUserKlasse] = useState('');
  const [selectedUserKjonn, setSelectedUserKjonn] = useState('');
  const [selectedUserDatamaskinID, setSelectedUserDatamaskinID] = useState('');

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
            setSelectedUserId(response.data.data[0].ElevID);
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

  const clearFields = () => {
    setNewHobby('');
    setSelectedUserId('');
    setSelectedUserFornavn('');
    setSelectedUserEtternavn('');
    setSelectedUserKlasse('');
    setSelectedUserKjonn('');
    setSelectedUserDatamaskinID('');
  };

  const handleUserChange = (e) => {
    const selectedUser = users.find(user => user.ElevID === e.target.value);
    if (selectedUser) {
      setSelectedUserId(selectedUser.ElevID);
      setSelectedUserFornavn(selectedUser.Fornavn);
      setSelectedUserEtternavn(selectedUser.Etternavn);
      setSelectedUserKlasse(selectedUser.Klasse);
      setSelectedUserKjonn(selectedUser.Kjonn);
      setSelectedUserDatamaskinID(selectedUser.DatamaskinID);
    } else {
      clearFields();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/updateuser`, {
        newhobby: newHobby,
        id: selectedUserId,
        fornavn: selectedUserFornavn,
        etternavn: selectedUserEtternavn,
        klasse: selectedUserKlasse,
        kjonn: selectedUserKjonn,
        datamaskinID: selectedUserDatamaskinID
      });
      alert('User updated successfully!');
      console.log(response.data);
      clearFields(); 
    } catch (error) {
      console.error('There was an error updating the user!', error);
    }
  };

  return (
    <div id='containerupdate'>
      <h2>Update User Hobby</h2>
      <form onSubmit={handleSubmit}>
        <div>
          User ID:
          <select
            value={selectedUserId}
            onChange={handleUserChange}
          >
            {users.map(user => (
              <option key={user.ElevID} value={user.ElevID}>
                {user.Fornavn} {user.Etternavn} (ID: {user.ElevID})
              </option>
            ))}
          </select>
        </div>
        <br />
        <input
          type="text"
          placeholder="Fornavn"
          value={selectedUserFornavn}
          onChange={(e) => setSelectedUserFornavn(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Etternavn"
          value={selectedUserEtternavn}
          onChange={(e) => setSelectedUserEtternavn(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="DatamaskinID må være tall 1-3"
          value={selectedUserDatamaskinID}
          onChange={(e) => setSelectedUserDatamaskinID(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Hobby"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Klasse må være tall 1-4"
          value={selectedUserKlasse}
          onChange={(e) => setSelectedUserKlasse(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Kjonn"
          value={selectedUserKjonn}
          onChange={(e) => setSelectedUserKjonn(e.target.value)}
        />
        <br />
        <button type="submit" id='updatebutton'>Update</button>
      </form>
    </div>
  );
}
