import React, { useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import StoryContext from "../../context/story/storyContext";

import DOMPurify from "dompurify";

const readPublicStory = () => {
  const storyContext = useContext(StoryContext);
  const { singleStory, showSinglePublic } = storyContext;
  const { id } = useParams();

  useEffect(() => {
    showSinglePublic(id);
  }, []);

  // package that makes sure that not malicious code gets in to the DOM
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
            <span className="like">
              {singleStory.likes && (
                <span>&nbsp;{singleStory.likes.length}</span>
              )}
            </span>

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
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default readPublicStory;
