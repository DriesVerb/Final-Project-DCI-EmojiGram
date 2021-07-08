import React, { useContext, useEffect, useState } from "react";
import "./publicLandingPage.css";
import StoryContext from "../../context/story/storyContext";
import { NavDropdown, Nav } from "react-bootstrap";

// Components
// import MostLikes from "../mostLikes";
import StoryCardSmall from "../story/StoryCardSmall";
import StoryCardBig from "../story/StoryCardBig";
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
    if (sort === "Latest") publishStoryPublic();
    else if (sort === "Alphabet") publishStoryPublicAlpha();
    else if (sort === "Most liked") publishStoryPublicLikes();
    else if (sort) publishStoryPublicGenre(sort);
  }, [sort]);

  const onChange = (e) => {
    setSort(e.target.innerText);
  };

  return (
    <div className="landing-page">
      <header className="landing-page__header">
        <h1 className="text-center">Story-Moji</h1>
      </header>
      <div className="left-sidebar">
        <div className="left-sidebar__menu">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/genre">Genres</Nav.Link>
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
      <main className="public-stories">
        <EmojiCTA className="public-stories__cta" />
        {(sort === "Most liked" ? topStories : stories).map((story) => {
          return <StoryCardBig story={story} key={story._id} />;
        })}
      </main>
      <div className="right-sidebar">
        Most liked:
        <StoryCardSmall story={stories} />
        {/* <MostLikes /> */}
      </div>
    </div>
  );
};
export default PublicLandingPage;
