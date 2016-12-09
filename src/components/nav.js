// Navigation component

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Navigation extends Component {
	static contextTypes = {
		router: React.PropTypes.object
	}

	handleOnClick(auth) {
		this.props.authenticate(auth);
		this.context.router.push('/map');

		if (auth == false) {
			this.props.resetInformation(actions.RESET_ESTABLISHMENT);
			this.props.resetInformation(actions.RESET_ADVERT);
		}
	}

	renderAuthButton() {
		if (this.props.authenticated) {
			return <button onClick={() => this.handleOnClick(false)}>Sign Out</button>
		}
		return <button onClick={() => this.handleOnClick(true)}>Sign in</button>
	}

	render() {
		return (
			<div style={{ height: '10vh', width: '100vw' }}>
				<div style={{ float: 'left' }}>
					Skylar Logo Here
				</div>
				<div style={{ float: 'right' }}>
					{this.renderAuthButton()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Navigation);