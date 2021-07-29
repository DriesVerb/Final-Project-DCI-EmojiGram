import React, { useContext, useEffect, useState } from 'react';
import StoryContext from '../../context/story/storyContext';
import { NavDropdown } from 'react-bootstrap';

// Components
import PaginateComponent from '../utils/PaginateComponent';
// import StoryCardSmall from "../story/StoryCardSmall";
import EmojiCTA from '../story/EmojiCTA';
const PublicLandingPage = () => {
  const storyContext = useContext(StoryContext);
  const {
    publishStoryPublic,
    publishStoryPublicLikes,
    publishStoryPublicGenre,
    publishStoryPublicAlpha,
    publishStoryPublicViews,
    topStories,
    stories,
  } = storyContext;

  const component = 'readpublicstory';

  const [sort, setSort] = useState('Latest');
  const [test, tests] = useState(stories);

  useEffect(() => {
    publishStoryPublicLikes();
    if (sort === 'Latest') publishStoryPublic();
    else if (sort === 'Alphabet') publishStoryPublicAlpha();
    else if (sort === 'Most liked') publishStoryPublicLikes();
    else if (sort === 'Most views') publishStoryPublicViews();
    else if (sort) publishStoryPublicGenre(sort);
  }, [sort]);

  const onChange = (e) => {
    setSort(e.target.innerText);
  };

  return (
    <div className="grid-container">
      <main className="public-stories grid-container__mid">
        <div className="public-stories__cta">
          <EmojiCTA />
        </div>
        <div className="public-stories__sort">
          <NavDropdown title="Sorted by" id="basic-nav-dropdown" className={"mb-5"}>
            <NavDropdown.Item onClick={onChange}>Latest</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Alphabet</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Most liked</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Most views</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={onChange}>Fantasy</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Romance</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Mystery</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Horror</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Thriller</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>Western</NavDropdown.Item>
            <NavDropdown.Item onClick={onChange}>SciFi</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="public-stories__cards">
          {sort === 'Most liked' ? (
            <PaginateComponent
              data={topStories}
              perPage={20}
              show={component}
            />
          ) : (
            <PaginateComponent data={stories} perPage={20} show={component} />
          )}
        </div>
      </main>
    </div>
  );
};
export default PublicLandingPage;
