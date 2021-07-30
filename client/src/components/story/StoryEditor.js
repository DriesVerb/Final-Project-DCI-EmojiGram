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

  const { title, genre, text, emojis } = formData;

  useEffect(() => {
    if (emojisGlobal.length === 0 && emojis.length === 0) {
      getEmojis();
    }
    ////////////////////////////////////////////////////////////////////////////////
    if (storyToEdit !== null) setFromData(storyToEdit);
    else
      setFromData({
        title: "",
        genre: "default",
        text: "",
        emojis: emojisGlobal,
      });
  }, [StoryContext, storyToEdit, clearEditStory, emojisGlobal]);
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
      <div className="story-editor">
        <div className="story-editor__prompt">

          <h4>You will be a writing a story inspired by these emojis:</h4>

          <div className="story-editor__emojis">
            {emojis.length > 0 ? (
              <div className="emoji__row">
                {emojis.map((emoji, id) => {
                  return <EmojiChar key={id} emoji={emoji} size="large" />;
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
        </div>

        <div className="story-options">
          <div className="story-options__items">
            <div className="story-options__title">
              <label className="story-nav__label" htmlFor="title">
                Title of the Piece:
              </label>
              <input
                required
                type="text"
                name="title"
                defaultValue={title}
                onChange={(e) => onChange(e)}
                class="preview-bottom"
              />
            </div>
            <div className="story-options__genre">
              <label htmlFor="genre" className="story-nav__label">Genre:</label>
              <select
                name="genre"
                defaultValue={genre}
                onChange={(e) => onChange(e)}
                required
                class="preview-bottom"
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
          </div>
        </div>

        <div className="story-textarea ">
          <label
            htmlFor="story editor
          "
          ></label>
          <textarea
            className="story-textarea"
            name="text"
            defaultValue={text}
            onChange={(e) => onChange(e)}
            required
          ></textarea>
        </div>
      </div>

      <div className="story-button">
        {storyToEdit ? (
          <button
            style={{ backgroundColor: "#98DDCA", color: "black" }}
            type="submit"
          >
            Preview edited story
          </button>
        ) : (
          <button type="submit" class="preview-bottom">Preview to Share</button>
        )}
      </div>
    </form>
  );
};

export default StoryEditor;
