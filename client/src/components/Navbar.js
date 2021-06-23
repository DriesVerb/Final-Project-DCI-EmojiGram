import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

function Navbar() {
  const authContext = useContext(AuthContext);

  const { logout, user, isAuthenticated } = authContext;

  const onLogout = () => {
    logout();
  };

  const userLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" /> <span>Logout</span>
        </a>
      </li>
      <li className="nav-item">
        <Link to="/writestory">Write a Story</Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/signup">Sign Up</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <Link to="/"></Link>

        {isAuthenticated ? userLinks : guestLinks}
      </ul>
    </div>
  );
}

export default Navbar;
