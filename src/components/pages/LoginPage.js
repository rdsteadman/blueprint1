import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';


class LoginPage extends Component {

	submit = (data) => {
		//console.log(data);
		// This calls login in auth.js/
		return this.props.login(data).then(() => this.props.history.push("/"));
	}

	render() {
		return (
			<div className="loginPage">
				<h1>Login page</h1>
				<LoginForm submit={this.submit} />
			</div>
		);
		// <Link to="/forgot_password">Forgot Password?</Link>
	}
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		// We don't need to define the whole history object with all its properties, just what we will use.
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);