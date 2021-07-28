import React from 'react';

const EmojiToolTip = ({ unicodeName, passKey }) => {
  const changeName = (input) => {
    const splitName = input.split(' ');
    if (splitName[0].charAt(0) === 'E') splitName.splice(0, 1);

    const newWordArray = [];

    splitName.forEach((element) => {
      const splitEl = element.split('');
      splitEl[0] = splitEl[0].toUpperCase();
      const newWords = splitEl.join('');
      newWordArray.push(newWords);
    });

    const newName = newWordArray.join(' ');

    return newName;
  };

  return (
    <div key={passKey} className="emoji-tooltip">
      <p className="emoji-tooltip__name">{changeName(unicodeName)}</p>
    </div>
  );
};

export default EmojiToolTip;
