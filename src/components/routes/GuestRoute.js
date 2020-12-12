import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
	<Route {...rest} render={props => !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />} />
)

GuestRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.token
	};
}
export default connect(mapStateToProps)(GuestRoute)
