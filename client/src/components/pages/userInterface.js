import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

// components
import Icon from '../utils/Icon';

// Navbar user interface
function userInterface(props) {
  return (
    <div className='grid-container'>
      <h3 className='header-interface'>Read Different Think Different</h3>
      <div className='grid-container__mid'>
        <div className='grid-container__interface'>
          <sideNavBar>
            <SideNavBar />
          </sideNavBar>

        </div>
        <div className='user-interface__cards'>
          <div
            className='user-card'
            onClick={(e) => {
              props.history.push(`/writestory`);
            }}>
            <Icon
              className='user-card__icons'
              name='quill'
              color='blue'
              size='large'
            />
            <p className='user-card__title'>CREATE YOUR STORY</p>

            <Link to='/writestory' className='link'>
              <button className='btn btn-success user-card__btn'>
                Click to Create
              </button>
            </Link>
          </div>
          <div
            className='user-card'
            onClick={(e) => {
              props.history.push(`/friendsWall`);
            }}>
            <Icon
              className='user-card__icons'
              name='users'
              color='blue'
              // size='large'
            />
            <p className='user-card__title'>READ FRIENDS STORIES</p>
            <Link to='/friendsWall' className='link'>
              <button className='btn btn-success user-card__btn'>
                Click to Access
              </button>
            </Link>
          </div>
          <div className='user-card'>
            <Icon
              className='user-card__icons'
              name='collections_bookmark'
              color='blue'
              size='large'
            />
            <p className='user-card__title'>ACCESS YOUR STORIES</p>
            <Link to='/yourstories' className='link'>
              <button className='btn btn-success user-card__btn'>
                Click to Access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default userInterface;
