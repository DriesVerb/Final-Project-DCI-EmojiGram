import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
// import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  // REMOVE_ERROR 
} from '../types';

const AuthState = props => {
  const initialState = {
    //javaScript method to access the browser local storage
    token: localStorage.getItem('token'),
    //if could logged in or not
    isAuthenticated: null,
   // for the spinner 
    // loading:true,
    user: null,
    //when register/log in fail will fill it with the backend msg
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register User
  const register = async formData => {
    const config = {
      // the header for token  
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {  
      const res = await axios.post('/auth/signUp', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        //res.data is the token 
        payload: res.data
      });

   
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        //error -400 bad request- msg from backend in case the user exists 
        payload: err.response.data.msg
      });
    }
  };
  
  // Load User
  const loadUser = async () => {
    
  };


  // Login User
  const login = async formData => {
   
  };

  // Logout


  // Clear Errors

  // const clearErrors = async () => {
  //   dispatch({
  //     type: REMOVE_ERROR ,
        
  //   });
    
  // };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loadin: state.loading,
        user:state.user,
        error: state.error,
        register,
        loadUser,
        login

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
