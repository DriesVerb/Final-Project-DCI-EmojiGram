import React, { useEffect } from "react";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// components
import EmojiChar from "./EmojiChar";

const StoryCardBig = ({ story }) => {
  let history = useHistory();
  const storyDetailsPublic = (id) => {
    history.push(`/readpublicstory/${id}`);
  };
  useEffect(() => {
    console.log(story);
  }, []);

  const toProfile = (id) => {
    history.push(`/profile/${id}`);
  };

  const trimString = (text) => {
    const trimmedString = text.substring(0, 300);
    return trimmedString;
  };

  const classGenre = (genre) => {
    const replaceGenre = genre.split(" ").join("-");
    return replaceGenre;
  };

  return (
    <div key={story._id} className="story-card-big">
      <div className="story-card-big__emojis">
        <div className="story-card-big__emojis--center">
          {story.emojis.map((emoji) => (
            <EmojiChar emoji={emoji} size="large" />
          ))}
        </div>
      </div>
      <div className="story-card-big__info">
        <div className="story-card-big__story">
          <span className="story-card-big__story--bold">{story.title}</span>{" "}
          <span className="story-card-big__story--small">
            by {story.user.username}
          </span>{" "}
          <span className="story-card-big__story--small">
            {" "}
            - <Moment format="DD/MM/YYYY">{story.createdAt}</Moment>
          </span>
        </div>
        <div className="story-card-big__categories">
          <div
            className={`story-card-big__box story-card-big__box--genre ${classGenre(
              story.genre
            )}`}
          >
            {story.genre}
          </div>
          <div className="story-card-big__box story-card-big__box--subgerne">
            {story.subGenre}
          </div>
        </div>
      </div>
      <div className="story-card-big__text">{trimString(story.text)}...</div>
      <footer className="story-card-big__footer">
        <div className="story-card-big__social">
          <span className="story-card-big__like">
            <i className="fa fa-thumbs-up" /> {story.likes.length}
          </span>
          <span className="story-card-big__comments">
            <i className="fas fa-comment" />
          </span>
        </div>
        <div
          className="story-card-big__read-more"
          onClick={() => storyDetailsPublic(story._id)}
        >
          Read more
        </div>
        <div className="title_Author">
          {story.title}"&nbsp;
          <div onClick={() => toProfile(story.user._id)}>
            <span>Created by: </span>

            {/* <Link to={`/profile/`}> */}
            <img className="round-img" src={story.avatar} alt="" />
            <h4>{story.user.username}</h4>
            {/* </Link> */}
          </div>{" "}
        </div>
      </footer>
    </div>
  );
};

export default StoryCardBig;
