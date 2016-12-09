// This is the main file that renders our application
// into the html file and makes it show up on the page

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import routes from './routes';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.getElementById('container')
);
