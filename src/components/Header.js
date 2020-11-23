import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
	Alignment,
	Button,
	Classes,
	H5,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	Switch,
} from "@blueprintjs/core";
import labelbridgeLogo from '../assets/labelbridge_logo_sm2.png';

export default class Header extends Component {
	render() {
		return (
			<Navbar>
				<NavbarGroup align="left">
					<NavbarHeading>Labelbridge <img src={labelbridgeLogo} alt="logo" style={{ marginTop: "2px" }} /></NavbarHeading>
					<input className="bp3-input" placeholder="Search ..." type="text" />
				</NavbarGroup>
				<NavbarGroup align="left">
					<span className="bp3-navbar-divider"></span>
					<Button className={Classes.MINIMAL} icon="user" text="admin" />
					<Button className={Classes.MINIMAL} icon="help" text="Help" />
				</NavbarGroup>
			</Navbar>

		)
	}
}

// <nav className="bp3-navbar">... </nav>
//<div className="bp3-navbar-heading">Labelbridge <img src={labelbridgeLogo} alt="logo" style={{ marginTop: "2px" }} /></div>
//<Link className="bp3-button bp3-minimal bp3-icon-music" to="/songs">Go</Link>
//<button className="bp3-button bp3-minimal bp3-icon-user" icon="user"></button>
//<button className="bp3-button bp3-minimal bp3-icon-cog" icon="document"></button>

// old
// 		  	<header>
// 				<h1>Labelbridge</h1>
// 			</header>
