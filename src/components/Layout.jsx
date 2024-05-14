import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">New Comers Guide</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/* Add other navbar elements here */}
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
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
      <footer className="footer bg-light mt-5 py-3">
        <div className="container">
          <span className="text-muted">Contact us | About | Terms of Service | Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
