import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for navigation
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate(); // Initialize navigate function
  const cookie = localStorage.getItem("cookie");

  const handleLogout = () => {
    // Clear the cookie from localStorage
    localStorage.removeItem("cookie");
    // Optionally, redirect the user to the login page or home page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-name">
        <p>Library Management System</p>
      </div>

      <div className="nav-links">
        {!cookie ? (
          <>
            <Link className="link-login" to="/login">
              Login
            </Link>
            <Link className="link-signup" to="/signup">
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link className="link-logout" to="#" onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
