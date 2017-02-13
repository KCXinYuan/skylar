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

class SignUp extends Component {
	static contextTypes = {
		router: React.PropTypes.object
	}

	constructor(props) {
		super(props);
	}

	createAccount() {
		// check if the email or username already exists
		// if it does exist then render an error
		// else run code below and add the username/email/password to our database
		this.props.authenticate(true);
		this.context.router.push('/map');
	}

	cancelSignUp() {
		this.context.router.push('/');
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="signForm">
				<h1 style={{ textAlign: 'center' }}>Sign Up for a Skylar Account!</h1>
				<form onSubmit={handleSubmit(this.createAccount.bind(this))}>
					<Field label="Username" name="username" component={renderInput} type="text" />
					<Field label="Email" name="email" component={renderInput} type="text" />
					<Field label="Password" name="password" component={renderInput} type="password" />
					<Field label="Retype Password" name="retypepassword" component={renderInput} type="password" />

					<Button type="submit" bsStyle="success">Sign Up</Button>
					<Button bsStyle="danger" onClick={this.cancelSignUp.bind(this)}>Cancel</Button>
				</form>
				<div>
					{/* render an error here if when submitted and username/email already exists */}
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

	if (!values.retypepassword) {
		errors.retypepassword = 'Please retype the password';
	} else if (values.retypepassword && values.password != values.retypepassword) {
		errors.retypepassword = 'Please make sure both passwords match';
	}

	return errors;
}

SignUp = reduxForm({
	form: 'SignUpForm',
	validate
})(SignUp);

SignUp = connect(null, actions)(SignUp);

export default SignUp;