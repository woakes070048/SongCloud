var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },


  componentDidMount: function () {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  greeting: function(){
    if (SessionStore.isUserLoggedIn()) {
      return (
        <div className="nav-right">
          <h2>Hi, {SessionStore.currentUser().username}!</h2>
          <button className="sc-button-nav signup" onClick={ SessionApiUtil.logout } >Log Out</button>
        </div>
      );
    // } else if (["/login", "/signup"].indexOf(this.props.location.pathname) === -1) {
    } else {
      return (
        <div className="nav-right">
          <button className="sc-button-nav login" onClick={this.handleLogIn} >Log In</button>
          or
          <button className="sc-button-nav signup" onClick={this.handleSignUp} >Sign Up</button>
        </div>
      );
    }
  },

  handleLogIn: function () {
    this.context.router.push("/login");
  },

  handleSignUp: function () {
    this.context.router.push("/signup");
  },

  render: function() {
    return (
      <div>
        <header>
          <nav>
            <div className="nav-left"><a href="/" title="Home" className="nav-logo"/></div>
            { this.greeting() }
          </nav>
        </header>
        <rbody>
          {this.props.children}
        </rbody>
      </div>
    );
  }
});

module.exports = App;
