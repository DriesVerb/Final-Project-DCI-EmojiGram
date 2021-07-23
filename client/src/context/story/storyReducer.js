import {
  STORY_PUBLISH,
  STORY_PUBLISH_LIKES,
  ADD_STORY ,
  DELETE_STORY ,
  // SET_STORY , 
  CLEAR_EDITEDSTORY ,
  // UPDATE_STORY ,
  // CLEAR_STORY,
  SET_EDITEDSTORY,
  SHOW_STORY,
  // STORY_ERROR 
  UPDATE_LIKES,

  ADD_COMMENT,
  REMOVE_COMMENT
 } from "../types";
 
export default (state, action) => {
  switch (action.type) {

    
    case ADD_STORY:
      console.log(action.payload)
      
      console.log(action.payload)
      return {
        ...state,
        stories: { ...state.stories, ...action.payload }
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
        added:true
            
      };

    case STORY_PUBLISH_LIKES:
      return {
        ...state,
        topStories: action.payload,
            
      };
    //////////////////////////////////////////////////////////////////////
    case DELETE_STORY:
    
      return {
        ...state,
        stories: state.stories.filter(
          story => story._id !== action.payload
             
        ),
        singleStory: {},
        loading: false
            
      };
    //////////////////////////////////////////////////////////////////////
    case SET_EDITEDSTORY:
      // console.log(action.payload)
     
      return {
        ...state,
        storyToEdit: action.payload
      };
    
    //////////////////////////////////////////////////////////////////////
    case CLEAR_EDITEDSTORY:
      return {
        ...state,
        storyToEdit: null
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
    ////////////////////////////////////////////////////////////////////// 
    

    case UPDATE_LIKES:
      return {
        ...state,


        isLiked: true,
   
        singleStory: { ...state.singleStory, likes: action.payload.likes },
        stories: state.stories.map((story) =>
          story._id === action.payload.id ? { ...story, likes: action.payload.likes } : story
        ),
    
   
        // loading: false
      };
    
    //////////////////////////////////////////////////////////////////////  
    
    case ADD_COMMENT:
      return {
        ...state,
        singleStory: { ...state.singleStory, comments: action.payload },
        stories: state.stories.map((story) =>
          story._id === action.payload.id ? { ...story, comments: action.payload.comments } : story),
      };
  

    //////////////////////////////////////////////////////////////////////
    case REMOVE_COMMENT:
      return {
        ...state,

        singleStory: {
          ...state.singleStory,
          comments: state.singleStory.comments.filter(
            (comment) => comment._id !== action.payload.commentId
          )
        },

        stories: state.stories.map((story) =>
          story._id === action.payload.id ? {
            ...state.story,
            comments: story.comments.filter(
              (comment) => comment._id !== action.payload
                      )
                 }:story ) 
    }
  


    default:
      return state;
  }
};
