import React, { Component } from 'react'
import SignupForm from "../forms/SignupForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';

class SignupPage extends Component {

	submit = (data) => this.props.signup(data).then(() => this.props.history.push('/dashboard'))

	render() {
		return (
			<div className="signupPage">
				<SignupForm submit={this.submit} />
			</div>
		)
	}
}

SignupPage.propTypes = {
	history: PropTypes.shape({
		// We don't need to define the whole history object with all its properties, just what we will use.
		push: PropTypes.func.isRequired
	}).isRequired,
	signup: PropTypes.func.isRequired
}

// Connect with Redux: Don't need anything from the state (null), but need to have the signup action.
export default connect(null, { signup })(SignupPage);
