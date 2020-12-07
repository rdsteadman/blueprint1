import { combineReducers } from 'redux'; // so multiple reducers can be combined into one
import user from './reducers/user';

// A reducer is a function that takes state and returns new state.
export default combineReducers({
	//user: () => ({}) // function that returns an empty object (for now)
	user
});