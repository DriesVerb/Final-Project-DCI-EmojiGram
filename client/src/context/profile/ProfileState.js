import React, { useReducer } from "react";
import axios from "axios";
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer";
// import setAuthToken from "../auth/setAuthToken";
import {
  GET_PROFILE,
  EDIT_PROFILE,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_PROFILE,
  EDIT_ERROR,
  CLEAR_PROFILE,
  GET_USERPROFILE,
  FOLLOW_USER,
  FOLLOW_ERROR,
  UNFOLLOW_USER,
} from "../types";

const ProfileState = (props) => {
  const initialState = {
    user: [],
    users: [
      {
        username: "",
        name: "",
        email: "",
        stories:"",
        password: "",
        location: "",
        hobby: "",
        occupation: "",
        age: "",
        followers: [],
        followeing: [],
      },
    ],

    isFollow: null,
    current: null,
    error: null,
  };

  // pull out the state and dispatch from reducer
  const [state, dispatch] = useReducer(profileReducer, initialState);

  //Actions
  //Get Profile
  const getProfile = async () => {
    try {
      const res = await axios.get(`/user/profile`);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: EDIT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  //get user profile

  const getUserProfile = async (id) => {
    try {
      const res = await axios.get(`/user/profile/${id}`);

      dispatch({
        type: GET_USERPROFILE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: EDIT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  //Edit Profile
  const editProfile = async (user) => {
    const config = {
      headers: {
        "Content-Types": "application/json",
      },
    };
    try {
      const res = await axios.put(`/user/edit/${user._id}`, user, config);
      dispatch({
        type: EDIT_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: EDIT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  //Set Current user
  const setCurrent = (user) => {
    dispatch({ type: SET_CURRENT, payload: user });
  };

  //Clear Current user
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Delete Current
  const deleteProfile = async (id) => {
    try {
      await axios.delete(`/user/delete/${id}`);
      dispatch({
        type: DELETE_PROFILE,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: EDIT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  //Clear Profile
  const clearProfile = () => {
    dispatch({ type: CLEAR_PROFILE });
  };

  const followUsers = async (id) => {
    try {
      const res = await axios.put(`/user/profile/${id}/follow-user`);

      dispatch({
        type: FOLLOW_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FOLLOW_ERROR,
      });
    }
  };

  const unfollowUsers = async (id) => {
    try {
      const res = await axios.put(`/user/profile/${id}/unfollow-user`);

      dispatch({
        type: UNFOLLOW_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FOLLOW_ERROR,
      });
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        user: state.user,
        users: state.users,
        current: state.current,
        error: state.error,
        getProfile,
        setCurrent,
        editProfile,
        clearCurrent,
        deleteProfile,
        clearProfile,
        getUserProfile,
        storyUser: state.storyUser,
        followUsers,
        isFollow: state.isFollow,
        followeings: state.followeings,
        unfollowUsers,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};
export default ProfileState;
