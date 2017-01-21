// Navigation component

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Navigation extends Component {
	static contextTypes = {
		router: React.PropTypes.object
	}

	constructor(props) {
		super(props);

		this.state = { showModal: false, signUp: false };
		this.closeModal = this.closeModal.bind(this);
		this.createAccount = this.createAccount.bind(this);
		this.signInAccount = this.signInAccount.bind(this);
	}

	closeModal() {
		this.setState({ showModal: false });
	}

	openModal() {
		this.setState({ showModal: true });
	}

	handleButtonClick(signUp) {
		this.setState({ signUp });
		this.openModal();
	}

	createAccount() {
		// when creating account, we want to check if all form elements are valid.
		this.setState({ showModal: false });
		this.props.authenticate(true);
		this.context.router.push('/map');
	}

	signInAccount() {
		// when signing in account, we want to chek if all form elements are valid and match a user in the database.
		this.setState({ showModal: false });
		this.props.authenticate(true);
		this.context.router.push('/map');
	}

	handleLogoff() {
		this.props.authenticate(false);
		this.props.resetInformation(actions.RESET_ESTABLISHMENT);
		this.props.resetInformation(actions.RESET_ADVERT);
		this.context.router.push('/map');
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

	renderLoginModal() {
		if (this.state.signUp) {
			return (
				<div className="static-modal">
					<Modal show={this.state.showModal} onHide={this.closeModal}>
						<Modal.Header>
							<Modal.Title>Sign Up</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							put sign up form here.
						</Modal.Body>
						<Modal.Footer>
							<Button bsStyle="success" onClick={this.createAccount}>Sign Up</Button>
							<Button bsStyle="danger" onClick={this.closeModal}>Cancel</Button>
						</Modal.Footer>
					</Modal>
				</div>
			);
		} else {
			return (
				<div className="static-modal">
					<Modal show={this.state.showModal} onHide={this.closeModal}>
						<Modal.Header>
							<Modal.Title>Sign In</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							put sign in form here.
						</Modal.Body>
						<Modal.Footer>
							<Button bsStyle="success" onClick={this.signInAccount}>Sign In</Button>
							<Button bsStyle="danger" onClick={this.closeModal}>Cancel</Button>
						</Modal.Footer>
					</Modal>
				</div>
			);
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
				{this.renderLoginModal()}
			</Navbar>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Navigation);