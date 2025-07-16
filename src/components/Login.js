import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './csmodule.css';
import imagelogo from './imagelogo.svg';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSignIn = (e) => {
    e.preventDefault();
    const form=e.target;
    navigate('/Dashboard');    

};
const handleForgotPassword = () => {
    navigate('/Update');}

  const handleReset = () => {
    setUsername('');
    setPassword('');
};
  return (
     <div className="container">
        {/* Top-right quarter circle */}
    <div className="corner-decor-login"></div>

    {/* Bottom-left dots */}
    <div className="dot-grid-login">
      {Array.from({ length: 88 }).map((_, i) => (
        <div key={i} className="dot" />
      ))}
    </div>
      <div className="left">
            <div className='backimage'>
        <div className='foreimage'>
        <img src={imagelogo} alt="Above Logo"/>
        </div>
        </div>
      </div>
      <div className="right">
      <div className="login-container">
        <div className="login-box">
        <h2 className="login-title">Sign in</h2>
        <p className="login-subtitle">Please enter your Login details.</p>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
             value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
       <div className="forgot-btn">
            <button type="button" className="forgot-btn" onClick={handleForgotPassword}>
              Forgot password?
            </button>
          </div>
       <button className="btn primary-login" onClick={handleSignIn} >Sign in</button>
        <button className="btn outline" onClick={handleReset}>Reset</button>
          </div>
          </div>
          
          </div>
          
          </div>
        </div>
        
    
  );
}

  export default Login;