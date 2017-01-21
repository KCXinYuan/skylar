// This is the advert page

import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChatRoom from './chatroom';

class Advert extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.advertInfo.geometry) {
			return (
				<ReactCSSTransitionGroup transitionName="fade">
					<div></div>
				</ReactCSSTransitionGroup>
			);
		}

		return (
			<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
				<Well key={this.props.advertInfo.place_id + "advert"} className="advert_column">
					<div className="advert_info">
						<h3>{this.props.advertInfo.name}</h3>
						<span>Insert Function data here</span>
					</div>
					<div>
						Number: {this.props.advertInfo.formatted_phone_number}
					</div>
					<Well className="establishment_userlog">
						USER LOG
					</Well>
					<Well className="advert_dynamic">
						<ChatRoom />
					</Well>
					<Well className="advert_static">
						STATIC FORM
					</Well>
				</Well>
			</ReactCSSTransitionGroup>
		);
	}
}

// This maps the redux state to props
function mapStateToProps({ advertInfo }) {
	return { advertInfo };
}

// This connects the Establishment class to redux so it can
// use redux state
export default connect(mapStateToProps)(Advert);