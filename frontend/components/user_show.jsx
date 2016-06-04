var React = require('react');
var Link = require('react-router').Link;
var UserStore = require('../stores/user_store');
var ClientActions = require('../actions/client_actions');

module.exports = React.createClass({
  getInitialState: function () {
    return { user: {} };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.setUser);
    ClientActions.getUser(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  setUser: function () {
    this.setState({ user: UserStore.user() });
  },

  render: function () {
    // var headerImage = this.state.
    return (
      <div>
        <div className="header-image">
          {this.state.user.username}
        </div>
      </div>
    );
  }
});
