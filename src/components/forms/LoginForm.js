import { Spinner, Button, Callout, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import React from "react";
import validator from "validator";
import InlineError from "../messages/InlineError";
import PropTypes from 'prop-types';

class LoginForm extends React.Component {

	state = {
		data: {
			email: "",
			password: ""
		},
		loading: false,
		// test: "test me!",
		errors: {}
	};

	render() {

		// Make some state object available more directly
		const { data, errors, loading } = this.state;

		if (loading) {
			return (
				<Spinner />
			)
		}
		else {
			return (
				<form id="loginForm" onSubmit={this.onSubmit}> {/* loading={loading}*/}
					{ errors.global && <Callout icon="warning-sign" intent="warning"><InlineError text={"Something went wrong: "} /><InlineError text={errors.global} /></Callout>}

					<FormGroup label="E-mail" >
						<InputGroup asyncControl="true" name="email" type="email" size="30" id="email"
							placeholder="example@example.com" intent={!!errors.email ? "danger" : Intent.NONE}
							onChange={this.onChange} />{/* value={data.email}*/}
						{errors.email && <Callout icon="warning-sign" intent="warning">{errors.email}</Callout>}
					</FormGroup>
					<FormGroup label="Password">
						<InputGroup type="password" name="password" size="30" id="password" placeholder=""
							intent="primary" onChange={this.onChange} /> {/* value={data.password}*/}
						{errors.password && <Callout icon="warning-sign"><InlineError text={errors.password} /></Callout>}
					</FormGroup>
					<div>
						<Button type="submit" text="Login" intent={Intent.SUCCESS} />
					</div>

				</form >
			);
		}
	}

	// This will work for all text fields
	onChange = e => {
		//console.log("setting state: " + e.target.name + ": " + e.target.value);
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	}

	onSubmit = (e) => {
		e.preventDefault(); // Don't actually submit the form in the usual way (POST) - we're handling it with JS/React.
		//console.log("email: " + this.state.data.email);
		//console.log("test: " + this.state.test);
		const errors = this.validate(this.state.data);

		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });

			/*try {
				this.props.submit(this.state.data);
			}
			catch (err) {
				console.log("submit error: " + err.response.data.errors);
				this.setState({ errors: err.response.data.errors, loading: false });
			}*/

			this.props.submit(this.state.data)
				.catch(err =>
					this.setState({ errors: err.response.data.errors, loading: false })
				);
		}
	};

	validate = data => {
		const errors = {}; // empty object
		console.log("validate: data.email:" + data.email);
		if (!validator.isEmail(data.email)) errors.email = "Invalid email";
		if (!data.password) errors.password = "Can't be blank";
		//console.log(errors);
		return errors;
	};

}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default LoginForm;

