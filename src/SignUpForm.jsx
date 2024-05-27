import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css'; 

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    fullName: ''
  });

 
    const handleChange = (e) => {
      const { name, value } = e.target;
      
      // Validators for first name, middle name, last name, and phone number
      const nameRegex = /^[a-zA-Z\s]*$/;
      
      const phoneRegex = /^\d*$/;
    
      // Display alert if validators are violated
      if (
        (name === 'firstName' || name === 'middleName' || name === 'lastName') && 
        !nameRegex.test(value)
      ) {
        alert('Invalid characters. Only alphabets and spaces are allowed.');
        return;
      }
     
    
      if (name === 'phoneNumber' && !phoneRegex.test(value)) {
        alert('Invalid phone number. Only digits are allowed.');
        return;
      }
      if (name === 'phoneNumber' && value.length > 10) {
        alert('Phone number should not exceed 10 digits.');
        return;
      }
    
      // Update formData state
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
        fullName: (name === 'firstName' || name === 'middleName' || name === 'lastName') ?
          `${prevState.firstName} ${prevState.middleName} ${prevState.lastName}`.trim() : 
          prevState.fullName
      }));
    };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/signup', formData);
      console.log(response.data); 
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        fullName: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {formData.firstName && !/^[a-zA-Z\s]*$/.test(formData.firstName) && (
    <p className="error-message">Only letters and spaces are allowed</p>
  )}
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            required
          />
           {formData.middleName && !/^[a-zA-Z\s]*$/.test(formData.middleName) && (
           <p className="error-message">Only letters and spaces are allowed</p>
  )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {formData.lastName && !/^[a-zA-Z\s]*$/.test(formData.lastName) && (
    <p className="error-message">Only letters and spaces are allowed</p>
  )}
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
           
            
            
            onChange={handleChange}
            required
          />
           
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            maxLength="10"
            onChange={handleChange}
            required
          />
          {formData.phoneNumber && !/^\d*$/.test(formData.phoneNumber) && (
            <p className="error-message">Only digits are allowed</p>
          )}
           {formData.phoneNumber && !/^\d*$/.test(formData.phoneNumber) && (
    <p className="error-message">Only digits are allowed</p>
  )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
          {/* Login button */}
      <div className="login-link">
      <p style={{ color: '#000' }}>Already have an account? <a href="/Login">Login</a></p>
      </div>
      </form>
    </div>
  );
};

export default SignUpForm;
