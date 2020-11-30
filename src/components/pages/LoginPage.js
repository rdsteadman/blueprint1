import React, {Component} from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

class LoginPage extends Component {
	submit = data =>
	  this.props.login(data).then(() => this.props.history.push("/dashboard"));
  
	render() {
	  return (
		<div className="loginPage">
		  <h1>Login page</h1>
  
		  <LoginForm submit={this.submit} />
  
		</div>
	  );
	  //<Link to="/forgot_password">Forgot Password?</Link>

	}
  }

  export default LoginPage;
  