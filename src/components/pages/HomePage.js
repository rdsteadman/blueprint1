import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Intent } from "@blueprintjs/core";
import { logout } from '../../actions/auth'


// The component takes props, but instead of using (props) then props.isAuthenticaed in the function,
// I deconstruct it here
const HomePage = ({ isAuthenticated, logout }) => (
	<div className="homePage">
		<h1>Test pages</h1>

		{ /*<p>Not much here yet, but here is a link to the login page:</p> */}
		{ /*<br /><br /> */}
		<ul>
			{!isAuthenticated && <li>Sign-up page: <Link to="/signup">Sign Up</Link></li>}
			{!isAuthenticated && <li>Login page: <Link to="/login">Login</Link></li>}
			<li>Prototype page: <Link to="/prototype">Prototype UI</Link></li>
			<li>Dashboard page: <Link to="/dashboard">Dashboard</Link></li>
			<li>Version page: <Link to="/version">Version</Link></li>
			<li>Blueprint test page: <Link to="/bptest1">Blueprint test</Link></li>
		</ul>

		{isAuthenticated && <Button type="button" text="Logout" intent={Intent.PRIMARY} onClick={() => logout()} /> /* <button>Logout</button> */}
	</div>
)

//class HomePage extends Component {
//	render() {
//	}
//}

HomePage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
	return {
		//isAuthenticated: !!state.user.email
		isAuthenticated: !!state.user.token

	};
}

export default connect(mapStateToProps, { logout })(HomePage);
