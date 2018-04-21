import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, browserHistory, Route, Link, Switch } from "react-router-dom";
import './public/css/main.css';

// Redux Imports
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

// reducers
import rootReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const history = createHistory();
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStore(persistedReducer,
                          undefined,
                          compose(applyMiddleware(reduxThunk, routerMiddleware(history)),
                          window.devToolsExtension ? window.devToolsExtension() : f => f
                        ));

let persistor = persistStore(store);

window.store = store;

// Overview Holding App Module
import App from './components/app';
  // Home Page
    import Home from './components/home/home';
  // Post Preview Page
    import Post from './components/post/post';
  // Author Profile Page
    import Author from './components/author/author';
  // New Post Page
    import NewPost from './components/newpost/newpost';


const BasicExample = () => (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App>
            <Route path="/" exact component={Home} />
                <Route path="/post/:id" component={Post} />
                <Route path="/author/:id" component={Author} />
                <Route path="/newpost" component={NewPost} />
          </App>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
);

ReactDOM.render(
    <BasicExample />,
  document.querySelector('.app')
);
