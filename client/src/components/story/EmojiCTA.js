import React, { useEffect } from "react";

// components
import Spinner from "../../components/layout/Spinner";

// store
import { emojiStore } from "../../store";

const EmojiCTA = () => {
  const { getEmojis } = emojiStore.getState();
  const emojis = emojiStore((state) => state.emojis);
  const loading = emojiStore((state) => state.loading);

  useEffect(() => {
    getEmojis();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="test">
          {emojis.length > 0 &&
            emojis.map((emoji) => {
              return (
                <div className="emojiSize" key={emoji._id}>
                  {emoji.character}
                </div>
              );
            })}{" "}
        </div>
      )}

      <button onClick={getEmojis}>Generate new story</button>
    </div>
  );
};

export default EmojiCTA;
