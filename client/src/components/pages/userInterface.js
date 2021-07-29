import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

// components
import Icon from '../utils/Icon';

// Navbar user interface
function userInterface(props) {
  return (
    <div className='grid-container'>
      <div className='grid-container__mid'>
        <div className='grid-container'>


        </div>
        <div className='user-interface__cards'>
          <div
            className='user-card'
            onClick={(e) => {
              props.history.push(`/writestory`);
            }}>
            <Icon
              className='user-card__iconsOne'
              name='quill'
              color='blue'
              size='x-large'
            />
            <p className='user-card__titleOne'>CREATE YOUR STORY</p>

            <Link to='/writestory' className='link'>
              <button className='btn btn-success user-card__btnOne'>
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
