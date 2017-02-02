import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';

const renderInput = (field) => {
	return (
		<div className={`form-group ${field.meta.touched && field.meta.invalid ? 'danger' : ''}`}>
			<label>{field.label}:</label>
			<input type={field.type} className='form-control' {...field.input} />
			<div className="text-danger">
				{field.meta.touched ? field.meta.error : ''}
			</div>
		</div>
	);
}

class SignIn extends Component {
	static contextTypes = {
		router: React.PropTypes.object
	}

	constructor(props) {
		super(props);
	}

	signInAccount() {
		// find the username with email and password to check if it exists.
		// if it does not exist render an error.
		// if it does not match render an error.
		// else run code below
		this.props.authenticate(true);
		this.context.router.push('/map');
	}

	cancelSignIn() {
		this.context.router.push('/');
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(this.signInAccount.bind(this))}>
					<Field label="Username" name="username" component={renderInput} type="text" />
					<Field label="Email" name="email" component={renderInput} type="text" />
					<Field label="Password" name="password" component={renderInput} type="password" />

					<Button type="submit" bsStyle="success">Sign In</Button>
					<Button bsStyle="danger" onClick={this.cancelSignIn.bind(this)}>Cancel</Button>
				</form>
				<div>
					{/* render an error here if when submitted and username/password does not exist or when username/password don't match */}
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.username) {
		errors.username = 'Please enter a username';
	} else if (values.username.length > 15) { // limits the length of username to 15
		errors.username = 'Username must be 15 characters of less';
	}

	if (!values.email) {
		errors.email = 'Please enter an email address';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Please enter a valid email address';
	}

	if (!values.password) {
		errors.password = 'Please enter a password';
	} else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/i.test(values.password)) {
		errors.password = 'Make sure is between 6 - 20 characters with at least one numerical digit, one uppercase, and one lowercase letter';
	}

	return errors;
}

SignIn = reduxForm({
	form: 'SignInForm',
	validate
})(SignIn);

SignIn = connect(null, actions)(SignIn);

export default SignIn;