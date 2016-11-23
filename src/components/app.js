// This is the main component of the application
// It renders all the other components.

import React, { Component } from 'react';

import Map from '../containers/google_map';
import Information from '../containers/information'

export default class App extends Component {
	render() {
		return (
			<div>
				<Map lat={47.656} lon={-122.3095} />
				<Information />
			</div>
		);
	}
}