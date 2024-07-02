import { combineReducers } from 'redux';

const compoundsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_COMPOUND':
        return  action.payload
      
      default:
        return state;
    }
  };
  

//I'm confused by the placement of this reducer
// const allCompounds = (state = {}, action) => {
//     switch (action.type) {
//       case 'FETCH_COMPOUNDS':
//         return action.payload  
        
//       default:
//         return state;
//     }
//   };
  
  
export default combineReducers({
    compoundsReducer,
    // allCompounds,
  });
  
  
  