// This is the information on the right hand side
// This component is the all the information on
// each establishment, it depends on which establishment
// the user clicks on (it currently shows a placeId, since we have no data to show yet)
// This is also a container since it connects with redux

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Information extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.info) {
			return <div style={{ height: '100vh', width: '20vw', float: 'right' }}>Loading...</div>
		}

		return (
			<div style={{ height: '100vh', width: '20vw', float: 'right' }}>{this.props.info}</div>
		);
	}
}

// This maps the redux state to props
function mapStateToProps({ info }) {
	return { info };
}

// This connects the Information class to redux so it can
// use redux state
export default connect(mapStateToProps)(Information);