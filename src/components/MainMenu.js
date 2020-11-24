import React, { Component } from "react";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

export default class MainMenu extends Component {

	constructor(props) {
		super(props);
		this.toggleTheme = this.toggleTheme.bind(this);
		this.state = { lightTheme: false };
	}

	render() {
		return (
			<Menu>
				<MenuItem text="Home" icon="home" />

				<MenuItem text={this.state.lightTheme ? "Light theme" : "Dark theme"} icon="" onClick={this.toggleTheme} />
				<MenuDivider />
				<MenuItem text="System Administration" icon="cog" />
				<MenuItem text="Manage Users" icon="user" />
				<MenuItem text="Update Code Lists" icon="numbered-list" />
				<MenuDivider />
				<MenuItem text="About Labelbridge..." icon="help" />
			</Menu>
		);
	}

	toggleTheme() {
		this.setState({ lightTheme: (!this.state.lightTheme) });
		console.log("lightTheme: " + this.state.lightTheme);
		document.getElementById("headerDiv").className = this.state.lightTheme ? "bp3-light" : "bp3.dark";
	}
}

// <MenuItem text="Help" icon="help" />