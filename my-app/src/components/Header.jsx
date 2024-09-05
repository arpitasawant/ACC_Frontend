
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
      <h1 className="logo">ACC</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
