import React from 'react'
import { Button, H1, InputGroup, TextArea, Intent } from "@blueprintjs/core";

export default class Version extends React.Component {
	render() {
		return (
			<div className="panel2 mainPage">
				<div className="versionPanel">
					<H1 style={{ color: '#394B59' }}>Version Page</H1>

					{/*<p className=".bp3-ui-text">[Version form goes here]</p>*/}
					<div style={{ alignContent: "center", marginTop: "20px" }}>
						<table style={{ width: "80%", alignContent: "center", marginTop: "20px", marginLeft: "auto", marginRight: "auto" }}>
							<colgroup><col width="200px" /><col /></colgroup>
							<tr><td><b>Version Title:</b></td><td><InputGroup value="Version 2 (working)" /></td></tr>
							<tr><td><b>Version Description:</b></td><td><TextArea cols="100" rows="3" value="Working copy based on initial import" /></td></tr>
							<tr><td><b>SPL Document Type:</b></td><td><InputGroup value="Human Prescription Drug Label With Highlights (PLR) (34391-3)" /></td></tr>
							<tr><td><b>Document Version:</b></td><td><InputGroup value="2" /></td></tr>
							<tr><td><b>E-Filing Filename:</b></td><td><InputGroup value="Docetaxel_v2" /></td></tr>
							<tr><td colspan="2"><div style={{ textAlign: "center", marginTop: "10px" }}><Button intent="primary">Save</Button></div></td></tr>
						</table>
					</div>

				</div>

			</div >
		)
	}
}

