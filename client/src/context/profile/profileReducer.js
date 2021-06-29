import {
  GET_PROFILE,
  EDIT_PROFILE,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_PROFILE,
  EDIT_ERROR,
  CLEAR_PROFILE,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    //GET_PROFILE
    case GET_PROFILE:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    //EDIT_PROFILE
    case EDIT_PROFILE:
      return {
        ...state,
        user: state.user.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };

    //DELETE_CURRENT
    case DELETE_PROFILE:
      return {
        ...state,
        users: state.user.filter((user) => user._id !== action.payload),
      };

    //SET_CURRENT
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    //CLEAR_CURRENT
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    //CLEAR PROFILE
    case CLEAR_PROFILE:
      return {
        ...state,
        user: null,
        error: null,
        current: null,
      };

    //EDIT_CURRENT
    case EDIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
