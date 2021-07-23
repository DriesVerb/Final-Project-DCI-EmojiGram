import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  Grid,
} from "@material-ui/core";

import AuthContext from "../../context/auth/authContext";
import ProfileContext from "../../context/profile/profileContext";

import { Nav, NavDropdown } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  },
  btn: {
    background: "#ffb703",
    "&:hover": {
      background: "#44cf6c",
    },
  },
}));

function Header() {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const classes = useStyles(); // can only be called inside a function
  const { logout, user, isAuthenticated } = authContext;
  const { clearProfile } = profileContext;

  const onLogout = () => {
    logout();
    clearProfile();
  };
  const userLinks = (
    <Fragment>
      <Nav style={{ maxHeight: "100px" }} navbarScroll>
        <li>
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
        <Nav.Link href="/notification" className="ml-5">
          <i className="fas fa-bell" /> Notification
        </Nav.Link>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Nav.Link href="/UserInterface">
          <i className=" fas fa-user ml-5" />
          User
        </Nav.Link>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////   */}
        <Nav.Link href="/message">
          <i className="fas fa-envelope ml-5" /> Messages
        </Nav.Link>
      </Nav>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Button className={classes.btn} href="/login" color="inherit">
        <i className=" fas fa-user mr-2 mt-1" />
        LogIn
      </Button>
      <Button className={classes.btn} href="/signup" color="inherit">
        <i className=" fas fa-sign-in-alt  mr-2 mt-1" />
        SignUp
      </Button>
    </Fragment>
  );

  return (
    <div className="app__navbar">
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            <AppBar
              position="fixed"
              // display="flex"
              style={{
                background: "#ffb703",
                // height: "5rem",
                // width: "65.5%",
              }}
              className="app__navbar "
            >
              <Toolbar>
                <Typography variant="h2" className={classes.title}>
                  <Link
                    className="appLogo "
                    href="/"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "40px",
                    }}
                  >
                    Emoji-Tales
                  </Link>
                </Typography>
                <div className="navbar">
                  {isAuthenticated ? userLinks : guestLinks}
                </div>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Header;
