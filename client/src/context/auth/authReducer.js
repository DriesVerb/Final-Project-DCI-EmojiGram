import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
 
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
       
      };
    
    
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
       
      };
    
    
    case REGISTER_FAIL:
  
      localStorage.removeItem('token');
      return {
       
      };
    
    
   
    
    
    default:
      return state;
  }
};
