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
  UNFOLLOW_USER,
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

    case GET_USERPROFILE:
      const [user] = action.payload;

      return {
        ...state,
        users: user,
      };

    //EDIT_PROFILE
    case EDIT_PROFILE:
      return {
        ...state,
        user: action.payload,
      };

    //DELETE_CURRENT
    case DELETE_PROFILE:
      return {
        ...state,
        users: state.user.filter((user) => user._id !== action.payload),
      };

    //SET_CURRENT
    case SET_CURRENT:
      // console.log(action.payload)
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
        user: {},
        error: null,
        current: null,
      };

    //EDIT_CURRENT
    case EDIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case FOLLOW_USER:
      return {
        ...state,
        isFollow: true,
        users: { ...state.users, ...action.payload },
        // loading: false
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        isFollow: false,
        users: { ...state.users.followers, ...action.payload },
        // loading: false
      };
    default:
      return state;
  }
};
