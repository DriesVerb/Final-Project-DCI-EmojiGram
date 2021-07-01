import {
  STORY_PUBLISH,
  ADD_STORY,
  DELETE_STORY,
  // SET_STORY ,
  CLEAR_EDITEDSTORY,
  // UPDATE_STORY ,
  // CLEAR_STORY,
  SET_EDITEDSTORY,
  SHOW_STORY,
  // STORY_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_STORY:
      console.log(action.payload);
      return {
        ...state,
        stories: { ...state.stories, ...action.payload },
      };

    //////////////////////////////////////////////////////////////////////
    case SHOW_STORY:
      return {
        ...state,
        singleStory: action.payload,
      };

    //////////////////////////////////////////////////////////////////////
    case STORY_PUBLISH:
      return {
        ...state,
        stories: action.payload,
      };
    //////////////////////////////////////////////////////////////////////
    case DELETE_STORY:
      return {
        ...state,
        stories: state.stories.filter((story) => story._id !== action.payload),
        singleStory: {},
        loading: false,
      };
    //////////////////////////////////////////////////////////////////////
    case SET_EDITEDSTORY:
      // console.log(action.payload)

      return {
        ...state,
        storyToEdit: action.payload,
      };

    //////////////////////////////////////////////////////////////////////
    case CLEAR_EDITEDSTORY:
      return {
        ...state,
        storyToEdit: null,
      };

    //////////////////////////////////////////////////////////////////////
    // case UPDATE_STORY:
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     stories: state.stories.map(story=>
    //       story._id === action.payload._id ? action.payload : story
    //     ),
    //     loading: false
    //   };

    default:
      return state;
  }
};
