## RATS
#### React Redux Axios Thunk Skelleton

## About This Repo

This Repo is my bootstap skelleton for my preffered Tech Test Setup. I was tired of redoing it for every tech test. I preffer this style for its simplicity and ease of use. This is a very bare bones skelleton and should only be used as a basic start to a front end app. I used Create React App for the initial setup and then set up the file structure to my liking. Feel free to modify, download, or even send a PR with sujestions. 

The structure was inspired by my good friend Ahmad (https://github.com/cozmoc)
I will most likely create a typescript version here soon. RATTS

### Libraries Used

I aim to keep this repo as vanilla as possible outside of these packages: 

- axios 
- react
- react-dom
- react-redux
- react-router-dom
- redux
- redux-axios-middleware
- redux-thunk 

### File Structure 

```
    /public
    /src
        /actions
            /index.js
        /components
            /App
                /App.js
            /MainView
                /MainView.js
            /NavBar
                /NavBar.js
        /reducers
            /index.js
        /styles
        /types
            /index.js
    /index.js
    /Routes.js
    /serviceWorker.js
    /store.js
    /.gitignore
    /package.json
    /README.md
```

## How it Works

### Index

- src/index.js

The main index.js uses the Profider function by react-redux. The provider loads our redux store from store.js. Then the Router wraps the main app component which we pass the routes into it.

This set up is ideal because it follows the Single Responsibility Principle. The index should only be the anchor point for rendering on the root DOM.

### App

- src/App/App.js

The app in this may look plain, but its important to be so minimal. This is the best place to apply global styling, main wrappers, and containers. The App will return any routed components set up in Routes.js.

You shouldn't directly apply components to the app.js unless its something like a NavBar or universal model. I tend to not apply any components on here because its much more complicated to pass props. This is why I include a main view component that returns hello world. Most tech tests don't require you to build full fledge apps, so I use the MainView as my render page (I tend to favor Single page apps).

#### example
 ```
const SomeGlobalStyleOrWrapper = props => {
    foo ... bar
}

const App = ({ children }) => {
    return (
        <SomeGlobalStyleOrWrapper>
            {children}
        </SomeGlobalStyleOrWrapper>
    )

}

export default App
 ```

### Routes

- src/Routes.js

This is where you add your main rendered components an the paths to reach them. 

#### example
```
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './components/MainView/MainView';
import AddBook from './components/AddBook/AddBook';

export default () => {
    return (
        <Switch>
            <Route
                component={MainView}
                exact
                path={'/'}
            />
            <Route
                component={AddBook}
                exact
                path={'/addBook'}
            />
        </Switch>
    )
}
```

If you have a large app and need many routes you can refactor it. Just make a folder src/routes/index.js and create files that export the route

#### example

src/routes/index.js
```
import list from './list'
import main from './main'
import books from './books'

export default {
    list,
    main,
    books
}
```

src/routes/list.js
```
export default () => {
    return (
        <Route
                component={list}
                exact
                path={'/books/list'}
            />
    )
}
```

src/Routes.js
```
import React from 'react';
import { Switch } from 'react-router-dom';
import { main, books, list } from './routes/index.js'

export default () => {
    return (
        <Switch>
            { main }
            { books }
            { list }
        </Switch>
    )
}
```

## Future Features

I will continually add on to this future plans include
- custom styles
- dynamic form
- dynamic models
- validation
- user login(possibly) 

## CREATE REACT APP STUFF

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
