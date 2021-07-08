import React, { Fragment } from "react";
import "../mostLikes.css";

const StoryCardSmall = ({ story }) => {
  return (
    <Fragment>
      {story.map((sto, id) => {
        return (
          <div className="mostLikes__container" key={id}>
            <p>
              <span className="span-genre">{sto.genre} /</span> {sto.title} by -
              <span>{sto.user.username}</span>
            </p>
            <div>
              {sto.emojis.map((emoji) => {
                return <span key={emoji._id}>{emoji.character}</span>;
              })}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default StoryCardSmall;
