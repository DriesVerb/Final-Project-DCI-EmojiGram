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
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import ProfileContext from "../context/profile/profileContext";

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
      <Navbar bg="light" expand="lg" className="nav">
        <Navbar.Brand href="/" className=" brand text-bold">
          EmojiGram
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <li className="ml-2">
              <a className="nav-link" href="#!">
                Hello{" "}
                {user &&
                  user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
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
              <i className="fas fa-bell" /> Notification
            </NavLink>
            <NavLink to="/message">
              <i className="fas fa-envelope" /> Messages
            </NavLink>
          </Nav>
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

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/genre">Genre</Link>
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

export default navbar;
