import React, { Fragment, useContext, useEffect } from "react";

import EmojiCTA from "../story/EmojiCTA";

import AuthContext from "../../context/auth/authContext";

const HomePublic = () => {
  //////should be where we want to redirect after log in ////
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  return (
    <div>
      <h1>Home Public</h1>
      <EmojiCTA />
    </div>
  );
};

export default HomePublic;
