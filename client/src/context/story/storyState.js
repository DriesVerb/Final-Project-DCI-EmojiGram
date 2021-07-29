import React, { useReducer } from 'react';
import axios from 'axios';
//to generate ids
// import {v4 as uuidv4} from 'uuid';
// import context
import setAuthToken from '../auth/setAuthToken';
import StoryContext from './storyContext';
import storyReducer from './storyReducer';
import {
  STORY_PUBLISH,
  STORY_PUBLISH_LIKES,
  DELETE_STORY,
  // EDIT_STORY,
  //  SET_STORY ,
  //  CLEAR_EDITEDSTORY ,
  // UPDATE_STORY,
  //  CLEAR_STORY ,
  SET_EDITEDSTORY,
  CLEAR_EDITEDSTORY,
  SHOW_STORY,
  STORY_ERROR,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from '../types';

const StoryState = (props) => {
  const initialState = {
    stories: [
      {
        user: '',
        title: '',
        text: '',
        genre: '',
        subGenre: '',
        likes: [],

        favorite: '',
        _id: '',
        comments: null,
        emojis: [],
      },
    ],
    added: null,
    // isLiked: false,
    topStories: [],
    singleStory: null,
    storyToEdit: null,
    msg: null,
    error: null,
  };
  const [state, dispatch] = useReducer(storyReducer, initialState);
  /////////////////////////////////////////////////////////////////////////////////////////////
  //Create Story

  // const addStory = async (story) => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const res = await axios.post("story/create", story, config);

  //     dispatch({
  //       type: ADD_STORY,
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: STORY_ERROR,
  //       payload: err.response,
  //     });
  //   }
  //   console.log(state.stories);
  // };
  /////////////////////////////////////////////////////////////////////////////////////////////
  //Publish Story

  const publishStory = async (id) => {
    console.log(id);
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      //we have token in the localStorage so we can make the request because we pass the middleware
      const res = await axios.get(`/user/profile/mystories/${id}`);
      dispatch({
        type: STORY_PUBLISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  };

  const friends = async (id) => {
    try {
      const res = await axios.get(`/user/profile/friends/${id}`);
      dispatch({
        type: STORY_PUBLISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  };
  //////////////////////////////////////////////////////////////////////

  const publishStoryPublic = async (story) => {
    try {
      const res = await axios.get('/user/story/publishedStory');
      dispatch({
        type: STORY_PUBLISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  };

  const publishStoryPublicGenre = async (genre) => {
    try {
      const res = await axios.get(`/user/story/genre/${genre}`);
      dispatch({
        type: STORY_PUBLISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  };
  const publishStoryPublicAlpha = async () => {
    try {
      const res = await axios.get(`/user/story/filter`);
      dispatch({
        type: STORY_PUBLISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  };
  const publishStoryPublicViews = async () => {
    try {
      const res = await axios.get(`/user/story/views`);
      dispatch({
        type: STORY_PUBLISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  };
  const publishStoryPublicLikes = async () => {
    try {
      const res = await axios.get(`/user/story/likes`);
      dispatch({
        type: STORY_PUBLISH_LIKES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  };

  //Show Story

  /*  const showStory = async id => {
        
  }; */
  //////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////
  //Show Story

  const showStory = async (id) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      //we have token in the localStorage so we can make the request because we pass the middleware
      const res = await axios.get(`/user/story/show/${id}`);

      dispatch({
        type: SHOW_STORY,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////
  //set editedStory

  const setEditedStory = (story) => {
    dispatch({ type: SET_EDITEDSTORY, payload: story });
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  //set editedStory
  //don't need payload, just need it to set editedText to null
  const clearEditedStory = () => {
    dispatch({ type: CLEAR_EDITEDSTORY });
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  //edit story

  // const updateStory = async story => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };

  //   try {
  //     const res = await axios.put(
  //       `/user/story/editStory/${story._id}`,
  //       story,
  //       config
  //     );

  //     dispatch({
  //       type:  UPDATE_STORY,
  //       payload: res.data
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: STORY_ERROR,
  //       payload: err.response.msg
  //     });
  //   }
  // }

  /////////////////////////////////////////////////////////////////////////////////////////////

  // delete story

  const deleteStory = async (id) => {
    try {
      await axios.delete(`/user/story/delete/${id}`);

      dispatch({
        type: DELETE_STORY,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: STORY_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////

  const addLike = async (id, color) => {
    try {
      const res = await axios.put(`/user/story/like/${id}`);

      dispatch({
        type: UPDATE_LIKES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: STORY_ERROR,
      });
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  const removeLike = async (id) => {
    try {
      const res = await axios.put(`/user/story/unlike/${id}`);

      dispatch({
        type: UPDATE_LIKES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: STORY_ERROR,
        payload: err.response.data.msg,
      });
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////
  //add comments

  const addComment = async (id, formData) => {
    try {
      const res = await axios.post(`/user/story/Comment/${id}`, formData);

      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });

      // dispatch(setAlert('Comment Added', 'success'));
    } catch (err) {
      dispatch({
        type: STORY_ERROR,
        payload: err.response.msg,
      });
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////

  // Delete comment
  const deleteComment = async (id, commentId) => {
    try {
      await axios.delete(`/user/story/Comment/${id}/${commentId}`);

      dispatch({
        type: REMOVE_COMMENT,
        payload: { commentId, id },
      });

      // dispatch(setAlert('Comment Removed', 'success'));
    } catch (err) {
      dispatch({
        type: STORY_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //show single story public
  const showSinglePublic = async (id) => {
    try {
      const res = await axios.get(`/user/story/showPublic/${id}`);

      dispatch({
        type: SHOW_STORY,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  };

  return (
    <StoryContext.Provider
      value={{
        stories: state.stories,
        // addStory,
        friends,
        publishStory,
        deleteStory,
        showStory,
        publishStoryPublicGenre,
        publishStoryPublicAlpha,
        publishStoryPublic,
        publishStoryPublicLikes,
        publishStoryPublicViews,
        singleStory: state.singleStory,
        topStories: state.topStories,
        setEditedStory,
        clearEditedStory,
        storyToEdit: state.storyToEdit,
        addLike,
        removeLike,
        // isLiked: state.isLiked
        added: state.added,
        addComment,
        deleteComment,
        showSinglePublic,
      }}
    >
      {props.children}
    </StoryContext.Provider>
  );
};
export default StoryState;
