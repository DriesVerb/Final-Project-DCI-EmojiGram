import React from "react";
import { Nav } from "react-bootstrap";

const SideNavBar = () => {
  return (
    <div className="app__navbar--main side-navbar__flex">
      <div className="side-navbar">
        <Nav.Link className="side-navbar__link" href="/">
          Home
        </Nav.Link>
        <Nav.Link className="side-navbar__link" href="/genre">
          Genres
        </Nav.Link>
        <Nav.Link className="side-navbar__link" href="/genre">
          About
        </Nav.Link>
        <Nav.Link className="side-navbar__link" href="/genre">
          Contact
        </Nav.Link>
      </div>
    </div>
  );
};

export default SideNavBar;
