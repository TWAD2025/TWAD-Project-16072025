import React, { useState } from 'react';
import './UserRegistration.css';
 
const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    fullName: '',
    userTypeId: '',
    mobileNo: '',
    emailId: '',
    statementType: 1,
    password: '' // fixed as per stored procedure
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
 const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Server responded with ' + response.status);
    }

    const result = await response.text();
    alert(result);
  } catch (error) {
    alert('Something went wrong: ' + error.message);
  }
};
 
  return (
    <div className="user-form-container">
      <div className="user-form-header">User Registration</div>
 
      <div className="user-form-grid">
        <div className="form-group">
          <label>User Name</label>
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="--- Enter Value ---" />
        </div>
        <div className="form-group">
          <label>
            User Full Name <span className="required">*</span>
          </label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="--- Enter Value ---" />
        </div>
        <div className="form-group">
          <label>
            User Type <span className="required">*</span>
          </label>
          <select name="userTypeId" value={formData.userTypeId} onChange={handleChange}>
            <option value="">--- Enter Value ---</option>
            <option value="1">Admin</option>
            <option value="2">User</option>
            {/* Add more if needed */}
          </select>
        </div>
        <div className="form-group">
          <label>
            Mobile No <span className="required">*</span>
          </label>
          <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} placeholder="--- Enter Value ---" />
        </div>
        <div className="form-group">
          <label>
            Email Id <span className="required">*</span>
          </label>
          <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} placeholder="--- Enter Value ---" />
        </div>
        <div className="form-group">
          <label>
            Password <span className="required">*</span>
          </label>
          <input type="password" value="twad@123" disabled />
        </div>
      </div>
 
      <div className="user-form-buttons">
        <button className="btn-back" type="button">Back</button>
        <button className="btn-submit" type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
 
export default UserRegistrationForm;
 
 