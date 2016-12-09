import React, { Component } from 'react';
import Map from '../containers/google_map';
import Establishment from '../containers/establishment';
import Advert from '../containers/advert';

export default class MapPage extends Component {
	render() {
		return (
			<div>
				<Map lat={47.656} lng={-122.3095} />
				<Establishment />
				<Advert />
			</div>
		);
	}
}
