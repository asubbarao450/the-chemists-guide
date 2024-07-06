import { combineReducers } from 'redux';


//compounds reducer gets the compoundsReducer 
const compoundsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_COMPOUNDS':
    //the below return statement will update the state to action.payload
    //the state will contain all compounds from postgres database
        return action.payload
      
      default:
        return state;
    }
  };
  

  const compoundReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_COMPOUND':
    
        return action.payload
      
      default:
        return state;
    }
  };

  
export default combineReducers({
    compoundsReducer,
    compoundReducer
  });
  
  
  