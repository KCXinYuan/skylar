// This is the main component of the application
// It renders all the other components.

import React, { Component } from 'react';
import Navigation from './nav';

export default class App extends Component {
	render() {
		return (
			<div>
				{<Navigation />}
				{this.props.children}
			</div>
		);
	}
}