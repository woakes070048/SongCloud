var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var PlayerFooter = require('./player_footer');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    SessionStore.addListener(this.forceUpdate.bind(this));
    SessionApiUtil.fetchCurrentUser();
  },

  greeting: function(){
    if (SessionStore.isUserLoggedIn()) {

      var curUser = SessionStore.currentUser();
      var divStyle = {
        backgroundImage: 'url(' + curUser.image_url + ')'
      };

      return (
        <div className="nav-right">
          <Link className="group user" to={curUser.id + '/' + curUser.username} >
            <div className="profile-img thumbnail circular" style={divStyle} />
            <div className="user-profile" >{curUser.username}</div>
          </Link>
          <button className="float-right sc-button-nav signup" onClick={ SessionApiUtil.logout } >Log Out</button>
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
      <div className="body">
        <header>
          <nav className="w-container">
            <div className="nav-left"><a href="#/" title="Home" className="nav-logo"/></div>
            <div className="nav-middle">
              <form class="nav-search">
                <input className="nav-input" placeholder="Search for artists, bands, songs" />
                <button className="nav-submit interactive" />
              </form>
            </div>
            { this.greeting() }
          </nav>
        </header>
        <rbody className="w-content">
          {this.props.children}
        </rbody>
        <footer>
          <PlayerFooter/>
        </footer>
      </div>
    );
  }
});

module.exports = App;
