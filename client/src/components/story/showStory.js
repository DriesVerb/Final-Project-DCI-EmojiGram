import React, { useEffect, useState, useContext, Fragment } from "react";

// secure the rich text
import DOMPurify from "dompurify";

import { useParams } from "react-router-dom";
// import './showStory.css'
import { Button } from "react-bootstrap";
import StoryContext from "../../context/story/storyContext";
import CommentForm from "./CommentForm";
import { Link } from "react-router-dom";

// components
import EmojiChar from "./EmojiChar";

function ShowStory(props) {
  const storyContext = useContext(StoryContext);
  const {
    singleStory,
    deleteStory,
    storyToEdit,
    setEditedStory,
    addLike,
    removeLike,
    deleteComment,
    showStory,
  } = storyContext;

  const [liked, setLiked] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    showStory(id);
  }, [liked]);

  const onDelete = () => {
    deleteStory(singleStory._id);
    props.history.push(`/yourstories ${singleStory.user}`);
  };
  const onEdit = () => {
    setEditedStory(singleStory);
    console.log(storyToEdit);
    props.history.push("/writestory");
  };

  const onLike = (e) => {
    e.preventDefault();
    if (liked) {
      addLike(singleStory._id);
      setLiked(false);
      console.log(liked);
    } else {
      removeLike(singleStory._id);
      setLiked(true);

      console.log(liked);
    }
  };

  const sanitizeData = () => ({
    __html: DOMPurify.sanitize(singleStory.richText),
  });

  return (
    <Fragment>
      {singleStory && (
        <div className="grid-container">
          <div className="grid-container__header">
            <h2 className="text-center">
              {singleStory.title &&
                singleStory.title.charAt(0).toUpperCase() +
                  singleStory.title.slice(1)}
            </h2>
          </div>

          <div className="grid-container__left pb-story__navbar">
            <div className="pb-story__likes pb-story__icon">
              {liked ? (
                <div className="pb-story__icon">
                  <div className="pb-story__size">
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
                      <span className="pb-story__count">
                        {singleStory.likes.length}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="pb-story__icon ">
                  <span className="like pb-story__size">
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
                      <span className="pb-story__count">
                        {singleStory.likes.length}
                      </span>
                    )}
                  </span>
                </div>
              )}
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

          <div className="grid-container__right">
            <Button variant="info" className="pl-3 pr-4 ml-2" onClick={onEdit}>
              Edit
            </Button>
            <Button variant="dark" className="ml-1" onClick={onDelete}>
              Delete
            </Button>
          </div>

          <div className="grid-container__mid">
            <div className="emoji__row pb-story__emojis">
              {singleStory.emojis.map((emoji, id) => (
                <EmojiChar emoji={emoji} size="x-large" />
              ))}
            </div>
            <div dangerouslySetInnerHTML={sanitizeData()}></div>
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

          {/* <span className="like">
            <i className="fa fa-thumbs-up" onClick={onLike} />
            {singleStory.likes && <span>&nbsp;{singleStory.likes.length}</span>}
          </span>

          <span>
            <i className="fas fa-comment" />
            {singleStory.comments && (
              <span> &nbsp;{singleStory.comments.length}</span>
            )}{" "}
          </span> */}
        </div>
      )}
    </Fragment>
  );
}

export default ShowStory;
