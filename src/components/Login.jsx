import React from 'react';
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <div className="mt-3 text-center">
              <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
              <p><Link to="/reset-password">Reset password</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
