import React, { Component } from 'react'
import Header from '../Header'
import NavTree from '../NavTree'
import Body from '../Body'

export default class HomePage extends Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
				<div className="body chord-editor" style={{ marginTop: "10px", paddingTop: "10px" }} >
					<NavTree />
					<Body />
				</div>
				{/* <Footer /> */}
			</div>
		)
	}
}
