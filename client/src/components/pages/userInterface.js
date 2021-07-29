import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

// components
import Icon from '../utils/Icon';

// Navbar user interface
function userInterface(props) {
  return (
    <div className="grid-container">
      
      <div className="grid-container__mid">
        <div className="user-interface__cards">
      
          <div
            className="user-card"
            onClick={(e) => {
              props.history.push(`/writestory`);
            }}
          >     
       
            <Icon
              className='user-card__icons'
              name='quill'
              color='blue'
              size='large'
            />
           

            <Link
              to='/writestory'
              className='user-card__linkuser'
              style={{ textDecoration: 'none' }}>
              
              <p className='user-card__title'>CREATE A STORY</p>
              <button className='btn user-card__btnUser'>
                Click 
              </button>
            </Link>
          </div>
          {/* <hr width="1" size="5rem"></hr> */}
          <div style={{
            width: "1px",/* Line width */
      backgroundColor: "gray", 
      height: "50%", 
            float: "left",
            margin: "5rem "     }}></div>
          <div
            className="user-card"
            onClick={(e) => {
              props.history.push(`/friendsWall`);
            }}
          >
            
            <Icon
              className='user-card__icons'
              name='users'
              color='blue'
              size='large'
            />
           
            <Link
              to='/friendsWall'
              className='user-card__linkuser'
              style={{ textDecoration: 'none' }}>
              <p className='user-card__title'>FRIENDS STORIES</p>
              <button className='btn user-card__btnUser' >
                Click 
              </button>
            </Link>
          </div>
          <div style={{
            width: "1px",/* Line width */
      backgroundColor: "gray", 
      height: "50%", 
            float: "left",
            margin: "3.5rem "}}></div>
           
          <div className='user-card'>
           
            <Icon
              className='user-card__icons'
              name='collections_bookmark'
              color='blue'
              size='large'
            />
            
            <Link
              to='/yourstories'
              className='user-card__linkuser'
              style={{ textDecoration: 'none' }}>
              <p className='user-card__title'> YOUR STORIES</p>
              <button className='btn user-card__btnUser'>
                Click 
              </button>
             
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default userInterface;
