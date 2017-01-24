import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';

class SignIn extends Component {
	static contextTypes = {
		router: React.PropTypes.object
	}

	constructor(props) {
		super(props);
	}

	signInAccount() {
		// when signing in account, we want to chek if all form elements are valid and match a user in the database.
		this.props.authenticate(true);
		this.context.router.push('/map');
	}

	render() {
		const { fields: { title, categories, content } } = this.props;

		return (
			<div>
				<form>
					<div className={`form-group`}>
						<label>Email/Username:</label>
						<input type='text' className='form-control' {...categories} />
						<div className="text-help">
							{''}
						</div>
					</div>

					<div className={`form-group`}>
						<label>Password:</label>
						<input className='form-control' {...content} />
						<div className="text-help">
							{''}
						</div>
					</div>

					<Button type="submit" bsStyle="success" onClick={() => this.signInAccount()}>Sign In</Button>
					<Button bsStyle="danger">Cancel</Button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Please enter a title';
	}

	if (!values.categories) {
		errors.categories = 'Please enter some categories';
	}

	if (!values.content) {
		errors.content = 'Please enter some content';
	}

	return errors;
}

SignIn = reduxForm({
	form: 'SignInForm',
	fields: ['title', 'categories', 'content'],
	validate
})(SignIn);

SignIn = connect(null, actions)(SignIn);

export default SignIn;