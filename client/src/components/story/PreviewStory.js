import React, { useContext, useEffect } from "react";

// components
import EmojiChar from "./EmojiChar";

// store
import { storyStore } from "../../store";
///////////////////////////////////////////////////////////////////////////////

import StoryContext from "../../context/story/storyContext";
//////////////////////////////////////////////////////////////////////////////

const PreviewStory = (props) => {
  const { emojis, title, genre, subGenre, richText, sendToDb, updateStory } =
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
    <div className="grid-container">
      <div className="grid-container__right">
        {<button onClick={onClick}>Publish</button>}
      </div>
      <div className="grid-container__left">
        <h3>{genre}</h3>
        <h3>{subGenre}</h3>
      </div>
      <div className="grid-container__header preview-story__title">
        <h1>{title}</h1>
      </div>
      <div className="grid-container__mid">
        <div className="emoji__row">
          {emojis.map((emoji, id) => (
            <EmojiChar key={id} emoji={emoji} size="large" />
          ))}
        </div>
        <p
          className="preview__paragraph"
          dangerouslySetInnerHTML={{ __html: richText }}
        ></p>
      </div>
    </div>
  );
};

export default PreviewStory;
