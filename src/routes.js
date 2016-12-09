import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import RequireAuth from './components/require_authentication';
import HomePage from './components/home';
import MapPage from './components/map';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="map" component={RequireAuth(MapPage)} />
	</Route>
);