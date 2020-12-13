import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../components/api';

export const userLoggedIn = (user) => ({
	type: USER_LOGGED_IN,
	user
})

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT,
})

// Login "thunk" action
// This makes an API request using axios (in api.js)
// We get the user object from it with e-mail and authentication token
export const login = (credentials) => (dispatch) =>
	api.user.login(credentials).then(user => {
		localStorage.bookwormJWT = user.token;
		dispatch(userLoggedIn(user));
	});

// Logout "thunk" action
export const logout = () => (dispatch) => {
	localStorage.removeItem('bookwormJWT');
	dispatch(userLoggedOut());
};

export const signup = (data) => (dispatch) =>
	api.user.signup(data).then(user => {
		localStorage.bookwormJWT = user.token;
		dispatch(userLoggedIn(user));
	});


//export const login = (credentials) => () =>
//	api.user.login(credentials).then(res => res.data.user);
