// This is the advert page

import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Advert extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.advertInfo.geometry) {
			return (
				<ReactCSSTransitionGroup transitionName="fade">
					<Well key={this.props.advertInfo.place_id + "advert"}></Well>
				</ReactCSSTransitionGroup>
			);
		}

		return (
			<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
				<Well key={this.props.advertInfo.place_id + "advert"} style={{ padding: '0px 10px', textAlign: 'center', height: '90vh', width: '40vw', position: 'absolute', right: '0px' }}>
					<div>
						<h3>{this.props.advertInfo.formatted_address}</h3>
						<span>Insert Function data here</span>
					</div>
					<div>
						Name: {this.props.advertInfo.name}
					</div>
					<Well style={{ height: '20vh', textAlign: 'center', backgroundColor: 'green' }}>
						THIS IS ADVERT PAGE
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