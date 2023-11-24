import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
  });
  const [signupError, setSignupError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    try {
      // Send signupData to the server
      const response = await axios.post('/api/signup', signupData);

      // Handle successful registration on the server
      console.log('User registered successfully:', response.data);
      navigate('/login');
    } catch (error) {
      // Handle registration error
      setSignupError(error.response.data.error || 'Error during registration');
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
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
      <button onClick={() => navigate('/login')}>to login</button>
    </div>
  );
};

export default SignupForm;
