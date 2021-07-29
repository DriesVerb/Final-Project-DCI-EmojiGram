import React, { useContext, useEffect, useState, Fragment } from "react";
import StoryContext from "../../context/story/storyContext";
import { useParams } from "react-router-dom";
import PaginateComponent from "../utils/PaginateComponent";
import AuthContext from "../../context/auth/authContext";
// import NavBarSideLeft from "../layout/NavbarSideLeft";

function YourStories(props) {
  const storyContext = useContext(StoryContext);
  const { publishStory, stories } = storyContext;
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  useEffect(() => {
    publishStory(user._id);
    console.log(stories);
  }, [stories.length]);
  const component = "showstory";
  return (
    <Fragment>
      <div className="grid-container">
        {/* <sideNavBar className="left-yourStories">
          <NavBarSideLeft />
        </sideNavBar> */}
        <div className="grid-container__mid your-stories__stories mt-1">
          <h3 className="your-stories__story mb-3 mt-3 text-center">
            My Stories
          </h3>
          <div className="your-stories__text mt-5mb-5">
            <p className="ml-2 mr-3">
              A story is the telling of an event, either true or fictional, in
              such a way that the listener experiences or learns something just
              by the fact that he heard the story.
            </p>
          </div>
        </div>
        <div className="your-stories__cards mt-3">
          <PaginateComponent data={stories} perPage={5} show={component} />
        </div>
      </div>
    </Fragment>
  );
}
export default YourStories;
