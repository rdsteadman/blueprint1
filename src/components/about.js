import React, { Component } from 'react'
import './about.css';

export default class About extends Component {
	render() {
		return (
			<div style={{ width: "800px" }}> {/* maxHeight: "500px", padding: "10px" alignContent: "center",  style={{ width: "80%", alignContent: "center", marginTop: "20px", marginLeft: "auto", marginRight: "auto" }} */}
				<fieldset title="labelBridge License Manager" style={{ backgroundColor: "whitesmoke", margin: "10px" }}>  {/*width: "500px",  */}
					<legend>&nbsp;<b>labelBridge License Manager</b>&nbsp;</legend>

					<table style={{ backgroundColor: "whitesmoke", borderColor: "black", width: "95%" }}>

						<tr>
							<td><b>labelBridge v2.2 (build: 20201209.1510.WF)</b></td>
						</tr>

						<tr>
							<td>
								<br />This software is licensed to: <b>Newbook</b>
								<br />

								<br />Expiry Date: 31/12/2040 (Mon Dec 31 00:00:00 EST 2040) (7320 days remaining)

<br />
								<br />Grace Period: 30 days (extended access after license expires)
<br />&nbsp;</td>
						</tr>


						<tr>
							<td>
								Please contact <a href="mailto:support@newbook.com">support@newbook.com</a> for further assistance.
<br />&nbsp;</td>
						</tr>

						<tr>
							<td>
								{/* Adding collapsible section buttons */}

								<button className="accordion">Modules</button>
								<div className="panel" style={{ maxHeight: "250px", content: "\\2212" }}>

									<div style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "black", width: "95%", padding: "5px" }}>

										<br />





										{/* FDA is always ENABLED by default unless specifically DISABLED in license */}

										<input type="checkbox" id="fda" name="fda" disabled="true" checked="true" />


										<label for="male">FDA Structured Product Labeling (SPL) </label>

										<br />
										<br />



										<input type="checkbox" id="healthcanada" name="healthcanada" disabled="true" checked="true" />

										<label for="male">Health Canada Product Monograph (XML PM)</label>
										<br />
										<br />


										<input type="checkbox" id="sidebysidecompare" name="sidebysidecompare" disabled="true" checked="true" />

										<label for="male">Side by Side Compare</label>
										<br />
										<br />


										<input type="checkbox" id="nlmmonitor" name="nlmmonitor" disabled="true" checked="true" />

										<label for="male">NLM Monitor</label>
										<br />
										<br />


										<input type="checkbox" id="rems" name="rems" disabled="true" checked="true" />

										<label for="male">REMS</label>
										<br />
										<br />


										<input type="checkbox" id="bnc" name="bnc" disabled="true" checked="true" />

										<label for="male">Blanket No Change</label>
										<br />
										<br />

									</div>

								</div>


								<button className="accordion">License XML</button>
								<div className="panel">
									<br />
									<textarea cols="75" rows="10" readonly="true" value={`
<license>

	<company>Newbook</company>
	<expiry-date>31/12/2040</expiry-date>
	<grace-period-days>30</grace-period-days>

	<fda-spl>ENABLED</fda-spl>

	<health-canada-pm-xml>ENABLED</health-canada-pm-xml>

	<subscription-publish-counter>UNLIMITED</subscription-publish-counter>

	<side-by-side-compare>ENABLED</side-by-side-compare>
	<nlm-monitor>ENABLED</nlm-monitor>
	<rems>ENABLED</rems>
	<blanket-no-changes>ENABLED</blanket-no-changes>


</license>`} />

									<br />
									<br />
								</div>


							</td>
						</tr>
					</table>

				</fieldset>
				{/*</fieldset>*/}
			</div>
		)
	}
}
