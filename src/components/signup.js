import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';

//onSubmit={handleSubmit(this.onSubmit.bind(this))}

class SignUp extends Component {
	static contextTypes = {
		router: React.PropTypes.object
	}

	constructor(props) {
		super(props);
	}

	createAccount() {
		// when creating account, we want to check if all form elements are valid.
		this.props.authenticate(true);
		this.context.router.push('/map');
	}

	render() {
		const { fields: { title, categories, content } } = this.props;

		return (
			<div>
				<form>
					<div className={`form-group`}>
						<label>Username:</label>
						<input type='text' className='form-control' {...title} />
						<div className="text-help">
							{''}
						</div>
					</div>

					<div className={`form-group`}>
						<label>Email:</label>
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

					<div className={`form-group`}>
						<label>Retype Password:</label>
						<input className='form-control' {...content} />
						<div className="text-help">
							{''}
						</div>
					</div>

					<Button type="submit" bsStyle="success" onClick={() => this.createAccount()}>Sign Up</Button>
					<Button bsStyle="danger">Cancel</Button>
				</form>

				<Button type="submit" bsStyle="success" onClick={() => this.createAccount()}>Sign Up</Button>
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

SignUp = reduxForm({
	form: 'SignUpForm',
	fields: ['title', 'categories', 'content'],
	validate
})(SignUp);

SignUp = connect(null, actions)(SignUp);

export default SignUp;

							// <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
							// 	<label>Title:</label>
							// 	<input type='text' className='form-control' {...title} />
							// 	<div className="text-help">
							// 		{title.touched ? title.error : ''}
							// 	</div>
							// </div>

							// <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
							// 	<label>Categories:</label>
							// 	<input type='text' className='form-control' {...categories} />
							// 	<div className="text-help">
							// 		{categories.touched ? categories.error : ''}
							// 	</div>
							// </div>

							// <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
							// 	<label>Content:</label>
							// 	<textarea className='form-control' {...content} />
							// 	<div className="text-help">
							// 		{content.touched ? content.error : ''}
							// 	</div>
							// </div>