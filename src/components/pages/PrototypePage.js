import React, { Component } from 'react'
import Header from '../Header'
import NavTree from '../NavTree'
import Body from '../Body'

export default class PrototypePage extends Component {
	render() {
		return (
			<div className="wrapper">
				<Header history={this.props.history} />
				<div className="body chord-editor" style={{ marginTop: "10px", paddingTop: "10px" }} >
					<NavTree history={this.props.history} />
					<Body />
				</div>
				{/* <Footer /> */}
			</div>
		)
	}
}
