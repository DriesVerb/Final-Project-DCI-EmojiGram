import React, { Fragment, useState } from "react";

const EmojiChar = ({ emoji }) => {
  const [hover, setHover] = useState(false);

  return (
    <Fragment>
      <div className="test">
        <div
          className="emojiSize"
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
            <div className="emoji__relative">{emoji.unicodeName}</div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default EmojiChar;
