import React, { useState } from 'react';
import './csmodule.css';
import imagelogo from './imagelogo.svg';
import Login from './Login';


const Update = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const[message,setMessage]=useState('');
  

  const handleSignIn = (e) => {
    e.preventDefault();
    if(!newPassword || !confirmPassword)
    {
        setMessage("Please fill all fields");
        return;
    }

    

    if(newPassword!==confirmPassword)
    {
        setMessage("New Password do not match");
        return;
    }
    setMessage("Password updated successfully");
    setNewPassword("");
    setConfirmPassword("");
};
  return (

    <div className="container">
        {/* Top-right quarter circle */}
    <div className="corner-decor"></div>

    {/* Bottom-left dots */}
    <div className="dot-grid">
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
        <h2 className="login-title">Update Password</h2>
        <p className="login-subtitle">Please enter your Password here.</p>
        
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            placeholder="********"
             value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

       <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="********"
             value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="btn primary" onClick={handleSignIn} >Submit</button>
       
        <button className="btn outline" onClick={Login}>Back to Profile</button>
          </div>
          </div>
          <div className="footer">Â© TWAD Board 2025</div>
          </div>
          
          
        </div>
        
        
        
    
  );
}

  export default Update;