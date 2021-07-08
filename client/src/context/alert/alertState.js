import React, { useReducer } from 'react';

//to generate ids
import {v4 as uuidv4} from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {SET_ALERT, REMOVE_ALERT} from '../types';

const AlertState = props => {
  //array of objects
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert // we add time out to be flixable if we want to pass it from component, but by defult it is 5000
  const setAlert = (msg, alertStyle, timeout = 5000) => {
    //generate random Id 
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      //send msg, type, message id
      payload: {msg, alertStyle, id},
    });
  // remove the alert after 5 seconds 
    setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
         alerts: state,
        setAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
