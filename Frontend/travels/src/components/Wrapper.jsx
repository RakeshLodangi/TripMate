import React from "react";
import { NavLink } from "react-router-dom";
import "./Wrapper.css";

const Wrapper = ({ handleLogout, token, children }) => {
  const logout = () => {
    handleLogout();
  };
  return (
    <div className="wrapper">
      <header className="navbar">
        <h1 className="logo">TripMate</h1>
        <nav>
          {token ? (
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-bookings"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  My Bookings
                </NavLink>
              </li>
              <li>
                <button className="btn logout" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <div className="auth-links">
              <NavLink to="/login" className="btn login">
                Login
              </NavLink>
              <NavLink to="/register" className="btn register">
                Register
              </NavLink>
            </div>
          )}
        </nav>
      </header>

      <main className="content">{children}</main>
    </div>
  );
};

export default Wrapper;
