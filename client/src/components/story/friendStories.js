////////////////////////////////////////////////
import React, { useContext, useEffect } from 'react';
import StoryContext from '../../context/story/storyContext';
import { useParams } from 'react-router-dom';
import PaginateComponent from '../utils/PaginateComponent';
import AuthContext from '../../context/auth/authContext';
function FriendStories(props) {
  const storyContext = useContext(StoryContext);
  const { friends, stories } = storyContext;

  const { id } = useParams();

  useEffect(() => {
    friends(id);

    console.log(stories);
  }, [stories.length]);

  const component = 'readpublicstory';

  return (
    <div className="grid-container">
      <div className="grid-container__mid">
        <PaginateComponent data={stories} perPage={5} show={component} />
      </div>
    </div>
  );
}

export default FriendStories;
