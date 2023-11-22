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
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData) {
      if (
        loginData.username === storedUserData.username &&
        loginData.password === storedUserData.password
      ) {
        setLoginError('');
        console.log('Login successful!');
        // Navigate to LayoutHome on successful login do not use /LayoutHome it will not take you to the main site
        navigate('/');
      } else {
        setLoginError('feil brukernavn eller passord');
      }
    } else {
      setLoginError('ingen bruker funnet. prøv igjen eller signup for å få tilgang.');
    }
  };

  return (
    <div>
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
    </div>
    <button onClick={() => navigate('/signup')}>to signup </button>
    </div>
  );
};

export default LoginForm;
