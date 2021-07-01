import React, { useContext, useEffect } from "react";

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
    console.log(storyToEdit);
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    if (storyToEdit === null) {
      sendToDb();
      props.history.push("/yourstories");
    } else {
      updateStory();
      props.history.push("/yourstories");
    }
  };

  return (
    <div>
      {<button onClick={onClick}>Publish</button>}
      <h1>{title}</h1>
      <h3>{genre}</h3>
      <h4>{subGenre}</h4>
      <div className="test">
        {emojis.map((emoji, index) => (
          <div className="emojiSize" key={index}>
            {emoji.character}
          </div>
        ))}
      </div>
      <p
        className="text-align-left"
        dangerouslySetInnerHTML={{ __html: richText }}
      ></p>
    </div>
  );
};

export default PreviewStory;
