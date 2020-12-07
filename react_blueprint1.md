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


-------------------------------------------------------------------------------------------------

So first he mentiones using Redux, which uses "thunks" to perform asynchronous actions.

"Some people like to store everything in Redux, I'm not one of them.... especially with forms...
only when I really need it... because most of the time we don't need to store the form data,
only when we submit it. ... Onlu when I need super cool and smart form."

Form: has state. We use a "data" object within that.



 ... Redux, "A Predictable State Container for JS Apps".

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

"Now we have redux, which means we have actions and can dispatch them".



--------------------------------

Ok, backing up a bit now, to review the environmental things Rem is using in his tutorial
series. (his setup and editor looks really cool!).

He seems to be using a Mac, with a unix-like command line.

He also uses "Sublime text" editor, which he starts like "s ." on the command line(!).

There is a version for windows... I'll check it out!
https://www.sublimetext.com/

BTW, VSCode is also in your PATH, you can edit files with "code filename", or just "code"
to start the editor. Once you install sblime, it can be launched with "subl".

Cool. Now "subl ." in the C:\mydocs\React\test\blueprint1 directory opens the folder
in Sublime editor.

https://www.infoworld.com/article/3440105/visual-studio-code-vs-sublime-text-how-to-choose.html

I recommend installing both Visual Studio Code and Sublime Text and also adding both of their command-line utilities, code and subl, to your path. There is no real downside to having both products installed.

Over the course of a month, try alternating between the two products as you open programming projects until you understand the characteristics of both programs, then allow yourself to pick one or the other depending on what you plan to do. Also add plug-ins as needed for the programming languages you use, being as lazy as possible about deferring the plug-in installations.

What I found in my own work was that I picked Visual Studio Code for almost any session that would involve debugging or refactoring or that would take longer than about 10 minutes. And I picked Sublime Text for what I expected would be quick edits. Your mileage may vary, of course, and your preferences may change over time.

--------------------------------------

NEXT: First this he does in the new project is the Eslint setup

Eslint setup:

https://thesoreon.com/blog/how-to-set-up-eslint-with-typescript-in-vs-code

Rem uses this:

yarn add --dev eslint prettier eslint-config-airbnb@^15.01 eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y@^5.1.1

NOTE: He does this in the specific directory of the project (bookwork-react).

I removed the two specific versions for now (his video is a couple years old), and ran:

C:\mydocs\React\test\blueprint1>yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-import

The VSCode Eslint setup page above suggests this:

npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard

NOTE: This is done in the top-level code directory: "This is the directory in which I want to configure ESLint. Any subdirectories within this one will also use the configuration we are about to set up. This works because, when you run ESLint, it looks in the current directory for a configuration; If it can’t find one, it moves up to the parent directory, checks there, and the process repeats until a configuration is found."

So I added: yarn add --dev eslint-config-standard eslint-plugin-node eslint-plugin-promise eslint-plugin-standard

Rem makes an .eslintrc file, but the webpage mentions:

Now create .eslintrc.js with the following contents:

module.exports = {
  "extends": "standard"
};

I will try Rem's way first and see if that works:

{
  "extends": ["standard", "prettier"],
  "plugins": ["prettier"]
}

Seemed to work ok!

Now, "If you open up any .js file in any sub-directory of C:\users\travis\code (or wherever you installed the configuration), ESLint will check your code against the Standard JavaScript Style and warn you of any conflicts."

Also adds "lint": "eslint src" to package.json (scripts section).

Then you can `yarn run lint`

Works! (Lots of "errors", especially things defined but never used... leave for now because this is purely a testing/prototype app.)

--------------------------

Well, it's not entirely working. It doesn't recognize the jsx stuff.

Boy, now it's preventing the thing from compiling altogether!

    "lint": "eslint src"
  
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },


--------------------------

Next: Add prop-types to allow us to define types for properties (without using Typescript).

`yarn add prop-types`

