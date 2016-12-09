// Google Map container. This is the component for the Google Map.
// It renders the map using google api.
// This is a container since it connects with redux.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

const temp_data = [
	{	
		name: "Kane Hall",
		place_id: "ChIJP3B-KY0UkFQRdHR8XnuD-0Y",
		position: { lat: 47.65663019999999, lng: -122.3091536 }
	},
	{
		name: "Odegaard Undergraduate Library",
		place_id: "ChIJ9_-_KfMUkFQRky8vzyJ0_m4",
		position: { lat: 47.65646199999999, lng: -122.31034599999998 }
	},
	{
		name: "Suzzallo and Allen Libraries",
		place_id: "ChIJVVVVRewUkFQRceNi_l_ha2w",
		position: { lat: 47.6557702, lng: -122.30784269999998 }
	}
];

class Map extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate() {
		return false;
	}

	componentDidMount() {
		const map = new google.maps.Map(this.refs.map, {
			center: { lat: 47.656, lng: -122.3095 },
			zoom: 18,
			disableDoubleClickZoom: true,
			styles: [
				{
					featureType: "poi",
					elementType: "labels",
					stylers: [
						{
							visibility: "off"
						}
					],
				}
			]
		});

		this.addMarker(map);

		// map.addListener('click', ((event) => {
		// 	if (event.placeId) {
		// 		const service = new google.maps.places.PlacesService(map);

		// 		if (this.refs.map.style.width != '60vw') {
		// 			this.refs.map.style.width = '60vw';
		// 		}

		// 		map.panTo({ lat: event.latLng.lat() - .0001, lng: event.latLng.lng() + .0017 })

		// 		service.getDetails({ placeId: event.placeId }, (place, status) => {
		// 			if (status === google.maps.places.PlacesServiceStatus.OK) {
		// 				this.props.fetchInformation(place, actions.FETCH_ESTABLISHMENT);
		// 			}
		// 		});
		// 	}
		// }).bind(this));
	}

	addMarker(map) {
		var singleClick = false;

		temp_data.map((establishment) => {
			const marker = new google.maps.Marker({
				position: establishment.position,
				label: establishment.name,
				map: map
			});

			google.maps.event.addListener(marker, 'click', () => {
				singleClick = true;
				this.props.resetInformation(actions.RESET_ESTABLISHMENT);

				setTimeout(() => {
					if (singleClick == true) {
						const service = new google.maps.places.PlacesService(map);

						if (this.refs.map.style.width != '60vw') {
							this.refs.map.style.width = '60vw';
						}

						//map.panTo({ lat: marker.internalPosition.lat() - .0001, lng: marker.internalPosition.lng() + .0017 })

						service.getDetails({ placeId: establishment.place_id }, (place, status) => {
							if (status === google.maps.places.PlacesServiceStatus.OK) {
								this.props.fetchInformation(place, actions.FETCH_ADVERT);
							}
						});
					}	
				}, 200);
			});

			google.maps.event.addListener(marker, 'dblclick', () => {
				singleClick = false;
				this.props.resetInformation(actions.RESET_ADVERT);

				setTimeout(() => {
					if (singleClick == false) {
						const service = new google.maps.places.PlacesService(map);

						if (this.refs.map.style.width != '60vw') {
							this.refs.map.style.width = '60vw';
						}

						//map.panTo({ lat: marker.internalPosition.lat() - .0001, lng: marker.internalPosition.lng() + .0017 })

						service.getDetails({ placeId: establishment.place_id }, (place, status) => {
							if (status === google.maps.places.PlacesServiceStatus.OK) {
								this.props.fetchInformation(place, actions.FETCH_ESTABLISHMENT);
							}
						});
					}
				}, 200);
			});
		});
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
	return bindActionCreators(actions, dispatch);
}

// This connects the Map class to redux.
export default connect(null, mapDispatchToProps)(Map);