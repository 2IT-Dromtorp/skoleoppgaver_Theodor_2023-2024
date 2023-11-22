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
    // Save data to localStorage remember to keep this if you change some other code as without it the login wil always say invalid as it uses the login information stored here to check if its correct without it the login is useless
    localStorage.setItem('userData', JSON.stringify(formData));
    console.log('Data saved successfully!');
  };
  return (
    <div>
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
          <input type="email" name="email" onChange={handleChange} /> {/*remember email is currently redundant as it doesent matter it wont send you anything and you dont even need a real email in this field but it looks good 
          another thing is it only saves 1 username and 1 password if you change it with signup then the current username and password will be seen as wrong and it will give the message feil brukernavn eller passord*/}
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit} >
          Sign Up
        </button> {/*the signup button works but doesent give any indication to that fact. use the login button to go to the login page to test if it succsessfully changed the username and password*/}
      </form>
    </div>
    <button onClick={() => navigate('/login')}>to login </button>
    </div>
  );
};

export default SignUpForm;