--------------------------
(tutorial step 2)
https://youtu.be/RCPMuJ0zYak?list=PLuNEz8XtB51KthRFiVtI8cmXNL9qlQJ5U

Review Redux setup.

In Redux tab in bottom of Chrome, we can see the state, with an empty user object:

	user(pin): { }

"So now we have Redux, and that means we can have actions and dispatch them.
...
So in the submit function, we want to to this data and dispatch a thunk action
with this data.
...
In the props, we'll have the login thunk action (props.login(data)), and it will
return a promise. And if everything's ok then we want to redirect to the homepage.
...
To redirect, we have .then(), and to redirect we'l use the history, which is passed
to this component by react router, because it is a page component (that is, because
it is defined as a route component (LoginPage)) in App.js."

So putting that together, we end up with:

	`this.props.login(data).then( () => this.props.history.push("/") );`

"So history is provided by router, and login will be provided once we connect this
component to Redux."

NOTE: He uses a lot of snippets to save typing. E.g., "ipt" becomes: import PropTypes from 'prop-types';

So next, add the history and login PropTypes to the LoginPage.

"So now we need to connect this component [login page] with Redux. And for that we use
connect function from react-redux. And at the bottom we connect our login page [with
the export declaration]". Like this:

	`export default connect()(LoginPage);`

The first parameter of connect is something to do with props, that allows us to pass
some data from state. But we don't need that here. The second is for dispatch.

"So we just provide functions that we want to wrap in our dispatch call. So we'll have login here...
but not to call directly, but to dipatch...":

	`export default connect(null, { login })(LoginPage);`

"So we're going to store all our actions in one folder, and all our reducers in another folder."

So make actions/auth.js file.

"So here we define our thunk action... which is just a function that returns another
function... we'll define a login function that equals a function that takes credentials
and it returns another function and inside of it we'll make our API request [async request to server]
and all our requests we'll store in one API object... the request to our API is very simple."

"So here we're going to have some kind of API object, user login, that we're going to create,
we pass credentials in. It will return promise [i.e., then() (?) - need to read up on JS "promise"]
..."

I'm a little mystified at this auth.js, but this is what it looks like:

	export const login = (credentials) => () =>
		api.user.login(credentials).then(res => res.data.user);

"This is the template we're going to use throughout the application, throughout almost all
API requests. So we'll have API request [api.user.login(credentials)] that returns promise,
and then we get the data from this request and then we pass it along to the next action
[then(res => res.data.user)].

"[But] I prefer to do it this way. To dispatch a regular pure redux action:

	export const login = (credentials) => (dispatch) =>
		api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

"So this is the most thing that we're going to do with thunk actions. This is what most of
my thunk actions look like. I make API rquest, then I get data, then I dispatch a redux action
that you change by reducers the redux store."

"I use past tense for redux actions, so 'userLoggedIn'. Another way is 'userLoginSuccess',
but that implies a failure state as well, but we're handling that all in the componenet."

Now the API will use axios to do the API call.

`yarn add axios`

axios: "Promise based HTTP client for the browser and node.js"
https://www.npmjs.com/package/axios

Make XMLHttpRequests from the browser
Make http requests from node.js
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Automatic transforms for JSON data
Client side support for protecting against XSRF

"Axios is an excellent library. You can use [...?] or any other kind of library that makes
your life easier, but axios is perfect, give it a try."

...

Now we need to make the real user "reducer" (we made a dummy one earlier), to place the
user in the state.

https://css-tricks.com/understanding-how-reducers-are-used-in-redux/ :

A reducer is a function that determines changes to an application’s state. It uses the action it receives to determine this change. We have tools, like Redux (a state manager), that help manage an application’s state changes in a single store so that they behave consistently.

Redux relies heavily on reducer functions that take the previous state and an action in order to execute the next state.

If the application’s state is managed by Redux, the changes happen inside a reducer function — this is the only place where state changes happen.

Also see: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

-----------------------------

