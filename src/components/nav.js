// Navigation component

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Navigation extends Component {
	static contextTypes = {
		router: React.PropTypes.object
	}

	constructor(props) {
		super(props);

		this.state = { signUp: false };
	}

	handleButtonClick(signUp) {
		this.setState({ signUp });
		if (signUp) {
			this.context.router.push('/signup');
		} else {
			this.context.router.push('/signin');
		}
	}

	handleLogoff() {
		this.props.authenticate(false);
		this.props.resetInformation(actions.RESET_ESTABLISHMENT);
		this.props.resetInformation(actions.RESET_ADVERT);
		//this.context.router.push('/map');
	}

	renderAuthButton() {
		if (this.props.authenticated) {
			return <Button bsStyle="primary" onClick={() => this.handleLogoff()}>Sign Out</Button>
		}
		return <Button bsStyle="primary" onClick={() => this.handleButtonClick(false)}>Sign in</Button>
	}

	renderSignUpButton() {
		if (!this.props.authenticated) {
			return <Button bsStyle="primary" onClick={() => this.handleButtonClick(true)}>Sign Up</Button>
		}
	}

	render() {
		return (
			<Navbar className="navbar">
				<Link to="/">Skylar Logo Here</Link>
				<div style={{ float: 'right' }}>
					{this.renderSignUpButton()}
					{this.renderAuthButton()}
				</div>
			</Navbar>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Navigation);