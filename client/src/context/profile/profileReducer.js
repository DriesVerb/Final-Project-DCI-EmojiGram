import { EDIT_PROFILE } from "../types";

export default (state, action) => {
  switch (action.type) {
    //EDIT_PROFILE
    case EDIT_PROFILE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
