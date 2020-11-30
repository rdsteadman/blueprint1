import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginPage from './LoginPage'

export default class HomePage extends Component {
	render() {
		return (
			<div>
				[Homepage placeholder]<br/><br/>
				<Link to="/login">Login</Link>
			</div>
		)
	}
}
