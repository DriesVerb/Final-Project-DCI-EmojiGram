import React, { useEffect, useContext, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import StoryContext from "../../context/story/storyContext";

import CommentForm from "./CommentForm";

const readPublicStory = () => {
  const storyContext = useContext(StoryContext);
  const { singleStory, showSinglePublic, addLike, removeLike, deleteComment } =
    storyContext;
  const { id } = useParams();
  const [liked, setLiked] = useState(true);
  useEffect(() => {
    showSinglePublic(id);
  }, [liked]);

  const sanitizeData = () => ({
    __html: DOMPurify.sanitize(singleStory.richText),
  });

  return (
    <Fragment>
      {singleStory && (
        <div className="showStory grid-container">
          <h1 className="text-center grid-container__header">
            {singleStory.title &&
              singleStory.title.charAt(0).toUpperCase() +
                singleStory.title.slice(1)}
          </h1>
          <div className="storyContainer grid-container__mid">
            <br />
            <div dangerouslySetInnerHTML={sanitizeData()}></div>
            {liked ? (
              <span className="like">
                <i
                  className="fa fa-thumbs-up"
                  onClick={(e) => {
                    e.preventDefault();
                    addLike(singleStory._id);
                    setLiked(false);
                    console.log(liked);
                  }}
                />
                {singleStory.likes && (
                  <span>&nbsp;{singleStory.likes.length}</span>
                )}
              </span>
            ) : (
              <span className="like">
                <i
                  className="fa fa-thumbs-up"
                  onClick={(e) => {
                    e.preventDefault();
                    removeLike(singleStory._id);
                    setLiked(true);
                    console.log(liked);
                  }}
                />
                {singleStory.likes && (
                  <span>&nbsp;{singleStory.likes.length}</span>
                )}
              </span>
            )}
            <span>
              <i className="fas fa-comment" />
              {singleStory.comments && (
                <span> &nbsp;{singleStory.comments.length}</span>
              )}{" "}
            </span>
            <span className="emojisClass">
              <i className="far fa-smile-beam" /> :{" "}
              {singleStory.emojis && (
                <span>
                  {" "}
                  &nbsp;
                  {singleStory.emojis.map((emoj, id) => (
                    <span key={id}>&nbsp;{emoj.character} </span>
                  ))}{" "}
                </span>
              )}
            </span>
            <CommentForm />
            <div>
              {singleStory.comments && (
                <div>
                  {singleStory.comments.map((comment) => (
                    <div className="post bg-white p-1 my-1">
                      <div>
                        <Link to={`/profile/`}>
                          <img
                            className="round-img"
                            src={comment.avatar}
                            alt=""
                          />
                          <h4>{singleStory.user.username}</h4>
                        </Link>
                      </div>
                      <div>
                        <p className="text-dark">{comment.text}</p>
                        <p className="post-date">
                          Posted on{" "}
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
        </div>
      )}
    </Fragment>
  );
};
export default readPublicStory;
