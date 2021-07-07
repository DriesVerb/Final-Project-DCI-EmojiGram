import React, { Fragment, useState } from "react";

const EmojiChar = ({ emoji }) => {
  const [hover, setHover] = useState(false);

  return (
    <Fragment>
      <div className="emoji__row">
        <div
          className="emoji__character"
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
            <div className="emoji__tooltip">{emoji.unicodeName}</div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default EmojiChar;
