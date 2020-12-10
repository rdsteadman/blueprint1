import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import MainMenu from './MainMenu';
import {
	Alignment,
	Button,
	Classes,
	H5,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	Popover,
	Position,
	Switch,
} from "@blueprintjs/core";
import labelbridgeLogo from '../assets/labelbridge_logo_sm2.png';
import { Colors } from "@blueprintjs/core";

export default class Header extends Component {

	// See https://github.com/palantir/blueprint/blob/develop/packages/docs-app/src/examples/core-examples/buttonGroupPopoverExample.tsx

	constructor(props) {
		super(props);
		this.toggleTheme = this.toggleTheme.bind(this);
		this.state = {
			vertical: false,
			lightTheme: true
		};
	}

	toggleTheme() {
		this.setState({ lightTheme: !this.state.lightTheme });
		//document.getElementById("headerDiv").className = isLightTheme ? "bp3-light" : "bp3.dark";
	}

	render() {
		return (
			<div className={this.state.lightTheme ? "bp3-light" : "bp3-dark"} id="headerDiv">
				<Navbar fixedToTop >
					<NavbarGroup align="left">
						<NavbarHeading><Link to="/"><span style={{ fontSize: "17px", verticalAlign: "20%" }} >Labelbridge</span> <img src={labelbridgeLogo} alt="logo" style={{ marginTop: "2px" }} /></Link></NavbarHeading>
						<input className="bp3-input" placeholder="Search ..." type="text" />
					</NavbarGroup>
					<NavbarGroup align="right">
						<NavbarHeading><span>Role: </span>&nbsp;<span style={{ color: this.state.lightTheme ? Colors.TURQUOISE2 : Colors.TURQUOISE5 }}>Admin</span></NavbarHeading>
						<span className="bp3-navbar-divider"></span>
						{this.renderUserButton("admin", "user")}
						<Button className={Classes.MINIMAL} icon="help" text="Help" />
						{this.renderMenuButton("", "menu")}
					</NavbarGroup>
				</Navbar>
			</div>
		)
	}

	renderUserButton(text, iconName) {
		const { vertical } = this.state;
		const rightIconName = vertical ? "caret-right" : "caret-down";
		const position = vertical ? Position.RIGHT_TOP : Position.BOTTOM_LEFT;
		return (
			<Popover content={<UserMenu />} position={position} minimal>
				<Button rightIcon={rightIconName} icon={iconName} text={text} />
			</Popover>
		);
	}

	renderMenuButton(text, iconName) {
		const { vertical } = this.state;
		//const rightIconName = vertical ? "caret-right" : "caret-down";
		const position = vertical ? Position.RIGHT_TOP : Position.BOTTOM_LEFT;
		return (
			<Popover content={<MainMenu lightTheme={this.state.lightTheme} toggleTheme={this.toggleTheme} />} position={position} minimal>
				<Button icon={iconName} text={text} />
			</Popover>
		);
	}

}

// <Button className={Classes.MINIMAL} icon="menu" />
//<Button className={Classes.MINIMAL} icon="user" text="admin" />


//<button class="bp3-button bp3-minimal bp3-icon-cog"></button>
// <nav className="bp3-navbar">... </nav>
//<div className="bp3-navbar-heading">Labelbridge <img src={labelbridgeLogo} alt="logo" style={{ marginTop: "2px" }} /></div>
//<Link className="bp3-button bp3-minimal bp3-icon-music" to="/songs">Go</Link>
//<button className="bp3-button bp3-minimal bp3-icon-user" icon="user"></button>
//<button className="bp3-button bp3-minimal bp3-icon-cog" icon="document"></button>

// old
// 		  	<header>
// 				<h1>Labelbridge</h1>
// 			</header>
