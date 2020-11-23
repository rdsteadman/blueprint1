import React, { Component } from 'react'

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = { year: new Date().getFullYear() };
	  }
	
	  render() {
		return (
		  <footer>
			<ul className="site-links">
			  <li>
				&copy; {this.state.year} Newbook Production Inc.
			  </li>
			</ul>
		  </footer>
		);
	  }
	  
}
