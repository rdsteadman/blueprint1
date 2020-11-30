React Blueprint Test
====================

https://coderjourney.com/tutorials/how-to-create-custom-react-components/
https://coderjourney.com/tutorials/

Created this folder by running `npx create-react-app blueprint1` 

Since I installed yarn, it seemed to use the yar version instead, and took longer than npm.
Also suggested a bunch of yarn commands instead:

	Success! Created navbar3 at C:\mydocs\React\test\navbar3
	Inside that directory, you can run several commands:

	yarn start
		Starts the development server.

	yarn build
		Bundles the app into static files for production.

	yarn test
		Starts the test runner.

	yarn eject
		Removes this tool and copies build dependencies, configuration files
		and scripts into the app directory. If you do this, you can't go back!

	We suggest that you begin by typing:

	cd navbar3
	yarn start

	Happy hacking!

https://blueprintjs.com/docs/

@blueprintjs/core is the primary Blueprint package on NPM and home to over 40 components. Install it with your package manager (Yarn is used in this example):

yarn add @blueprintjs/core react react-dom

[NOTE: didn't work without the react and react-dom added at the end... See here:

C:\mydocs\React\test\blueprint1>yarn add @blueprint/core
yarn add v1.22.5
[1/4] Resolving packages...
error An unexpected error occurred: "https://registry.yarnpkg.com/@blueprint%2fc
ore: Not found".
info If you think this is a bug, please open a bug report with the information p
rovided in "C:\\mydocs\\React\\test\\blueprint1\\yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this comm
and.
]

CSS: Blueprint site suggests adding:

<link href="path/to/node_modules/normalize.css/normalize.css" rel="stylesheet" />
<!-- blueprint-icons.css file must be included alongside blueprint.css! -->
<link href="path/to/node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css" rel="stylesheet" />
<link href="path/to/node_modules/@blueprintjs/core/lib/css/blueprint.css" rel="stylesheet" />

To index.html.

The tutorial uses something like:

import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

Maybe try both?

Now, to make the light/dark transition work, we need to keep the state somewhere. Probably
at the top-level (App.js) makes sense.

From the tutorial: https://reactjs.org/tutorial/tutorial.html

>Next, we need to change what happens when a Square is clicked. The Board component now maintains which squares are filled. We need to create a way for the Square to update the Board’s state. Since state is considered to be private to a component that defines it, we cannot update the Board’s state directly from Square.
>
>Instead, we’ll pass down a function from the Board to the Square, and we’ll have Square call that function when a square is clicked. We’ll change the renderSquare method in Board to...

Ok, this is working now: a function is passed down to call when the light/dark menu item is clicked.
This changes the state, and then the UI is automatically redrawn.

Now, for navigation (show a different page in the main "frame" when a menu item is clicked).

Check the original navbar tutorial to see how that worked ("bookworm"): https://github.com/Remchi/bookworm-react

Here is video #2 in the series, starting with overview and authentication:

https://www.youtube.com/watch?v=NO2DaxhoWHk&list=PLuNEz8XtB51KthRFiVtI8cmXNL9qlQJ5U&index=2

He speaks of routes and authenticated routes. Need a router in order to navigate between pages.

Form: has state that represents the content of the form as the user types. If it is validated,
it will be "sent" to the submit function that is provideed to the form.

Prefer form groups over labels
The React FormGroup component provides additional functionality such as helper text and modifier props as well as full label support. FormGroup supports both simple and complex use cases, therefore we recommend using it exclusively when constructing forms.

When the text changes in the form, we use this:

	onChange = e =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});

The "..." is a "spread", to save the data we already have... (?)
This one can be used for all text input fields. If there are other types of input (like select lists, etc.)
you will need a differernt onChange for them.

Some info on forms in Blueprint:
https://github.com/palantir/blueprint/issues/893

He uses the Validator module (npm) to help validate form data (e.g., that an e-mail
actually conforms to an e-mail). `yarn add validator`

https://www.npmjs.com/package/validator

He uses "proptypes" to define the prop types that each component uses.

https://www.npmjs.com/package/prop-types

Runtime type checking for React props and similar objects.

You can use prop-types to document the intended types of properties passed to components. React (and potentially other libraries—see the checkPropTypes() reference below) will check props passed to your components against those definitions, and warn in development if they don’t match.

Next episode:

