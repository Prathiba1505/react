import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

function LoginPage({ onLogin, onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      
      const response = await axios.get('http://localhost:3000/user');

      const users = response.data;
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        setErrorMessage('');
        setUsername('');
        setPassword('');
        onLogin(); 
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login-background-box">
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>Don't have an account?</p>
        <button onClick={onSignup} className="signup-button">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
