
// A reducer is just a function that takes state and action, and returns new state.
// So we start with boilerplace with empty state and action.

// https://css-tricks.com/understanding-how-reducers-are-used-in-redux/
// If the application’s state is managed by Redux, the changes happen inside a reducer
// function — this is the only place where state changes happen.
//
// The reducer function makes use of the initial state of the application and something
// called action, to determine what the new state will look like.

import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types"

// In VS Code (addon), there is a snippet: rxreducer (type rx and you'll see it) for Redux Reducer

const initialState = {

}

// state defaults to initialState, action to an object with an action type and payload.
export default (state = initialState, action = { actionType, payload }) => {
	//export default (state = {}, action = {}) => {
	switch (action.type) {

		case USER_LOGGED_IN:
			//return { ...state, ...payload }
			// Add the user to the state
			return action.user;

		case USER_LOGGED_OUT:
			// Make the state empty again (remove the user)
			return {};

		default:
			return state
	}
}



