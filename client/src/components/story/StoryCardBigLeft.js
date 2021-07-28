import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

// components
import EmojiChar from './EmojiChar';

const StoryCardBigLeft = ({ story, show }) => {
  let history = useHistory();

  const storyDetailsPublic = (id) => {
    history.push(`/${show}/${id}`);
  };
  useEffect(() => {
    console.log(story);
  }, []);

  const toProfile = (id) => {
    history.push(`/profile/${id}`);
  };

  const trimString = (text) => {
    const trimmedString = text.substring(0, 200);
    return trimmedString;
  };
  const classGenre = (genre) => {
    const replaceGenre = genre.split(' ').join('-');
    return replaceGenre;
  };
  return (
    <div
      key={story._id}
      className="story-card"
      onClick={() => storyDetailsPublic(story._id)}
    >
      <div className="story-main">
        <header className="story-main__header">
          <div className="story-main__author-info">
            <div className="story-main__avatar">avatar</div>
            <div>
              <div
                className="story-main__author"
                onClick={(e) => {
                  e.stopPropagation();
                  toProfile(story.user._id);
                }}
              >
                by - {story.user.username && story.user.username}
              </div>
            </div>
          </div>
          <div className={`story-main__genre ${classGenre(story.genre)}`}>
            {story.genre}
          </div>
        </header>
        <h2 className="story-main__title">Title</h2>
        <p className="story-main__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsam
          possimus molestias
        </p>
        <footer className="story-main__footer">footer</footer>
      </div>
      <div className="emoji-card">
        <div className="emoji-card__rows">
          {story.emojis.map((emoji, id) => {
            return id % 2 === 0 ? (
              <div key={id} className="emoji-card__emoji">
                <EmojiChar emoji={emoji} size="medium" />
              </div>
            ) : null;
          })}
        </div>
        <div className="emoji-card__rows">
          {story.emojis.map((emoji, id) => {
            return id % 2 !== 0 ? (
              <div key={id} className="emoji-card__emoji">
                <EmojiChar emoji={emoji} size="medium" />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};
export default StoryCardBigLeft;
