import { combineReducers } from 'redux';

const compoundsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_COMPOUND':
        return action.payload;
      
      default:
        return state;
    }
  };
  
  
  export default compoundsReducer;