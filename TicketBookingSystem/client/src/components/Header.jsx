import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-light bg-success">
      <div className="nav-brand">My Brand</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/register" className="navbar-link">
          Register
        </Link>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/places" className="navbar-link">
          Places
        </Link>
      </div>
    </nav>
  );
}

export default Header;
