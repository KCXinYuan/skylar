// Google Map container. This is the component for the Google Map.
// It renders the map using google api.
// This is a container since it connects with redux.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchInformation } from '../actions/index';

class Map extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate() {
		return false;
	}

	componentDidMount() {
		const map = new google.maps.Map(this.refs.map, {
			center: { lat: this.props.lat, lng: this.props.lng },
			zoom: 18
		});

		map.addListener('click', ((event) => {
			if (event.placeId) {
				const service = new google.maps.places.PlacesService(map);

				service.getDetails({ placeId: event.placeId }, (place, status) => {
					if (status === google.maps.places.PlacesServiceStatus.OK) {
						this.props.fetchInformation(place);
					}
				});
			}
		}).bind(this));
	}

	render() {
		return (
			<div id="map" ref="map" />
		);
	}
}

// maps the fetchInformation action into props so that
// the Map class can use it (at this.props.fetchInformation)
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchInformation }, dispatch);
}

// This connects the Map class to redux.
export default connect(null, mapDispatchToProps)(Map);