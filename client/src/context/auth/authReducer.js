import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  // REMOVE_ERROR
 
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
       
      };
    
    
    case REGISTER_SUCCESS:
      //put the token in the local storage
      localStorage.setItem('token', action.payload.token);
      return {
        //put taken in state
        ...state,
        ...action.payload,
        isAuthenticated: true
        //loading:false

       
      };
    
    // case LOGIN_SUCCESS:
    //   localStorage.setItem('token', action.payload.token);
    //   return {
       
    //   };
 
    case REGISTER_FAIL:
     //remove the token in the local storage
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload
      };
    
    // case REMOVE_ERROR:
    //   return {
    //     ...state,
    //     error: null
    //   };
   
    
    
    default:
      return state;
  }
};
