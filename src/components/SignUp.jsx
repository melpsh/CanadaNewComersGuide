import React, { useState } from 'react';
import firebase from '../firebaseConfig'; 
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Layout from './Layout';

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
    // try {
    //   await auth.createUserWithEmailAndPassword(formData.email, formData.password);
    //   console.log('User registered successfully');
    // } catch (error) {
    //   console.error('Registration failed:', error);
    // }
  };
  

  return (
    <Layout>
          <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
            <div className="mt-3 text-center">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Layout>

  );
};

export default SignUp;
