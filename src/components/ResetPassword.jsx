import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const ResetPassword = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center">Reset Password</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Enter the email that you registered with</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <Link to="/forgot-email">Forgot your email?</Link>
              </div>
              <button type="submit" className="btn btn-primary">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
