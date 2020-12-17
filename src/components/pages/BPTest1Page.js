import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BPTest1Page extends Component {
	render() {
		return (
			<div className="pageMargins">
				<h1>BlueprintJS test page</h1>

				<div className="paraSpacing" >
					Homepage: <Link to="/">Home</Link></div>
			</div>
		)
	}
}
