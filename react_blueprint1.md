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




