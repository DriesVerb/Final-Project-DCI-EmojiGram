import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ProfileContext from '../../context/profile/profileContext';

import Icon from '../utils/Icon';

const TopNavbar = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const { logout, user, isAuthenticated } = authContext;
  const { clearProfile } = profileContext;

  const onLogout = () => {
    logout();
    clearProfile();
  };

  const userLinks = (
    <div className="user-nav">
      <div className="user-nav__user">
        <div className="user-nav__message">Hello</div>
        {user && (
          <Link to="/profile" className="user-nav__loaded">
            <div className="user-nav__name">
              {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
            </div>

            {user.avatar ? (
              <img className="user-nav__avatar " src={user.avatar} alt="" />
            ) : (
              <div className="user-nav__icon">
                <Icon name="user" color="grey" size="small" />
              </div>
            )}
          </Link>
        )}
      </div>
      <div className="user-nav__options">
        <Link to="/userInterface" className="user-nav__item">
          Dashboard
        </Link>
        <Link to="/profile" className="user-nav__item">
          Profile
        </Link>
        <div className="user-nav__item" onClick={onLogout}>
          Log Out
        </div>
      </div>
    </div>
  );
  const guestLinks = (
    <div className="guest-nav">
      <Link className="guest-nav__item" to="/login">
        Log In
      </Link>
      <Link className="guest-nav__item" to="/signup">
        Sign Up
      </Link>
    </div>
  );
  return <div className="app-grid__navbar top-nav">{isAuthenticated ? userLinks : guestLinks}</div>;
};

export default TopNavbar;
