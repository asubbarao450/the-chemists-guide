import { combineReducers } from 'redux';

const compoundsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_COMPOUND':
        return  action.payload
      
            
        
      default:
        return state;
    }
  };
  


const allCompounds = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_COMPOUNDS':
        return action.payload  
        
      default:
        return state;
    }
  };
  
  
export default combineReducers({
    compoundsReducer,
    allCompounds,
  });
  
  
  