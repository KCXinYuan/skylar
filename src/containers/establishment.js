// This is the information on the right hand side
// This component is the all the information on
// each establishment, it depends on which establishment
// the user clicks on (it currently shows a placeId, since we have no data to show yet)
// This is also a container since it connects with redux

import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChatRoom from './chatroom';

class Establishment extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.establishmentInfo.geometry) {
			return (
				<ReactCSSTransitionGroup transitionName="fade">
					<div></div>
				</ReactCSSTransitionGroup>
			);
		}

		return (
			<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
				<Well key={this.props.establishmentInfo.place_id + "establishment"} className="establishment_column">
					<div className="establishment_header">
						<h3>Establishment</h3>
					</div>
					<hr />
					<div className="establishment_info">
						<h3>{this.props.establishmentInfo.name}, Library</h3>
						Number: {this.props.establishmentInfo.formatted_phone_number}
					</div>
					<hr />
					<Well className="establishment_userlog">
						<span>33 Users</span>
						<span>Click Here for list of Users</span>
					</Well>
					<hr />
					<Well className="establishment_dynamic">
						<input />
						<ChatRoom />
					</Well>
					<hr />
					<Well className="establishment_static">
						Information about the establishment goes here.
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