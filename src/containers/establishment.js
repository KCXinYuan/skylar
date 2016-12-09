// This is the information on the right hand side
// This component is the all the information on
// each establishment, it depends on which establishment
// the user clicks on (it currently shows a placeId, since we have no data to show yet)
// This is also a container since it connects with redux

import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Establishment extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.establishmentInfo.geometry) {
			return (
				<ReactCSSTransitionGroup transitionName="fade">
					<Well key={this.props.establishmentInfo.place_id + "establishment"}></Well>
				</ReactCSSTransitionGroup>
			);
		}

		return (
			<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
				<Well key={this.props.establishmentInfo.place_id + "establishment"} style={{ padding: '0px 10px', textAlign: 'center', height: '90vh', width: '40vw', position: 'absolute', right: '0px' }}>
					<div>
						<h3>{this.props.establishmentInfo.name}</h3>
						<span>Insert Function data here</span>
					</div>
					<div>
						Number: {this.props.establishmentInfo.formatted_phone_number}
					</div>
					<Well style={{ height: '20vh', textAlign: 'center', backgroundColor: 'black' }}>
						USER LOG
					</Well>
					<Well style={{ height: '40vh', textAlign: 'center', backgroundColor: 'red', overflowY: 'auto' }}>
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
						DYNAMIC FORMDYNAMIC FORMDYNAMIC FORMDYNAMIC FORM
					</Well>
					<Well style={{ height: '15vh', textAlign: 'center', backgroundColor: 'blue' }}>
						STATIC FORM
					</Well>
				</Well>
			</ReactCSSTransitionGroup>
		);
	}
}

// This maps the redux state to props
function mapStateToProps({ establishmentInfo }) {
	return { establishmentInfo };
}

// This connects the Establishment class to redux so it can
// use redux state
export default connect(mapStateToProps)(Establishment);