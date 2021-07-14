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
import EmojiChar from "./EmojiChar";

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
    emojis: [],
  });

  const { title, genre, text, _id, emojis } = formData;

  useEffect(() => {
    if (emojisGlobal.length === 0 && emojis.length === 0) getEmojis();
    ////////////////////////////////////////////////////////////////////////////////
    if (storyToEdit !== null) setFromData(storyToEdit);
    else
      setFromData({
        title: "",
        genre: "default",
        text: "",
        emojis: emojisGlobal,
      });
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="grid-container"
    >
      <div className="grid-container__right">
        {storyToEdit ? (
          <button
            style={{ backgroundColor: "#98DDCA", color: "black" }}
            type="submit"
          >
            Preview edited story
          </button>
        ) : (
          <button type="submit">Preview to Share</button>
        )}
      </div>
      <div className="grid-container__left">
        <div className="story-nav">
          <div className="story-nav__form-box">
            <label className="story-nave__label" htmlFor="title">
              Title of the Piece:
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="story-nav__form-box">
            <label htmlFor="genre">Genre:</label>
            <select
              name="genre"
              defaultValue={genre}
              onChange={(e) => onChange(e)}
            >
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
          <div className="story-nav__form-box">
            {genre === "default" ? null : <StoryEditorSubGenre genre={genre} />}
          </div>
        </div>
      </div>
      <div className="grid-container__mid story-editor__writer">
        <p>You will be a writing a story inspired by these emojis:</p>
        <div className="story-editor__emojis">
          {emojis.length > 0 ? (
            <div className="emoji__row">
              {emojis.map((emoji) => {
                return <EmojiChar emoji={emoji} size="large" />;
              })}
            </div>
          ) : (
            <div className="emoji__row">
              {emojisGlobal.length > 0 &&
                emojisGlobal.map((emoji) => {
                  return <EmojiChar emoji={emoji} size="large" />;
                })}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="story editor
          "
          ></label>
          <textarea
            name="text"
            defaultValue={text}
            onChange={(e) => onChange(e)}
            cols="90"
            rows="45"
          ></textarea>
          {/* /////////////////////////////////// */}
          {/* <input
            type="text"
            name="_id"
            defaultValue={_id}
            onChange={(e) => onChange(e)}
          /> */}
          {/* ////////////////////////////////////////////////// */}
        </div>
      </div>
    </form>
  );
};

export default StoryEditor;