https://youtu.be/RCPMuJ0zYak?list=PLuNEz8XtB51KthRFiVtI8cmXNL9qlQJ5U

Using nodejs server to do authentication... json token authentication(?)

https://github.com/Remchi/bookworm-react


So first he mentiones using Redux, "A Predictable State Container for JS Apps".

https://redux.js.org/introduction/getting-started
https://react-redux.js.org/introduction/quick-start

`yarn add redux react-redux`

https://almerosteyn.com/2016/08/redux-explained-again:

- Your state is wrapped in a store which handles all updates and notifies all code that subscribes to the store of updates to the state. You don’t need to pass state through an entire component tree anymore but can subscribe to these changes much closer to where the information is needed.

- The state is immutable, meaning that every change in state results in a totally new version of the state, enabling us to write more predictable code or go and look at any previous version of the state through the Redux developer tooling. This leads to an incredible debug experience.

... introducing Redux into your application will result in you having to write and maintain less code and less complicated code. And that is always a result worth investing in!

https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672

... Redux gives you code organization and debugging superpowers. It makes it easier to build more maintainable code, and much easier to track down the root cause when something goes wrong.

React hooks let you use state and React lifecycle features without using class and React component lifecycle methods. They were introduced in React 16.8.

Since the hooks API was introduced, I have stopped using:
- class components.
- The render prop pattern.

Also add redux-thunk for asynchronous actions and actions with side-effects.(?)

[wikipedia] In computer programming, a thunk is a subroutine used to inject an additional calculation into another subroutine. Thunks are primarily used to delay a calculation until its result is needed, or to insert operations at the beginning or end of the other subroutine. They have many other applications in compiler code generation and modular programming.

The term originated as a humorous, incorrect, past participle of "think". That is, a "thunk value" becomes available after its calculation routine is thought through, or executed

https://daveceddia.com/what-is-a-thunk/

thunk, n.
A thunk is another word for a function. But it’s not just any old function. It’s a special (and uncommon) name for a function that’s returned by another. Like this:

function wrapper_function() {
  // this one is a "thunk" because it defers work for later:
  return function thunk() {   // it can be named, or anonymous
    console.log('do stuff now');
  };
}

If you want to execute the “do stuff now” part, you have to call it like wrapper_function()() – calling it twice, basically.

redux-thunk
So how does this apply to Redux?

Well, if you’re familiar with Redux, you’ll know that it’s got a few main concepts: there are “actions”, “action creators”, “reducers”, and “middleware.”

Actions are just objects. As far as Redux is concerned, out of the box actions must be plain objects, and they must have a type property. Aside from that, they can contain whatever you want – anything you need to describe the action you want to perform.

Actions look like this:

// 1. plain object
// 2. has a type
// 3. whatever else you want
{
  type: "USER_LOGGED_IN",
  username: "dave"
}

And, since it’s kind of annoying to write those objects by hand all the time (not to mention error-prone), Redux has the concept of “action creators” to stamp these things out:

function userLoggedIn() {
  return {
    type: 'USER_LOGGED_IN',
    username: 'dave'
  };
}

A Very Small Library Indeed
The entirety of the redux-thunk library is this code right here:

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
		// This gets called for every action you dispatch.
		// If it's a function, call it.
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

		// Otherwise, just continue processing this action as usual
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;


https://github.com/reduxjs/redux-thunk

Why Do I Need This?
With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.

`yarn add redux-thunk`

wikipedia (https://en.wikipedia.org/wiki/Thunk):

	// 'hypot' is a binary function
	const hypot = (x, y) => Math.sqrt(x * x + y * y);

	// 'thunk' is a function that takes no arguments and, when invoked, performs a potentially expensive
	// operation (computing a square root, in this example) and/or causes some side-effect to occur
	const thunk = () => hypot(3, 4);

	// the thunk can then be passed around without being evaluated...
	doSomethingWithThunk(thunk);

	// ...or evaluated
	thunk(); // === 5


Redux: createStore: creates the store to store the most important stuff.

Also using redux dev tools:
https://github.com/zalmoxisus/redux-devtools-extension

`yarn add --dev redux-devtools-extension`

And redux dev tools extension for chrome:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

(index.js)
import { composeWithDevTools } from 'redux-devtools-extension';

Wrap the App with the store Provider, so it is available to the application:

	ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
	);

[Cool - it works - see screenshot: redux-dev-chrome.PNG]







