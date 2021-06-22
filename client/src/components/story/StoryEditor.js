import React, { useState } from "react";

// store
import { storyStore } from "../../store";

const StoryEditor = () => {
  const getValues = storyStore((state) => state.getValues);
  const convertText = storyStore((state) => state.convertText);
  const newText = storyStore((state) => state.newText);

  const [formData, setFromData] = useState({
    emojis: ["🛳️", "💈", "🌽", "🐶", "🛰️"],
    title: "",
    genre: "",
    text: "",
  });

  const { title, genre, text } = formData;

  const onChange = (e) =>
    setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    getValues(formData);
  };

  return (
    <div>
      {/* for testing: */}
      <div
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: newText }}
      ></div>
      {/* for testing end. */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
          convertText(text);
        }}
      >
        <button type="submit">Publish Story</button>
        <p>You will be a writing a story inspired by these emojis:</p>
        <div className="emojiSize">🛳️ 💈 🌽 🐶 🛰️</div>
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
