import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "./setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = (props) => {
  const initialState = {
    //javaScript method to access the browser local storage
    token: localStorage.getItem("token"),
    //if could logged in or not
    isAuthenticated: null,
    // for the spinner
    // loading:true,
    user: null,
    //when register/log in fail will fill it with the backend msg
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register User
  const register = async (formData) => {
    const config = {
      // the header for token
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/auth/signUp", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        //res.data is the token
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        //error -400 bad request- msg from backend in case the user exists
        payload: err.response.data.msg,
      });
    }
  };

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      //we have token in the localStorage so we can make the request because we pass the middleware
      const res = await axios.get("/auth/login");

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('auth/login', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        //error -400 bad request- msg from backend in case the user exists
        payload: err.response.data.msg,
      });
      console.log(state.error)
    }
  };
  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT })
   
  };

  //clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loadin: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
