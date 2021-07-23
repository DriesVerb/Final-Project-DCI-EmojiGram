import React, { useContext } from 'react';
import Images from '../../img/minions1.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

// components
import Icon from '../utils/Icon';

// Navbar user interface
function userInterface(props) {
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  // let history = useHistory();

<<<<<<< HEAD
  const toMyStories = (id) => {
    props.history.push(`/yourstories/${id}`);
    console.log(id);
  };
=======
 /*  const toMyStories = (id) => {
    
    props.history.push(`/yourstories/${id}`);
    console.log(id)
  }; */
>>>>>>> 22d8dcb71eea53e763c3aa91484c7d6ec11a580e

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
            <Icon name="quill" color="blue" size="large" />
            <p className="user-card__title">CREATE YOUR STORY</p>

            <Link to="/writestory" className="link">
              <button className="btn btn-success user-card__btn">
                Click to Create
              </button>
            </Link>
          </div>

          <div
            className="user-card"
            onClick={(e) => {
              props.history.push(`/friendsWall`);
            }}
          >
            <Icon name="users" color="blue" size="large" />
            <p className="user-card__title">READ FRIENDS STORIES</p>
            <Link to="/friendsWall" className="link">
              <button className="btn btn-success user-card__btn">
                Click to Access
              </button>
            </Link>
          </div>
          <div className="user-card" onClick={() => toMyStories(user._id)}>
            <Icon name="collections_bookmark" color="blue" size="large" />
            <p className="user-card__title">ACCESS YOUR STORIES</p>
<<<<<<< HEAD
            <div onClick={() => toMyStories(user._id)} className="link">
=======
            <Link to="/yourstories" className="link">
           {/*  <div   className="link"> */}
>>>>>>> 22d8dcb71eea53e763c3aa91484c7d6ec11a580e
              <button className="btn btn-success user-card__btn">
                Click to Access
              </button>
           {/*  </div> */}
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default userInterface;
