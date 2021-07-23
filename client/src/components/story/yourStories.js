////////////////////////////////////////////////
import React, { useContext, useEffect } from 'react';
import StoryContext from '../../context/story/storyContext';
import { useParams } from 'react-router-dom';
import PaginateComponent from '../utils/PaginateComponent';
import AuthContext from '../../context/auth/authContext';

function YourStories(props) {
  const storyContext = useContext(StoryContext);
  const { publishStory, stories } = storyContext;
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const component = 'readpublicstory';

  useEffect(() => {
    publishStory(user._id);
    console.log(stories);
  }, [stories.length]);

  const component = 'showstory';

  return (
    <div className="grid-container">
      <div className="grid-container__mid">
        <PaginateComponent data={stories} perPage={5} show={component} />
      </div>
    </div>
  );
}

export default YourStories;
