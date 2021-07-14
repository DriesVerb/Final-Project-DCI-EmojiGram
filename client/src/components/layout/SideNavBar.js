import React from "react";
import { Nav } from "react-bootstrap";

const SideNavBar = () => {
  return (
    <div className="app__side-navbar">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/genre">Genres</Nav.Link>
    </div>
  );
};

export default SideNavBar;
