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
	}

	handleButtonClick(signUp) {
		signUp ? this.context.router.push('/signup') : this.context.router.push('/signin')
	}

	handleLogoff() {
		this.props.authenticate(false);
		this.props.resetInformation(actions.RESET_ESTABLISHMENT);
		this.props.resetInformation(actions.RESET_ADVERT);
	}

	render() {
		return (
			<div>
				<Navbar collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">Skylar Logo Here</Link>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem>
							{this.props.authenticated ? <Link className="navLink" to="/map">Map</Link> : null}
						</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem>
							{this.props.authenticated ? <Link className="navLink" onClick={() => this.handleLogoff()}>Sign Out</Link> : <Link className="navLink" onClick={() => this.handleButtonClick(false)}>Sign In</Link>}
							{!this.props.authenticated ? <Link className="navLink" onClick={() => this.handleButtonClick(true)}>Sign Up</Link> : null}
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Navigation);