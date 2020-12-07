import { USER_LOGGED_IN } from '../types';
import api from '../components/api';

export const userLoggedIn = (user) => ({
	type: USER_LOGGED_IN,
	user
})

// This makes an API request using axios (in api.js)
// We get the user object from it with e-mail and authentication token
export const login = (credentials) => (dispatch) =>
	api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));


//export const login = (credentials) => () =>
//	api.user.login(credentials).then(res => res.data.user);
