import React, { useReducer } from "react";
import axios from "axios";

// import context
import StoryContext from "./storyContext";
import storyReducer from "./storyReducer";

const StoryState = (props) => {
  const initialState = {
    Title: null,
    emojis: [],
    Genre: null,
    text: null,
    error: null,
  };
};

const [state, dispatch] = useReducer(storyReducer, initialState);
