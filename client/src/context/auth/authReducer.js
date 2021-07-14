import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    // Load User
    case USER_LOADED:
      localStorage.setItem("token", state.token);

      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    // redister User & Log in -Both Return the token-
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      //put the token in the local storage
      localStorage.setItem("token", action.payload.token);
      return {
        //put token in state
        ...state,
        ...action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGOUT:
      console.log(action.payload)
      //remove the token in the local storage
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        //the error res.msg 
        error: action.payload,
      };

   
    //clear errors
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
