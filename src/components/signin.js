import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class SignIn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="static-modal">
				<Modal show={this.props.showModal} onHide={this.props.closeModal}>
					<Modal.Header>
						<Modal.Title>Sign In</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						put sign in form here.
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="success" onClick={this.props.signInAccount}>Sign In</Button>
						<Button bsStyle="danger" onClick={this.props.closeModal}>Cancel</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}