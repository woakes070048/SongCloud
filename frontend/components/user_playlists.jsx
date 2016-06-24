var React = require('react');
var PlaylistsIndex = require('./playlists/index');

module.exports = React.createClass({
  getInitialState: function () {
    return { user_id: parseInt(this.props.params.userId) };
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ user_id: parseInt(newProps.params.userId) });
  },

  render: function () {
    return (
      <PlaylistsIndex filter={ { user_id: this.state.user_id } }/>
    );
  }
});
