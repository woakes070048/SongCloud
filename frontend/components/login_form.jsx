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
      password: "",
			imageFile: null,
			imageUrl: null
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

		var formData;

    if (this.props.location.pathname === "/login") {
			formData = {
				username: this.state.username,
				password: this.state.password
			};
      SessionApiUtil.login(formData);
    } else {
			formData = new FormData();
			formData.append("user[username]", this.state.username);
			formData.append("user[password]", this.state.password);
			if (this.state.imageFile) {
				formData.append("user[image]", this.state.imageFile);
			}
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

	updateFile: function (e) {
    var file = e.currentTarget.files[0];
		if (file) {
			if (file.size > 2097152) {
				alert('Maximum upload file size: 2MB');
				e.currentTarget.value = "";
			} else {
		    var fileReader = new FileReader();
		    fileReader.onloadend = function () {
		      this.setState({ imageFile: file, imageUrl: fileReader.result });
		    }.bind(this);

		    if (file) {
		      fileReader.readAsDataURL(file);
		    }
			}
		}
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
		var updateFile;

    if (this.formType() === "login") {
      navLink = <Link to="/signup">sign up instead</Link>;
      submitText = "Sign In";
			guestUser = <a href="" className="guest" onClick={this.guestUserSignIn}>Log in as guest</a>;
    } else {
      navLink = <Link to="/login">log in instead</Link>;
			submitText = "Sign Up";
			var divStyle = {
				backgroundImage: 'url(' + this.state.imageUrl + ')'
			};
			updateFile = (
				<div>
					<input type="file" className="user-img" onChange={this.updateFile} accept="image/*"/>
					<div className="img-div thumbnail" style={divStyle}/>
				</div>
			);
    }

		return (
			<div className="signin-div">
				<div className="centered">
					<form className="signin-form" onSubmit={this.handleSubmit}>
						<a className="sc-google" href="/auth/google_oauth2" text="Sign In With Google"></a>
		        Please { this.formType() } or { navLink }

						<input className="sc-input" type="text" value={this.state.username} onChange={this.usernameChange} placeholder="Enter Username" />
						<div className="errors" >{ this.fieldErrors("username") }</div>

						<input className="sc-input" type="password" value={this.state.password} onChange={this.passwordChange} placeholder="Enter Password" />
						<div className="errors" >{ this.fieldErrors("password") }</div>
						<div className="errors" >{ this.fieldErrors("base") }</div>
						<input className="sc-button" type="submit" value={submitText} />
						{guestUser}
						{updateFile}
						<div className="errors" >{ this.fieldErrors("image") }</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = LoginForm;
