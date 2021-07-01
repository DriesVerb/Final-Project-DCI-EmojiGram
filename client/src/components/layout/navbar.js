<<<<<<< HEAD:client/src/components/Navbar.js
import React, { Fragment, useContext } from 'react';
=======
import { STATES } from "mongoose";
import React, { Fragment, useContext, useEffect } from "react";
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae:client/src/components/layout/navbar.js
import {
  Navbar,
  NavLink,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
<<<<<<< HEAD:client/src/components/Navbar.js
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import ProfileContext from '../context/profile/profileContext';
=======
} from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ProfileContext from "../../context/profile/profileContext";
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae:client/src/components/layout/navbar.js

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
      <Navbar bg='light' expand='lg' className='nav'>
        <Navbar.Brand href='/' className=' brand text-bold'>
          EmojiGram
        </Navbar.Brand>
<<<<<<< HEAD:client/src/components/Navbar.js
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav style={{ maxHeight: '100px' }} navbarScroll>
            <li className='ml-2'>
              <a className='nav-link' href='#!'>
                Hello{' '}
                {user &&
                  user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
                <span className='sr-only'>(current)</span>
=======
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <li className="ml-2">
              <a className="nav-link" href="#!">
                Hello{"   "}
                {user &&
                  user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
              
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae:client/src/components/layout/navbar.js
              </a>
            </li>
            <NavDropdown title='' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='/profile'>
                <i className=' fas fa-cog' />
                Settings & Privacy
              </NavDropdown.Item>
              <NavDropdown.Item href=''>
                <i className='fas fa-question-circle' /> Help & Support
              </NavDropdown.Item>
<<<<<<< HEAD:client/src/components/Navbar.js
              <NavDropdown.Item onClick={onLogout} href='/login'>
                <i className='fas fa-sign-out-alt' /> Logout
=======
              <NavDropdown.Item onClick={onLogout} href="/login">
                <i className="fas fa-sign-out-alt" /> Logout
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae:client/src/components/layout/navbar.js
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to='/notification' className='ml-5'>
              <i className='fas fa-bell' /> Notification
            </NavLink>
            <NavLink to='/message'>
              <i className='fas fa-envelope' /> Messages
            </NavLink>
          </Nav>
          <Form className='d-flex ml-5 '>
            <FormControl
              type='search'
              placeholder='Search'
              className='mr-2'
              aria-label='Search'
            />
            <Button variant='outline-info '>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link to='/'>Home</Link>
      </li>
<<<<<<< HEAD:client/src/components/Navbar.js
      <li className='nav-item'>
        <Link to='/login'>Login</Link>
=======
      <li className="nav-item">
        <Link to="/genre">Genre</Link>
      </li>
      <li className="nav-item">
        <Link to="/login">Login</Link>
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae:client/src/components/layout/navbar.js
      </li>
      <li className='nav-item'>
        <Link to='/signup'>Sign Up</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <Link to='/'></Link>

        {isAuthenticated ? userLinks : guestLinks}
      </ul>
    </div>
  );
}

export default navbar;
