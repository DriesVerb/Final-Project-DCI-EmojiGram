import { useHistory } from "react-router-dom";
import React, { useContext, useEffect } from "react";

// store
import { storyStore } from "../../store";
///////////////////////////////////////////////////////////////////////////////

import StoryContext from "../../context/story/storyContext";
//////////////////////////////////////////////////////////////////////////////

const PreviewStory = (props) => {
  const { emojis, title, genre, richText, sendToDb, updateStory } =
    storyStore.getState();
  ////////////////////////////////////////////////////////////////////////////////
  const storyContext = useContext(StoryContext);
  const { storyToEdit } = storyContext;
  //////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    console.log(emojis);
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    if (storyToEdit === null) {
      console.log(storyToEdit);
      sendToDb();
      props.history.push("/yourstories");
    } else {
      updateStory();
      props.history.push("/yourstories");
      console.log(storyToEdit);
    }
  };

  return (
    <div>
      {<button onClick={onClick}>Publish</button>}
      <h1>{title}</h1>
      <h3>{genre}</h3>
      <div className="test">
        {emojis.map((emoji, index) => (
          <div className="emoji__character" key={index}>
            {emoji.character}
          </div>
        ))}
      </div>
      <p
        className="preview__paragraph"
        dangerouslySetInnerHTML={{ __html: richText }}
      ></p>
    </div>
  );
};

export default PreviewStory;
