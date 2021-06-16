import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
   
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    
  };

  // Register User
  const register = async formData => {
    const config = {
      //we need the header -token-
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {  
      const res = await axios.post('/auth/signUp', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        //error -400 bad request- msg from backend in case the user exists 
        payload: err.response.data.msg
      });
    }
  };

  // Login User
  const login = async formData => {
   
  };

  // Logout


  // Clear Errors


  return (
    <AuthContext.Provider
      value={{
        
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
