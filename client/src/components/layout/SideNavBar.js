import React from 'react';
import { Nav } from 'react-bootstrap';

const SideNavBar = () => {
  return (
    <div className="app-grid__navbar--side">
      <div className="side-navbar">
        <Nav.Link className="side-navbar__link" href="/">
          Home Page
        </Nav.Link>
        <Nav.Link className="side-navbar__link" href="/genre">
          Genres
        </Nav.Link>
        <Nav.Link className="side-navbar__link" href="/about">
          About
        </Nav.Link>
        <Nav.Link className="side-navbar__link" href="/contact">
          Contact
        </Nav.Link>
      </div>
    </div>
  );
};

export default SideNavBar;
