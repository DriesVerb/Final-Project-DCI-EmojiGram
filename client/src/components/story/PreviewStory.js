import React from "react";

// store
import { storyStore } from "../../store";

const PreviewStory = () => {
  const { emojis, title, genre, richText, sendToDb } = storyStore.getState();

  console.log(storyStore.getState());

  return (
    <div>
      <button onClick={sendToDb}>Publish</button>
      <h1>{title}</h1>
      <h3>{genre}</h3>
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
