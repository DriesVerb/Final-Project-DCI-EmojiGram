import React, { useState } from 'react';

// components
import EmojiToolTip from './EmojiToolTip';

const EmojiChar = ({ emoji, size }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      key={emoji._id}
      className={`emoji__character--${size} emoji__character`}
      onMouseEnter={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setHover(false);
      }}
    >
      {emoji.character}
      {hover ? (
        <EmojiToolTip unicodeName={emoji.unicodeName} passKey={emoji._id} />
      ) : null}
    </div>
  );
};

export default EmojiChar;
