import React, { useState, useContext, useEffect } from 'react';
import StoryContext from '../../context/story/storyContext';

const CommentForm = () => {
  const storyContext = useContext(StoryContext);
  const { addComment, singleStory } = storyContext;
  const [text, setText] = useState('');
  useEffect(() => {}, []);

  return (
    <div className="d-flex justify-content-start row-hl">
      <div className="d-flex flex-column row-hl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addComment(singleStory._id, { text });
            setText('');
            console.log(singleStory.comments);
          }}
        >
          <div className="form-group mt-5 ">
            <div className="d-flex flex-column row-hl">
              <textarea
                name="text"
                cols="86"
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
                className="btn btn-secondary my-1"
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
