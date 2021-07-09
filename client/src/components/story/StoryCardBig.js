import React from "react";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";

const StoryCardBig = ({ index, story }) => {
  let history = useHistory();
  const storyDetailsPublic = (id) => {
    history.push(`/readpublicstory/${id}`);
  };

  return (
    <div key={index}>
      <div className="story-card" onClick={() => storyDetailsPublic(story._id)}>
        <figure className="story-card__genre" data={story.genre}>
          <h3>
            <Moment format="YYYY/MM/DD">{story.createdAt}</Moment>
            <span>Title: </span>
            {story.title &&
              story.title.charAt(0).toUpperCase() + story.title.slice(1)}
          </h3>
          <br />
          <p className="story-card__text story-card__fade"> {story.text}</p>
          <footer className="story-card__footer">
            <span className="story-card__like">
              <i className="fa fa-thumbs-up" /> &nbsp;{story.likes.length}
            </span>
            <span className="story-card__comments">
              <i className="fas fa-comment" /> &nbsp;
              {/* {<story className="comments"></story>.length} */}
            </span>
            <p className="title_Author">
              {story.title}"&nbsp;
              <span className="author">by {story.user.username}</span>
            </p>
            <p>
              views: {story.views}
            </p>
            <span className="story-card__emojis">
              <i className="far fa-smile-beam" /> : &nbsp;
              {story.emojis.map((emoj) => (
                <span key={emoj._id}>&nbsp;{emoj.character} </span>
              ))}
            </span>
          </footer>
        </figure>
      </div>
    </div>
  );
};

export default StoryCardBig;
