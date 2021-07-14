import React, { useState, useEffect } from "react";


const EmojiToolTip = ({ unicodeName }) => {
  const [emojiName, setEmojiName] = useState("");

  const changeName = (input) => {
    const splitName = input.split(" ");
    if (splitName[0].charAt(0) === "E") splitName.splice(0, 1);

    const newWordArray = [];

    splitName.forEach((element) => {
      const splitEl = element.split("");
      splitEl[0] = splitEl[0].toUpperCase();
      const newWords = splitEl.join("");
      newWordArray.push(newWords);
    });

    const newName = newWordArray.join(" ");

    setEmojiName(newName);
  };

  useEffect(() => {
    changeName(unicodeName);
  }, []);

  return (

    <div className="emoji-tooltip">
      <p className="emoji-tooltip__name">{emojiName}</p>
    </div>

  );
};

export default EmojiToolTip;
