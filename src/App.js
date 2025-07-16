import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Update from './components/Update';
import UserRegistrationForm from './components/UserRegistrationForm';

 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Update" element={<Update/>} />
         <Route path="/UserRegistrationForm" element={<UserRegistrationForm/>} />
      </Routes>
    </Router>
  );
}
 
export default App;
 
