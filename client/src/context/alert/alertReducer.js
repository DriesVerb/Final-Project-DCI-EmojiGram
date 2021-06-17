import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      //add action object to the state
      return [...state, action.payload];
    case REMOVE_ALERT:
      // find the write alert and delete it by its id
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
};
