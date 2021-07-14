import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// components
import Spinner from "../../components/layout/Spinner";
import EmojiChar from "./EmojiChar";

// store
import { emojiStore } from "../../store";

const EmojiCTA = () => {
  const { getEmojis } = emojiStore.getState();
  const emojis = emojiStore((state) => state.emojis);
  const loading = emojiStore((state) => state.loading);

  useEffect(() => {
    getEmojis();
  }, []);

  let history = useHistory();

  const writeThisStory = (e) => {
    e.preventDefault();
    history.push("/writestory");
  };

  return (
    <div className="emoji">
      {loading ? (
        <Spinner />
      ) : (
        <div className="emoji__row mb-xl">
          {emojis.length > 0 &&
            emojis.map((emoji) => {
              return <EmojiChar emoji={emoji} size="medium" />;
            })}{" "}
        </div>
      )}
      <div className="emoji__buttons">
        <button
          onClick={(e) => {
            e.preventDefault();
            getEmojis();
          }}
        >
          Generate new story
        </button>
        {loading ? (
          <button>Write this story</button>
        ) : (
          <button onClick={writeThisStory}>Write this story</button>
        )}
      </div>
    </div>
  );
};

export default EmojiCTA;
