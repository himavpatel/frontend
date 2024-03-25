
import React, { useState } from 'react';
import Navbar from '../Navbar'
import './Login.css'
import image from "../Assets/1.jpg"; 
import axios from 'axios';

function RegisterForm({ onRegister }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/register', { email, username, password });
      console.log(response.data);
      onRegister({ email, username, password });
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };
  
  return (
    <div className="patient-form">
    <div className='box'>
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
      <label>Email ID:</label>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
      <label>Username:</label>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br/>
      <label>Password:</label>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
     
      <button type="submit">Register</button>
    </form>
    </div>
    </div>
   
  );
}

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // onLogin({ username, password });
    try {
      const response = await axios.post('http://localhost:3002/login', { username, password });
      console.log(response.data);
      onLogin({ username, password });
    } catch (error) {
      console.error('Login failed:', error.response.data);
      alert('Incorrect username or password. Please try again.');
    }
  };

  return (
   
    <div className="patient-form">
    <div className='box'>
    <form onSubmit={handleLogin}>
      <label>Username:</label><br/>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br/>
      <label>Password:</label><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
      <button type="submit">Login</button>
    </form>
    </div>
    </div>
   
  );
}

function LoginPage() {
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegister = async (userData) => { 
    console.log("Register:", userData);
    setRegistered(true);
  };

  const handleLogin = async (userData) => {
    console.log("Login:", userData);
    setLoggedIn(true);
    window.location.href = 'http://localhost:3000/';
    alert('Logged in successfully!');
  };

  return (
    <>
    <Navbar />
    <div className='login' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" ,height:"680px", width:"1518px"}}>
    <div>
    {loggedIn ? (
          <h2>Welcome to the Home Page</h2>
        ) : (
    <div>
      {registered ? (
        <div>
          <h2>Login</h2>
          <LoginForm onLogin={handleLogin} />
        </div>
      ) : (
        <div>
          
          <RegisterForm onRegister={handleRegister} />
        </div>
      )}
    </div>
    )}
    </div>
    </div>
    </>
  );
}

export default LoginPage;
