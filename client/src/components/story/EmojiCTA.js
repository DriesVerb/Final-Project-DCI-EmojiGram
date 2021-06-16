import React, { useState, useEffect } from "react";
import axios from "axios";

const EmojiCTA = () => {
  const [emojiList, setEmojiList] = useState([]);

  useEffect(() => {
    axios.get(`/emoji/story`).then((response) => setEmojiList(response.data));
  }, []);

  console.log(emojiList);

  return (
    <div>
      <div className="test">
        {emojiList.map((emoji) => {
          return (
            <div className="emojiSize" key={emoji._id}>
              {emoji.character}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmojiCTA;
