import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class HomePage extends Component {
	render() {
		return (
			<div className="homePage">
				<h1>Home page</h1>
				<p>Not much here yet, but here is a link to the login page:</p>
				{ /*<br /><br /> */}
				<Link to="/login">Login</Link>
			</div>
		)
	}
}
