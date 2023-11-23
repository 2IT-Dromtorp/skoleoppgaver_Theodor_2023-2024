// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Retrieve existing user data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // Check if existingUsers is an array
    if (!Array.isArray(existingUsers)) {
      console.error('Invalid user data in localStorage. Resetting to an empty array.');
      localStorage.setItem('userData', JSON.stringify([]));
      return;
    }

    // Find user with matching username and password
    const user = existingUsers.find(
      (u) => u.username === loginData.username && u.password === loginData.password
    );

    if (user) {
      console.log(user);
      setLoginError('');
      console.log('Login successful!');
      // Navigate to LayoutHome on successful login do not use /LayoutHome it will not take you to the main site
      navigate('/'+loginData.username);
    } else {
      setLoginError('Wrong username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <button onClick={() => navigate('/signup')}>to signup</button>
    </div>
  );
};

export default LoginForm;

