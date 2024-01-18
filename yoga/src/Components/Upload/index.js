// Main.js

import React, { useState } from 'react';
import AuthForm from '../AuthForm.js'
import LinkUploader from '../LinkUploader';

const Upload = () => {
    const [authenticated, setAuthenticated] = useState(false);
  
    const handleAuthenticate = (credentials) => {
      
      // Check if the provided credentials match the expected credentials
      if (
        credentials.username.trim() === process.env.REACT_APP_ExpectedUsername &&
        credentials.password === process.env.REACT_APP_ExpectedPassword
      ) {
        
        setAuthenticated(true);
      } else {
        alert('Invalid credentials. Please provide the correct username and password.');
      }
    };
  return (
    <div>
      {authenticated ? (
        <LinkUploader />
      ) : (
        <AuthForm onAuthenticate={handleAuthenticate} />
      )}
    </div>
  );
};

export default Upload;
