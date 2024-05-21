import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <Link className="navbar-brand" to="/">New Comers Guide</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/* Add other navbar elements here */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li> */}
              {/* Add more navbar links as needed */}
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Main content */}
      <div className="container mt-5">
        {children}
      </div>
      
      {/* Footer */}
      <footer className="footer-custom">
        <div className="container text-center py-3">
          <span className="text-muted">Contact us | About | Terms of Service | Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
