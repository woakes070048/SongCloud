var React = require('react');
var SongsIndex = require('./songs/index');

module.exports = React.createClass({
  getInitialState: function () {
    // var potUser
    return { user_id: parseInt(this.props.params.userId) };
  },

  // componentDidMount: function () {
  //   this.userListener = UserStore.addListener(this.setUser);
  //   ClientActions.getUser(parseInt(this.props.params.userId));
  // },

  componentWillReceiveProps: function (newProps) {
    this.setState({ user_id: parseInt(newProps.params.userId) });
  },

  render: function () {
    return (
      <SongsIndex filter={ { user_id: this.state.user_id } }/>
    );
  }
});
