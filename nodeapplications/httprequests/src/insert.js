import React, { useState } from 'react';
import axios from 'axios';
// i insert under datamskin id så må du inserte 1,2 eller 3 for at det skal fungere siden sql databasen har 3 pc'er satt opp på de tallene og hvis du går høyere så vil den ikke før vi legger til flere
function Insert() {
  const [newUser, setNewUser] = useState({
    ElevID: '',
    Fornavn: '',
    Etternavn: '',
    DatamaskinID: '',
    Hobby: '',
    Klasse: '',
    Kjønn: ''
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/adduser', { params: newUser });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="Fornavn" value={newUser.Fornavn} onChange={handleChange} placeholder="Fornavn" />
      <input name="Etternavn" value={newUser.Etternavn} onChange={handleChange} placeholder="Etternavn" />
      <input name="DatamaskinID" value={newUser.DatamaskinID} onChange={handleChange} placeholder="DatamaskinID" />
      <input name="Hobby" value={newUser.Hobby} onChange={handleChange} placeholder="Hobby" />
      <input name="Klasse" value={newUser.Klasse} onChange={handleChange} placeholder="Klasse" />
      <input name="Kjonn" value={newUser.Kjonn} onChange={handleChange} placeholder="Kjønn" />
      <button type="submit">Add User</button>
    </form>
  );
}

export default Insert;
