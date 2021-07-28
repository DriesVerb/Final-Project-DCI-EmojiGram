import React, { useEffect, useContext, Fragment } from "react";

// secure the rich text
import DOMPurify from "dompurify";

import { useParams } from "react-router-dom";
// import './showStory.css'
import { Button } from "react-bootstrap";
import StoryContext from "../../context/story/storyContext";

// components
import EmojiChar from "./EmojiChar";

function ShowStory(props) {
  const storyContext = useContext(StoryContext);
  const { singleStory, deleteStory, setEditedStory, showStory } = storyContext;

  const { id } = useParams();

  useEffect(() => {
    showStory(id);
    singleStory;
  }, []);

  const onDelete = () => {
    deleteStory(singleStory._id);

    props.history.push(`/yourstories`);
  };
  const onEdit = () => {
    setEditedStory(singleStory);
    props.history.push("/writestory");
  };

  console.log(singleStory);

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
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ShowStory;
