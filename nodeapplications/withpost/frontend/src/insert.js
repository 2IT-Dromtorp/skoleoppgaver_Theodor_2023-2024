import React, { useState } from 'react';
import axios from 'axios';
import './Insert.css';

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
      const response = await axios.post('http://localhost:3000/adduser', newUser);
      console.log(response.data);
      // Handle success (e.g., clear form, show success message)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div id='container'>
    <form onSubmit={handleSubmit} className="insert-form">
      <input className="form-field" name="Fornavn" value={newUser.Fornavn} onChange={handleChange} placeholder="Fornavn" />
      <input className="form-field" name="Etternavn" value={newUser.Etternavn} onChange={handleChange} placeholder="Etternavn" />
      <input className="form-field" name="DatamaskinID" value={newUser.DatamaskinID} onChange={handleChange} placeholder="DatamaskinID" />
      <input className="form-field" name="Hobby" value={newUser.Hobby} onChange={handleChange} placeholder="Hobby" />
      <input className="form-field" name="Klasse" value={newUser.Klasse} onChange={handleChange} placeholder="Klasse" />
      <input className="form-field" name="Kjonn" value={newUser.Kjonn} onChange={handleChange} placeholder="Kjønn" />
      <button className="form-button" type="submit">Add User</button>
    </form>
    </div>
  );
}

export default Insert;
