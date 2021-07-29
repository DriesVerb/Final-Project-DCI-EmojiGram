import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="app-grid__logo logo">
      <Link className="logo__link" to="/">
        EmojiTales
      </Link>
    </div>
  );
};

export default Logo;
