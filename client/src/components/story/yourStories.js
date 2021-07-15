
  ////////////////////////////////////////////////
  import React, { useContext, useEffect } from "react";
  import StoryContext from "../../context/story/storyContext";
  import { useParams } from "react-router-dom";
  import PaginateComponent from "../utils/PaginateComponent";
  
function YourStories(props) {
    
    const storyContext = useContext(StoryContext);
    const { publishStory, stories } = storyContext;
    const { id } = useParams()
  
    useEffect(() => {
      publishStory(id);
      console.log(stories);
    }, []);
  
  
    return (
      <div className="grid-container">
        <div className="grid-container__mid">
          <PaginateComponent data={stories} perPage={5} />
        </div>
      </div>
    );
  }
  
  export default YourStories;
  



//       
