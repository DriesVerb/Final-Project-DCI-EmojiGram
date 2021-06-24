import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// store
import { storyStore } from "../../store";
import { emojiStore } from "../../store";

const StoryEditor = () => {
  // variables from the zustand store
  const getValues = storyStore((state) => state.getValues);
  const emojisGlobal = emojiStore((state) => state.emojis);
  const getEmojis = emojiStore((state) => state.getEmojis);

  // state of current inputs
  const [formData, setFromData] = useState({
    title: "",
    genre: "",
    text: "",
  });

  const { title, genre, text } = formData;

  useEffect(() => {
    if (emojisGlobal.length === 0) getEmojis();
  }, []);

  let history = useHistory();

  const onChange = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    getValues(formData);
    history.push("/previewstory");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <button type="submit">Preview to Publish</button>
        <p>You will be a writing a story inspired by these emojis:</p>
        <div className="test">
          {emojisGlobal.length > 0 &&
            emojisGlobal.map((emoji) => {
              return (
                <div className="emojiSize" key={emoji._id}>
                  {emoji.character}
                </div>
              );
            })}
        </div>
        <div>
          <label htmlFor="title">Title of the Piece:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <select name="genre" value={genre} onChange={(e) => onChange(e)}>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Thriller and Suspense">Thriller and Suspense</option>
            <option value="Western">Western</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="story editor
          "
          ></label>
          <textarea
            name="text"
            value={text}
            onChange={(e) => onChange(e)}
            cols="90"
            rows="45"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default StoryEditor;
