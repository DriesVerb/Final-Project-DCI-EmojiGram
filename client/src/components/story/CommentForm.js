import React, { useState, useContext, useEffect } from 'react';
import StoryContext from '../../context/story/storyContext';

const CommentForm = () => {
  const storyContext = useContext(StoryContext);
  const { addComment, singleStory } = storyContext;
  const [text, setText] = useState('');
  useEffect(() => {}, []);

  return (
    <div className="">
      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addComment(singleStory._id, { text });
            setText('');
            console.log(singleStory.comments);
          }}
        >
          <div className="comments">
            <div className="comments__flex">
              <textarea
                name="text"
                cols="20"
                rows="2"
                placeholder="Comment the story"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  console.log(text);
                }}
                required
              />
              <input
                type="submit"
                className="btn btn-secondary comments__btn"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
