// Google Map container. This is the component for the Google Map.
// It uses react-google-maps to render the actual map.
// This is a container since it connects with redux.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchInformation } from '../actions/index';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

class Map extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<GoogleMapLoader
				containerElement={ <div style={{ height: '100vh', width: '80vw', position: 'absolute' }} /> }
				googleMapElement={
					<GoogleMap
							onClick={(event) => { if (event.placeId) {this.props.fetchInformation(event.placeId)} }}
							defaultZoom={18}
							defaultCenter={{lat: this.props.lat, lng: this.props.lon}}>
					</GoogleMap>
				} />
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