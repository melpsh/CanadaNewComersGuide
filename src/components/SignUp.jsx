import React, { useState } from 'react';
import firebase from '../firebaseConfig'; 
import { getAuth } from 'firebase/auth';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  console.log('firebaseeeeeeeeeeeee',firebase);
  console.log('authhhhhhhhhhh',getAuth);
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure that auth is defined before calling methods on it
      if (firebase.getAuth) {
        await firebase.getAuth().createUserWithEmailAndPassword(formData.email, formData.password);
        console.log('User registered successfully');
      } else {
        console.error('Authentication service not available');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
