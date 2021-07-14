import React from 'react';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const StoryCardBig = ({ index, story }) => {
  let history = useHistory();

  const storyDetailsPublic = (id) => {
    history.push(`/readpublicstory/${id}`);
  };

  return (
    <SkeletonTheme color='#f4f4f4' highlightColor='#a3a3a3' >
      <div key={index}>
        <div
          className='story-card'
          onClick={() => storyDetailsPublic(story._id)}>
          <figure className='story-card__genre' data={story.genre}>
            <h3>
              <Moment format='YYYY/MM/DD'>
                {story.createdAt || <Skeleton />}
              </Moment>
              <span>Title: </span>
              {(story.title &&
                story.title.charAt(0).toUpperCase(1) +
                  story.title.slice(4) +
                  story.title) || <Skeleton />}
            </h3>
            <br />

            <p className='story-card__text story-card__fade'>
              {story.text || <Skeleton duration={2} />}
            </p>

            <footer className='story-card__footer'>
              <span className='story-card__like'>
                <i className='fa fa-thumbs-up' /> &nbsp;
                {story.likes.length}
              </span>
              <span className='story-card__comments'>
                <i className='fas fa-comment' /> &nbsp;
              </span>

              <p className='title_Author'>
                {story.title || <Skeleton duration={2} />}
                "&nbsp;
                <span className='author'>by {story.user.username}</span>
              </p>

              <span className='story-card__emojis'>
                <i className='far fa-smile-beam' /> : &nbsp;
                {story.emojis.map((emoj) => (
                  <span key={emoj._id || <Skeleton duration={2} />}>
                    &nbsp;
                    {emoj.character || <Skeleton duration={2} />}
                  </span>
                ))}
              </span>
            </footer>
          </figure>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default StoryCardBig;
