import React, { useContext, useEffect, useState, Fragment } from 'react';
import StoryContext from '../../context/story/storyContext';
import PaginateComponent from '../utils/PaginateComponent';
import AuthContext from '../../context/auth/authContext';
import NavBarSideLeft from '../layout/NavbarSideLeft';
function YourStories(props) {
  const storyContext = useContext(StoryContext);
  const { publishStory, stories } = storyContext;
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  useEffect(() => {
    publishStory(user._id);
    console.log(stories);
  }, [stories.length]);
  const component = 'showstory';
  return (
    <Fragment>
      <div className="grid-container">
        <sideNavBar className="left-yourStories">
          <NavBarSideLeft />
        </sideNavBar>
        <div className="grid-container__mid">
          <PaginateComponent data={stories} perPage={5} show={component} />
        </div>
      </div>
    </Fragment>
  );
}
export default YourStories;