OK! It's working (video #2, 19:21). We can see the request to auth returning 404 in the Network tab.

Can even see the "paylod": credentials: {email: "richard.steadman@gmail.com", password: "safsdaff"}

------------------------------------

"So now we need to build our node backend server application, and we'll use the
express framework to do that."

Make a new folder, bookwork-api and in there do yarn-init. (accept all the defaults)

Make an index.js in src, and make a node server using express.

Add scripts -> start to package.json, and make it run "node src/index.js". But node only knows
old javascrips (not ES6/ES7), so it causes an error on yarn start:

`yarn start`...
SyntaxError: Cannot use import statement outside a module

So we need to use babel to compile the JS to old-style JS.

`yarn add --dev babel-cli`

Also need babel-preset-env ("allow us to use any ES6/ES7 in our code...")

`yarn add --dev babel-preset-env`

Now we need a balelrc file.

	"presets": ["env"]

And now in package.json, use "babel-node" instead of 'node'

Now, it's working, cause we get a new error, which shows it's reading the file:

	Error: Cannot find module 'express'

So, of course, `yarn add express`

Yay!

	C:\mydocs\React\test\bookworm-api>yarn start
	yarn run v1.22.5
	$ babel-node src/index.js
	Running on localhost:8080

Now, goto http://localhost:8080 ...

	Error: ENOENT: no such file or directory, stat 'C:\mydocs\React\test\bookworm-api\src\index.html'

good!

Need to create index.html in source.

WOW! Just type "ht", and select HTML 5 for a snippet.

Now, if we make any changes, we need to restart the server manually, but that's a pain,
so `yarn add --dev nodemon` which will restart the server every time we change files.

Now in package.json, we use nodemon -exec babel-node

Now:

$ nodemon --exec babel-node -- src/index.js
[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node src/index.js`
Running on localhost:8080

cool

Now we need to add a route in the server for the API call.

Now it's still 404, cause it's on a different port. But we can add a proxy in package.json
(I'm not sure how that works...)

  "proxy": "http://localhost:8080"

But it does! We can see the error.

Next is to display the error to the user.

We can catch the error almost anywhere, but it's convenient to catch it in the login form.

So, try in onSubmit.

	this.props.submit(this.state.data)
			.catch(err =>
				this.setState({ errors: err.response.data.errors, loading: false })
			);

So now when something goes wrong, errors from the server will be written to the state.

Now, I got an error when doing this, and needed a try/catch block instead. (WHY?)

	try {
		this.props.submit(this.state.data);
	}
	catch (err) {
		this.setState({ errors: err.response.data.errors, loading: false });
	}

	//this.props.submit(this.state.data)
	//	.catch(err =>
	//		this.setState({ errors: err.response.data.errors, loading: false })
	//	);

But now we don't seem to be catching the error at all...

OMG. This in LoginPage was the difference:

	submit = (data) =>
		//console.log(data);
		// This calls login in auth.js/
		this.props.login(data).then(() => this.props.history.push("/"));

I had braces around the thing to allow the extra console.log. (Why doesn't that work?)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Likewise, if the body requires additional lines of processing, you'll need to re-introduce brackets PLUS the "return".

Hah! So this works:

	submit = (data) => {
		//console.log(data);
		// This calls login in auth.js/
		return this.props.login(data).then(() => this.props.history.push("/"));
	}

Good! (Or as Rem would say, "Nice!")

TODO: Make a nicer message box (like Rem uses with Semantic UI)

------------------------

So now we add loading state (for a spinner).

SemanticUI has this build right into its form, but BlueprintJS doesn't seem to have the
same thing. So I made one with <Spinner/> and an if/else.

Some form examples (to check other blueprint forms):
https://stackblitz.com/edit/blueprint-ui-sample

------------------------

Last part is manuall adding the the server app to git. Skip for now (?)
Or maybe see how it's done manually...

Yes:

- Make .gitignote
- In Command Panel, git initialize; select bookworm-api.




