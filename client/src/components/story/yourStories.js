////////////////////////////////////////////////
import React, { useContext, useEffect } from "react";
import StoryContext from "../../context/story/storyContext";
import PaginateComponent from "../utils/PaginateComponent";
import AuthContext from "../../context/auth/authContext";

function YourStories() {
  const storyContext = useContext(StoryContext);
  const { publishStory, stories } = storyContext;
  const authContext = useContext(AuthContext);
  const { user } = authContext;


  const component = "showstory"

  useEffect(() => {
    publishStory(user._id);
  }, []);

  return (
    <div className="grid-container">
      <div className="grid-container__mid">
        <PaginateComponent data={stories} perPage={5} show={component}/>
      </div>
    </div>
  );
}

export default YourStories;

//
