import {combineReducers} from 'redux'; // so multiple reducers can be combined into one

// A reducer is a function that takes state and returns new state.
export default combineReducers( {
	user: () => ({}) // return an empty object
});