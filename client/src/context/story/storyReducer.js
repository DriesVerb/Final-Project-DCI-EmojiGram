import { STORY_PUBLISH } from "../types";

export default (state, action) => {
  switch (action.type) {
    case STORY_PUBLISH:
      return {
        ...state,
      };
    default:
      return state;
  }
};
