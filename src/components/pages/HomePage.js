import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class HomePage extends Component {
	render() {
		return (
			<div className="homePage">
				<h1>Test pages</h1>

				{ /*<p>Not much here yet, but here is a link to the login page:</p> */}
				{ /*<br /><br /> */}
				<ul>
					<li>Login page: <Link to="/login">Login</Link></li>
					<li>Prototype page: <Link to="/prototype">Prototype UI</Link></li>
				</ul>
			</div>
		)
	}
}
