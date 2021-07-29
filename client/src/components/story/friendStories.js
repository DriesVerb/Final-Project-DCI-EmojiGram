////////////////////////////////////////////////
import React, { useContext, useEffect } from "react";
import StoryContext from "../../context/story/storyContext";
import { useParams } from "react-router-dom";
import PaginateComponent from "../utils/PaginateComponent";
import AuthContext from "../../context/auth/authContext";

import ProfileContext from "../../context/profile/profileContext";
// import NavBarSideLeft from "../layout/NavbarSideLeft";

function FriendStories(props) {
  const storyContext = useContext(StoryContext);
  const { friends, stories } = storyContext;

  const profileContext = useContext(ProfileContext);
  const { users, getUserProfile } = profileContext;
  const { username } = users;

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const { id } = useParams();

  useEffect(() => {
    friends(id);
    getUserProfile(id);
    console.log(stories);
  }, [stories.length]);

  const component = "readpublicstory";

  return (
    <div className="grid-container">
      <div className="grid-container__mid">
        {username && (
          <h2 className=" story text-center mb-3 bg-info text-white">
            {username.charAt(0).toUpperCase() + username.slice(1)}'s Stories
          </h2>
        )}

        {/* <sideNavBar className="left-yourStories">
          <NavBarSideLeft />
        </sideNavBar> */}
        <div className="grid-container__mid">
          <PaginateComponent data={stories} perPage={5} show={component} />
        </div>
      </div>
    </div>
  );
}

export default FriendStories;
