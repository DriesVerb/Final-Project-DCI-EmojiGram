import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

// store
import { storyStore } from "../../store";
import { emojiStore } from "../../store";
///////////////////////////////////////////////////////////////////////////////
import StoryContext from "../../context/story/storyContext";
//////////////////////////////////////////////////////////////////////////////
// components
import StoryEditorSubGenre from "./StoryEditorSubGenre";

const StoryEditor = () => {
  ////////////////////////////////////////////////////////////////////////////////
  const storyContext = useContext(StoryContext);
  const { storyToEdit, clearEditStory } = storyContext;
  //////////////////////////////////////////////////////////////////////////////
  // variables from the zustand store
  const getValues = storyStore((state) => state.getValues);
  const emojisGlobal = emojiStore((state) => state.emojis);
  const getEmojis = emojiStore((state) => state.getEmojis);

  // state of current inputs
  const [formData, setFromData] = useState({
    title: "",
    genre: "default",
    text: "",
    _id: "",
  });

  const { title, genre, text, _id } = formData;

  useEffect(() => {
    if (emojisGlobal.length === 0) getEmojis();
    ////////////////////////////////////////////////////////////////////////////////
    if (storyToEdit !== null) setFromData(storyToEdit);
    else setFromData({ title: "", genre: "default", text: "" });
  }, [StoryContext, storyToEdit, clearEditStory]);
  ////////////////////////////////////////////////////////////////////////////////
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
        {storyToEdit ? (
          <button
            style={{ backgroundColor: "#98DDCA", color: "black" }}
            type="submit"
          >
            Preview edited story
          </button>
        ) : (
          <button type="submit">Preview to share</button>
        )}

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
          <div>
            <label htmlFor="genre">Genre</label>
            <select name="genre" value={genre} onChange={(e) => onChange(e)}>
              <option value="default">- Choose a genre -</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="SciFi">SciFi</option>
              <option value="Thriller">Thriller</option>
              <option value="Western">Western</option>
            </select>
          </div>
          <div>
            {genre === "default" ? null : <StoryEditorSubGenre genre={genre} />}
          </div>
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
          {/* /////////////////////////////////// */}
          <input
            type="text"
            name="_id"
            value={_id}
            onChange={(e) => onChange(e)}
          />
          {/* ////////////////////////////////////////////////// */}
        </div>
      </form>
    </div>
  );
};

export default StoryEditor;
