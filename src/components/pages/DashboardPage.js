import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { logout } from '../../actions/auth'
import { Button, Intent } from "@blueprintjs/core";
import { Link } from 'react-router-dom'

const DashboardPage = ({ isConfirmed, logout }) => (
	<div className="dashboardPage">
		{!isConfirmed && <ConfirmEmailMessage />}

		<div style={{ marginTop: 10 + 'px' }} >
			Prototype page: <Link to="/prototype">Prototype UI</Link></div>

		<div style={{ marginTop: 10 + 'px' }} >
			<Button type="button" text="Logout" intent={Intent.PRIMARY} onClick={() => logout()} /></div>

	</div>
)


DashboardPage.propTypes = {
	isConfirmed: PropTypes.bool.isRequired,
	//logout: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
	return {
		//isAuthenticated: !!state.user.token
		isConfirmed: !!state.user.confirmed,
	};
}

export default connect(mapStateToProps, { logout })(DashboardPage);



