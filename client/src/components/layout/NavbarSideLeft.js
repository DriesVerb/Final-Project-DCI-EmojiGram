import React, { useState, Fragment } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const NavbarSideLeft = () => {
  const onChange = (e) => {
    setSort(e.target.innerText);
  };
  const [sort, setSort] = useState('Latest');
  return (
    <Fragment>
      <div className='left-sidebar'>
        <div className='left-sidebar__menu'>
          <NavDropdown title='Sorted by' id='basic-nav-dropdown'>
            <NavDropdown.Item onClick={onChange}>Latest</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Alphabet</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Most liked</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Most views</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={onChange}>Fantasy</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Romance</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Mystery</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Horror</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Thriller</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Western</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>SciFi</NavDropdown.Item>
          </NavDropdown>
        </div>
        {/* <div className='left-sidebar__footer'>
          <p>Footer</p>
          <br />
          <p>Facebook</p>
          <br />
          <p>Twitter</p>
        </div>{' '} */}
      </div>
    </Fragment>
  );
};

export default NavbarSideLeft;
