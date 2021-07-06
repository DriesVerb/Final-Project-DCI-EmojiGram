import React, { useReducer } from "react";
import axios from "axios";
//to generate ids
// import {v4 as uuidv4} from 'uuid';
// import context
import setAuthToken from "../auth/setAuthToken";
import StoryContext from "./storyContext";
import storyReducer from "./storyReducer";
import {
  STORY_PUBLISH,
  ADD_STORY,
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
} from "../types";

const StoryState = (props) => {
  const initialState = {
    stories: [
      {
        user: "",
        title: "",
        text: "",
        genre: "",
        subGenre: "",
        likes: "",

        favorite: "",
        _id: "",
        comments: "",
        emojis: [],
      },
    ],
    singleStory: null,
    storyToEdit: null,
    msg: null,
    error: null,
  };
  const [state, dispatch] = useReducer(storyReducer, initialState);
  //Create Story

  const addStory = async (story) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("story/create", story, config);

      dispatch({
        type: ADD_STORY,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: STORY_ERROR,
        payload: err.response,
      });
    }
    console.log(state.stories);
  };

  //Publish Story

  const publishStory = async (story) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      //we have token in the localStorage so we can make the request because we pass the middleware
      const res = await axios.get("/user/profile/mystories");
      dispatch({
        type: STORY_PUBLISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: STORY_ERROR });
    }
  }
//////////////////////////////////////////////////////////////////////

const publishStoryPublic = async story =>{
  
  try {
    const res = await axios.get("/user/story/publishedStory")
    dispatch({
      type: STORY_PUBLISH,
      payload: res.data,
    });
  }catch (err) {
      dispatch({ type: STORY_ERROR})
    }
  }


const publishStoryPublicGenre = async story =>{
  
  try {
    const res = await axios.get("/user/story/genre/:genre")
    dispatch({
      type: STORY_PUBLISH,
      payload: res.data,
    });
  }catch (err) {
      dispatch({ type: STORY_ERROR})
    }
  }



   //Show Story
  
 /*  const showStory = async id => {
        
  }; */
  //////////////////////////////////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////
  //set editedStory

  const setEditedStory = (story) => {
    dispatch({ type: SET_EDITEDSTORY, payload: story });
  };

  //////////////////////////////////////////////////////////////////////
  //set editedStory
  //don't need payload, just need it to set editedText to null
  const clearEditedStory = () => {
    dispatch({ type: CLEAR_EDITEDSTORY });
  };

  //////////////////////////////////////////////////////////////////////
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

  //////////////////////////////////////////////////////////////////////

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
        payload: err.response.msg,
      });
    }
  };

  //////////////////////////////////////////////////////////////////////

  return (
    <StoryContext.Provider
      value={{
        stories: state.stories,
        addStory,
        publishStory,
        publishStoryPublic,
        deleteStory,
        showStory,
        publishStoryPublicGenre,
        singleStory: state.singleStory,

        setEditedStory,
        clearEditedStory,
        storyToEdit: state.storyToEdit,
      }}
    >
      {props.children}
    </StoryContext.Provider>
  );
};
export default StoryState;
