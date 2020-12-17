import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'; // thunk middleware
import { Provider } from 'react-redux'; // connect react and redux
import thunk from 'redux-thunk'; // to use "thunks"
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoggedIn } from './actions/auth';
import jwt_decode from 'jwt-decode';

// Create the Redux store
const store = createStore(
  rootReducer, // the whole tree / state object
  composeWithDevTools(applyMiddleware(thunk)) // let's us use Redux dev tools (in Chrome etc.)
);

if (localStorage.bookwormJWT) {
  console.log("There's a token in local storage: " + localStorage.bookwormJWT)
  const payload = jwt_decode(localStorage.bookwormJWT);
  const user = { token: localStorage.bookwormJWT, email: payload.email }; // later paylod.confirmed
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      { /* Redux "provider" to give the application the Redux state store */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
