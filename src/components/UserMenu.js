import React from "react";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { connect } from 'react-redux';
import { logout } from '../actions/auth'
import PropTypes from 'prop-types';


class UserMenu extends React.Component {

	doLogout() {
		//this.props.logout().then(() => this.props.history.push("/")); //() => console.log("hi")
		this.props.logout();
		this.props.history.push("/login");
	}

	render() {
		return (
			<Menu>
				<MenuItem text="Edit Profile" icon="cog" />
				<MenuItem text="Open" icon="folder-shared" />
				<MenuItem text="Close" icon="add-to-folder" />
				<MenuDivider />
				<MenuItem text="Save" icon="floppy-disk" />
				<MenuItem text="Save as..." icon="floppy-disk" />
				<MenuDivider />
				<MenuItem text="Logout" icon="log-out" onClick={() => this.doLogout()} /> {/* () => this.props.logout() */}
			</Menu>
		);
	}
}

/* render() {
	return (
<Menu className={props.className}>
	<MenuItem text="New" icon="document" {...props} />
	<MenuItem text="Open" icon="folder-shared" {...props} />
	<MenuItem text="Close" icon="add-to-folder" {...props} />
	<MenuDivider />
	<MenuItem text="Save" icon="floppy-disk" {...props} />
	<MenuItem text="Save as..." icon="floppy-disk" {...props} />
	<MenuDivider />
	<MenuItem text="Exit" icon="cross" {...props} />
</Menu>
	);
} */

UserMenu.propTypes = {
	history: PropTypes.shape({
		// We don't need to define the whole history object with all its properties, just what we will use.
		push: PropTypes.func.isRequired
	}).isRequired,
	logout: PropTypes.func.isRequired
}


function mapStateToProps(state) {
	return {
		//isAuthenticated: !!state.user.token
		isConfirmed: !!state.user.confirmed,
	};
}

//export default UserMenu;
export default connect(mapStateToProps, { logout })(UserMenu);

