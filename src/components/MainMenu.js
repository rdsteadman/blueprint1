import React, { Component } from "react";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

export default class MainMenu extends Component {

	constructor(props) {
		super(props);
		//this.toggleTheme = this.toggleTheme.bind(this);
		const lightTheme = props.lightTheme === false ? false : true; // default to true
		this.state = {
			lightTheme: lightTheme,
			//setLightTheme: props.setLightTheme
			toggleTheme: props.toggleTheme
		};
	}

	render() {
		return (
			<Menu > {/* onClick={() => { }} */}
				<MenuItem text="Home" icon="home" href='/' /> {/* this.props.history.push('/') window.location = '/'*/}

				<MenuItem text={this.state.lightTheme ? "Dark theme" : "Light theme"} icon="" onClick={this.state.toggleTheme} />
				<MenuDivider />
				<MenuItem text="System Administration" icon="cog" />
				<MenuItem text="Manage Users" icon="user" />
				<MenuItem text="Update Code Lists" icon="numbered-list" />
				<MenuDivider />
				<MenuItem text="About Labelbridge..." icon="help" onClick={() => this.props.aboutOpen()} />
			</Menu>
		);
	}

	/*toggleTheme() {
		let newTheme = !this.state.lightTheme;
		//this.setState({ lightTheme: newTheme });
		this.state.setLightTheme(newTheme);
		console.log("lightTheme: " + this.state.lightTheme + "; newTheme: " + newTheme);
		//document.getElementById("headerDiv").className = newTheme ? "bp3-light" : "bp3.dark";
	}*/
}

// <MenuItem text="Help" icon="help" />