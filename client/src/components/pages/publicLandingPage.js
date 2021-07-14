import React, { useContext, useEffect, useState } from "react";
import StoryContext from "../../context/story/storyContext";
import { NavDropdown } from "react-bootstrap";

// Components
import PaginateComponent from "../utils/PaginateComponent";
import StoryCardSmall from "../story/StoryCardSmall";
import EmojiCTA from "../story/EmojiCTA";
const PublicLandingPage = () => {
  const storyContext = useContext(StoryContext);
  const {
    publishStoryPublic,
    publishStoryPublicLikes,
    publishStoryPublicGenre,
    publishStoryPublicAlpha,
    topStories,
    stories,
  } = storyContext;

  const [sort, setSort] = useState("Latest");
  useEffect(() => {
    publishStoryPublicLikes();
    if (sort === "Latest") publishStoryPublic();
    else if (sort === "Alphabet") publishStoryPublicAlpha();
    else if (sort === "Most liked") publishStoryPublicLikes();
    else if (sort) publishStoryPublicGenre(sort);
  }, [sort]);

  const onChange = (e) => {
    setSort(e.target.innerText);
  };

  return (
    <div className="grid-container">
      <header className="landing-page__header grid-container__header">
        <h1 className="text-center">Emoji-Tales</h1>
      </header>
      <div className="left-sidebar grid-container__left">
        <div className="left-sidebar__menu">
          <NavDropdown title="Sorted by" id="basic-nav-dropdown">
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
        <div className="left-sidebar__footer">
          <p>Footer</p>
          <br />
          <p>Facebook</p>
          <br />
          <p>Twitter</p>
        </div>
      </div>
      <main className="public-stories grid-container__mid">
        <div className="public-stories__cta">
          <EmojiCTA />
        </div>
        <div className="public-stories__cards">
          {sort === "Most liked" ? (
            <PaginateComponent data={topStories} perPage={20} />
          ) : (
            <PaginateComponent data={stories} perPage={20} />
          )}
        </div>
      </main>
      <div className="right-sidebar grid-container__right">
        <StoryCardSmall story={topStories} amount={3} title={"Most Likes:"} />
        <StoryCardSmall
          story={stories}
          amount={2}
          title={"Latest Published:"}
        />
        {/* <MostLikes /> */}
      </div>
    </div>
  );
};
export default PublicLandingPage;
