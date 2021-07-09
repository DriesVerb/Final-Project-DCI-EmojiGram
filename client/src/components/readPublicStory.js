import React, { useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import StoryContext from "../context/story/storyContext";

const readPublicStory = () => {
  const storyContext = useContext(StoryContext);
  const { singleStory, showSinglePublic,stories } = storyContext;
  const { id } = useParams();

  useEffect(() => {
    showSinglePublic(id);
  }, []);

  return (
    <Fragment>


{/* <div className="page">
  <p dangerouslySetInnerHTML={{ __html: singleStory.richText }}>{stories.text}</p>
  </div>
 */}














      {singleStory && (
        <div className="showStory">
          <div className="storyContainer">
            <h2 className="text-center">
              {singleStory.title &&
                singleStory.title.charAt(0).toUpperCase() +
                  singleStory.title.slice(1)}
            </h2>
            <br />
            <div
              dangerouslySetInnerHTML={{ __html: singleStory.richText }}
            ></div>
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
