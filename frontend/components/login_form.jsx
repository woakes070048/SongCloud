var React = require('react');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var UserApiUtil = require('./../util/user_api_util');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      username: "",
      password: ""
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

	handleSubmit: function (e) {
		e.preventDefault();

		var formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionApiUtil.login(formData);
    } else {
      UserApiUtil.signup(formData);
    }
	},

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) { return; }

    var messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType: function () {
    return this.props.location.pathname.slice(1);
  },

  usernameChange: function (event) {
    this.setState({ username: event.target.value });
  },

  passwordChange: function (event) {
    this.setState({ password: event.target.value });
  },

  guestUserSignIn: function (event) {
		event.preventDefault();

		var formData = {
			username: "user",
			password: "password"
		};

		SessionApiUtil.login(formData);
  },

	render: function () {
    var navLink;
		var submitText;
		var guestUser;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">sign up instead</Link>;
      submitText = "Sign In";
			guestUser = <a href="" className="guest" onClick={this.guestUserSignIn}>Log in as guest</a>;
    } else {
      navLink = <Link to="/login">log in instead</Link>;
			submitText = "Sign Up";
    }

		return (
			<div className="signin-div">
				<div className="centered">
					<form className="signin-form" onSubmit={this.handleSubmit}>
		        Please { this.formType() } or { navLink }

		        { this.fieldErrors("base") }

		        <br />
						<input className="sc-input" type="text" value={this.state.username} onChange={this.usernameChange} placeholder="Enter Username" />
						{ this.fieldErrors("username") }

		        <br />
						<input className="sc-input" type="password" value={this.state.password} onChange={this.passwordChange} placeholder="Enter Password" />
						{ this.fieldErrors("password") }

		        <br />
						<input className="sc-button" type="submit" value={submitText} />
					</form>
					{guestUser}
				</div>
			</div>
		);
	}
});

module.exports = LoginForm;
