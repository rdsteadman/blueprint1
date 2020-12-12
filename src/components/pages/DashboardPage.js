import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

const DashboardPage = ({ isConfirmed }) => (
	<div>
		{!isConfirmed && <ConfirmEmailMessage />}
	</div>
)


DashboardPage.propTypes = {
	isConfirmed: PropTypes.bool.isRequired,
	//logout: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
	return {
		//isAuthenticated: !!state.user.token
		isConfirmed: !!state.user.confirmed
	};
}

export default connect(mapStateToProps)(DashboardPage);



