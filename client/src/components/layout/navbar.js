import React, { Fragment, useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
      <div className="app__navbar">
        <Nav style={{ maxHeight: "100px" }} navbarScroll>
          <li className="ml-2">
            <a className="nav-link text-dark" href="#!">
              <p> Hello </p>
              {user && (
                <div>
                  <p>
                    {user.username.charAt(0).toUpperCase() +
                      user.username.slice(1)}
                  </p>{" "}
                  {/*{" "} <img
                    width="30px"
                    height="30px"
                    //  style =" width:30px  height:10px "
                    className="round-img"
                    src={user.avatar}
                    alt=""
                  /> */}
                </div>
              )}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <NavDropdown title="" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/profile">
              <i className=" fas fa-cog text-dark" />
              Settings & Privacy
            </NavDropdown.Item>

            <NavDropdown.Item href="">
              <i className="fas fa-question-circle text-dark" /> Help & Support
            </NavDropdown.Item>
            <NavDropdown.Item onClick={onLogout} href="/login">
              <i className="fas fa-sign-out-alt text-dark" /> Logout
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/notification" className="ml-5 text-dark">
            <i className="fas fa-bell" /> Notification
          </Nav.Link>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Nav.Link href="/UserInterface" className="text-dark">
            <i className=" fas fa-cog  ml-5" />
            Dashboard
          </Nav.Link>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////   */}
          <Nav.Link href="/message" className="text-dark">
            <i className="fas fa-envelope ml-5" /> Messages
          </Nav.Link>
        </Nav>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Navbar>
        <Nav>
          <i className=" fas fa-user ml-5 mt-2 justify-content-end" />
          <Nav.Link href="/login" className="text-dark ">
            LogIn
          </Nav.Link>
          <i className=" fas fa-sign-in-alt ml-5 mt-2 justify-content-end" />
          <Nav.Link href="/signup" className="text-dark ">
            SignUp
          </Nav.Link>
        </Nav>
      </Navbar>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar bg="warning" expand="lg" className="navbar app-grid__navbar mt-1">
        <Navbar.Brand href="/" className="navbar__brand text-bold">
          Emoji-Tales
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="navbar justify-content-end">
            {isAuthenticated ? userLinks : guestLinks}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default navbar;
