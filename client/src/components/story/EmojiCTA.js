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
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="emoji__row">
          {emojis.length > 0 &&
            emojis.map((emoji) => {
              return <EmojiChar key={emoji._id} emoji={emoji} />;
            })}{" "}
        </div>
      )}

      <button onClick={getEmojis}>Generate new story</button>
      <button onClick={writeThisStory}>Write this story</button>
    </div>
  );
};

export default EmojiCTA;
