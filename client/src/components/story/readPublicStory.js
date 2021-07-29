import React, { useEffect, useContext, Fragment, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import StoryContext from '../../context/story/storyContext';
import DOMPurify from 'dompurify';
// components
import CommentForm from './CommentForm';
import EmojiChar from './EmojiChar';
import Icon from '../utils/Icon';

// context
import AuthContext from '../../context/auth/authContext';
const readPublicStory = () => {
  let history = useHistory();
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;
  const storyContext = useContext(StoryContext);
  const { singleStory, showSinglePublic, addLike, removeLike, deleteComment } =
    storyContext;
  const { id } = useParams();
  const [liked, setLiked] = useState(true);
  const sanitizeData = () => ({
    __html: DOMPurify.sanitize(singleStory.richText),
  });
  const toProfile = (id) => {
    history.push(`/profile/${id}`);
  };
  const compareValue = (input) => {
    input.forEach((el) => {
      if (user._id === el.user) {
        setLiked(true);
      }
    });
  };
  useEffect(() => {
    showSinglePublic(id);
  }, []);
  return (
    <Fragment>
      <div className="grid-container">
        <div className="pb-story">
          {singleStory && (
            <div className="pb-story__top">
              <div className="pb-story__title">
                <h2 className="text-center ">
                  {singleStory.title &&
                    singleStory.title.charAt(0).toUpperCase() +
                      singleStory.title.slice(1)}
                </h2>
              </div>
              {/* Emoji */}
              <div className="emoji__row pb-story__emojis">
                {singleStory.emojis.map((emoji, id) => (
                  <EmojiChar emoji={emoji} size="x-large" />
                ))}
              </div>
            </div>
          )}

          {singleStory && (
            <div className="pb-story__info">
              <div
                onClick={() => toProfile(singleStory.user._id)}
                className="pb-story__writer"
              >
                Written By {singleStory.user.username}
              </div>
              <div className="pb-story__symbols">
                {singleStory.user.followers && (
                  <div className="pb-story__symbol">
                    <p className="">{singleStory.user.followers.length}</p>
                    <Icon name="users" color="black" size="small" />
                  </div>
                )}

                <div className="pb-story__symbol">
                  <p className="">{singleStory.user.following.length}</p>
                  <Icon name="heart" color="black" size="small" />
                </div>

                <div className="pb-story__symbol">
                  <p className="">{singleStory.user.following.length}</p>
                  <Icon name="books" color="black" size="small" />
                </div>
              </div>
            </div>
          )}

          {singleStory && (
            <div className="pb-story__text">
              <div dangerouslySetInnerHTML={sanitizeData()}></div>
            </div>
          )}
        </div>

        <div className=" mx-auto">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 py-3">
              {singleStory && (
                <div>
                  <div className="pb-story d-flex  ">
                    <div className="pb-story__likes pb-story__icon pr-3">
                      {/* likes */}
                      {!isAuthenticated ? (
                        <div className="pb-story__size">
                          <i className="fa fa-thumbs-up" />
                          {singleStory.likes && (
                            <span className="pb-story__count">
                              {singleStory.likes.length}
                            </span>
                          )}
                        </div>
                      ) : null}
                    </div>
                    <div className="pb-story__comments pb-story__icon">
                      <a href="#comment" className="pb-story__link">
                        <span className="pb-story__size">
                          <i className="fas fa-comment" />
                          {singleStory.comments && (
                            <span className="pb-story__count pb-story__link">
                              {singleStory.comments.length}
                            </span>
                          )}
                        </span>
                      </a>
                    </div>
                  </div>
                  {/* mid grid */}
                  {isAuthenticated ? (
                    <CommentForm />
                  ) : (
                    <div className="pb-story__no-comment">
                      <p className="pb-story__no-comment--text">
                        Log in to leave a comments
                      </p>
                    </div>
                  )}
                  <div>
                    {singleStory.comments && (
                      <div>
                        {singleStory.comments.map((comment) => (
                          <div className="comment-style p-1 my-1">
                            <div >
                              <Link to={`/profile/${singleStory.user._id}`} className="comment-user">
                                <img
                                  className="user-nav__avatar "
                                  src={comment.avatar}
                                  alt=""
                                />
                                <h4>{comment.username}</h4>
                             </Link>
                            </div>
                            <div>
                              <p className="text-dark">{comment.text}</p>
                              <p className="post-date">
                                Posted on{' '}
                                {new Intl.DateTimeFormat().format(
                                  new Date(comment.date)
                                )}
                              </p>
                              {/* {!auth.loading && user === auth.user._id && ( */}

                              <button
                                onClick={() =>
                                  deleteComment(singleStory._id, comment._id)
                                }
                                type="button"
                                className="btn btn-dark btn-sm"
                              >
                                <i className="fas fa-times" />
                              </button>
                              {/* // )} */}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
      </div>
    </Fragment>
  );
};
export default readPublicStory;

/* 

{liked ? (
                        <div className="pb-story__icon">
                          {isAuthenticated ? (
                            <div className="pb-story__size">
                              <ipu
                                className="fa fa-thumbs-up"
                                onClick={(e) => {
                                  e.preventDefault();
                                  addLike(singleStory._id);
                                  setLiked(false);
                                }}
                              />
                              {singleStory.likes && (
                                <span className="pb-story__count">
                                  {singleStory.likes.length}
                                </span>
                              )}
                            </div>
                          ) : (
                            <div className="pb-story__size">
                              <i className="fa fa-thumbs-up" />
                              {singleStory.likes && (
                                <span className="pb-story__count">
                                  {singleStory.likes.length}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="pb-story__icon ">
                          {isAuthenticated ? (
                            <div className="like pb-story__size">
                              <i
                                className="fa fa-thumbs-up"
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeLike(singleStory._id);
                                  setLiked(true);
                                }}
                              />
                              {singleStory.likes && (
                                <span className="pb-story__count">
                                  {singleStory.likes.length}
                                </span>
                              )}
                            </div>
                          ) : (
                            <div className="like pb-story__size">
                              <i className="fa fa-thumbs-up" />
                              {singleStory.likes && (
                                <span className="pb-story__count">
                                  {singleStory.likes.length}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      )}

*/
