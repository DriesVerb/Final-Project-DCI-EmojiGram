import React, { Fragment, useContext } from "react";
import {
  Navbar,
  NavLink,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
// import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ProfileContext from "../../context/profile/profileContext";

function navbar() {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const { logout, user, isAuthenticated } = authContext;
  const { clearProfile } = profileContext;

  const onLogout = () => {
    logout();
    clearProfile();
  };

  const userLinks = (
    <Fragment>
      <Nav style={{ maxHeight: "100px" }} navbarScroll>
        <li className="ml-2">
          <a className="nav-link" href="#!">
            Hello{" "}
            {user &&
              user.username.charAt(0).toUpperCase() + user.username.slice(1)}
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <NavDropdown title="" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/profile">
            <i className=" fas fa-cog" />
            Settings & Privacy
          </NavDropdown.Item>

          <NavDropdown.Item href="">
            <i className="fas fa-question-circle" /> Help & Support
          </NavDropdown.Item>
          <NavDropdown.Item onClick={onLogout} href="/login">
            <i className="fas fa-sign-out-alt" /> Logout
          </NavDropdown.Item>
        </NavDropdown>
        <NavLink to="/notification" className="ml-5">
          <i className="fas fa-bell text-info" /> Notification
        </NavLink>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <NavLink href="/UserInterface">
          <i className=" fas fa-cog text-info ml-5" />
          User
        </NavLink>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////   */}
        <NavLink to="/message">
          <i className="fas fa-envelope text-info ml-5" /> Messages
        </NavLink>
      </Nav>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Navbar>
        <Nav className="me-auto">
          <Nav.Link className="text-info" href="/login">
            LogIn
          </Nav.Link>
          <Nav.Link className="text-info" href="/signup">
            SignUp
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link> */}
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar bg="light" expand="lg" className="navbar app__navbar">
        <Navbar.Brand href="/" className="navbar__brand text-bold">
          Emoji-Tales
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="navbar">
            {isAuthenticated ? userLinks : guestLinks}
          </div>
          <Form className="d-flex ml-5 ">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-info ">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default navbar;
