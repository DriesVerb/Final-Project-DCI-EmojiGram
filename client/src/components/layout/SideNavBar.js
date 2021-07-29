import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {
  return (
    <div className="app-grid__navbar--side">
      <div className="side-navbar">
        <Link to="/" className="side-navbar__link" href="/">
          Home
        </Link>
        <Link to="/genre" className="side-navbar__link" href="/genre">
          Genres
        </Link>
        <Link className="side-navbar__link" href="/genre">
          About
        </Link>
        <Link className="side-navbar__link" href="/genre">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default SideNavBar;
