import React, { useReducer } from "React";
import { v4 as uuidv4 } from "uuid";
import { EDIT_PROFILE } from "../types";
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer";

const ProfileState = (props) => {
  const initialState = {
    users: [
      {
        username: null,
        name: null,
        email: null,
        password: null,
        age: null,
        location: null,
      },
    ],
  };
  const [state, dispatch] = useReducer(profileReducer, initialState);

  // Methods...........
  //Action
  //Edit Profile
  const editProfile = (profile) => {
    dispatch({ type: EDIT_PROFILE, payload: profile });
  };

  return (
    <ProfileContext.Provider
      value={{
        users: state.users,
        editProfile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};
export default ProfileState;
