// SignUpForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    
    const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

    
    if (!Array.isArray(existingUsers)) {
      console.error('Invalid user data in localStorage. Resetting to an empty array.');
      localStorage.setItem('userData', JSON.stringify([]));
      return;
    }

   
    const isUsernameTaken = existingUsers.some(user => user.username === formData.username);

    if (isUsernameTaken) {
      console.log('Username is already taken. Please choose another one.');
    } else {
      
      const newUser = { ...formData };
      existingUsers.push(newUser);

      
      localStorage.setItem('userData', JSON.stringify(existingUsers));

      console.log('User registered successfully!');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      <button onClick={() => navigate('/login')}>to login</button>
    </div>
  );
};

export default SignUpForm;

