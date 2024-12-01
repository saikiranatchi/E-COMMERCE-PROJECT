import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = ({ onRegister }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    console.log('Register button clicked');
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      console.log('Error: Missing fields');
      return;
    }
    else {
    console.log('Registration successful:', { name, email });
    onRegister();
    console.log('Navigating to /login...');
    navigate('/login');
    }
  };
  

  return (
    <div className="register-page">
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p>Already Have an account, Please <b><Link to={"/Login"}>Login</Link></b></p>
    </div>
  );
};

export default RegisterPage;