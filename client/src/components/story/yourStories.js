import React, { useContext, useEffect } from "react";
import StoryContext from "../../context/story/storyContext";

import PaginateComponent from "../../utils/PaginateComponent";

function YourStories(props) {

  const storyContext = useContext(StoryContext);
  const { publishStory, stories, addLike} = storyContext;


  useEffect(() => {

    publishStory()
    console.log(stories)
 
  }, []);// 



  return (
    <div>
      <PaginateComponent data={stories} perPage={5} />
    </div>
  );
}

export default YourStories;
