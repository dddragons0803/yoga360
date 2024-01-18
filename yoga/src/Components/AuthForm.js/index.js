// AuthForm.js

import React, { useState } from 'react';
import './authform.css';

const AuthForm = ({ onAuthenticate }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleAuthenticate = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    // For simplicity, just pass the credentials to the parent component
    onAuthenticate(credentials);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div className='authenticationform'>
    <form onSubmit={handleAuthenticate}>
      <label>
        Username:
        <input type="text" name="username" value={credentials.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={credentials.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Authenticate</button>
    </form>
    </div>
  );
};

export default AuthForm;
