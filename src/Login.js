// Login.js

import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/OrderFood');
  };
  const handleLogin1= () => {
    login();
    navigate('/admin');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button><br></br><br></br>
      <button onClick={handleLogin1}>Login for Admin</button>

    </div>
  );
};

export default Login;
