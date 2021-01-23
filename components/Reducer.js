import { combineReducers } from 'redux';

const cityReducer = (state = 'Troyes', action) => {
  switch (action.type) {
    case 'SWITCH_CITY':
      return action.newCity
    default:
      return state
  }
};
 
export default combineReducers({
  city: cityReducer
});