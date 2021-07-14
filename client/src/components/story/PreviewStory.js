import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
// store
import { storyStore } from "../../store";
///////////////////////////////////////////////////////////////////////////////

import StoryContext from "../../context/story/storyContext";
//////////////////////////////////////////////////////////////////////////////

const PreviewStory = (props) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  
  const { emojis, title, genre, richText, sendToDb, updateStory} =
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
      props.history.push(`/yourstories/${user._id}`);
    } else {
      updateStory();
      props.history.push(`/yourstories/${user._id}`);
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
