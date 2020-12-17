import React, { Component } from 'react';
import { H1 } from "@blueprintjs/core";


export default class Main2 extends Component {

	constructor(props) {
		super(props);
		this.state = { something: 'Something', pageType: props.pageType };
	}

	render() {
		return (
			<div className="welcomePanel">
				<H1 style={{ color: '#394B59' }}>Welcome to Labelbridge</H1>

				<p className=".bp3-ui-text">LabelBridge allows you to prepare, manage, and publish regulatory compliant submissions in FDA SPL and Health Canada HPFB Product Monograph in XML format (XML PM) filing specifications.</p>

				<p className=".bp3-ui-text">labelBridge supports XML PM, Drug Listings, GDUFA Self Identification forms, NDC Labeler Code Request forms, and Establishment Registration forms (along with their respective "No Change Requests" and "Out-of-Business" forms).</p>

				<p className=".bp3-ui-text">These simple labelBridge commands help you get quickly started:</p>

				<p className=".bp3-ui-text">To access an existing Document, use the Navigation Tree to the left to select a Documents to be viewed, reviewed or edited. Documents are organized inside Projects and can have multiple Versions.</p>

			</div>
		);
	}

}
