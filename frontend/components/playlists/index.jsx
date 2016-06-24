var React = require('react');
var PlaylistStore = require('../../stores/playlist_store');
var ClientActions = require('../../actions/client_actions');

var PlaylistIndexItem = require('./index_item');

module.exports = React.createClass({
  getInitialState: function () {
    return { playlists: PlaylistStore.all(this.props.filter) };
  },

  componentDidMount: function () {
    this.playlistListener = PlaylistStore.addListener(this.getPlaylists);
    ClientActions.fetchPlaylists(this.props.filter);
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchPlaylists(newProps.filter);
    this.setState({ playlists: PlaylistStore.all(newProps.filter) });
  },

  componentWillUnmount: function () {
    this.playlistListener.remove();
  },

  getPlaylists: function () {
    this.setState({ playlists: PlaylistStore.all(this.props.filter) });
  },

  render: function () {
    return (
      <div className="playlist-index">
        <ul className="playlist-index-list">
          {
            this.state.playlists.map(function (playlist) {
              return (<PlaylistIndexItem key={playlist.id} playlist={playlist} />);
            })
          }
        </ul>
      </div>
    );
  }
});
