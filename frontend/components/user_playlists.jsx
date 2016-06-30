var React = require('react');
var PlaylistStore = require('../stores/playlist_store');
var ClientActions = require('../actions/client_actions');
var Link = require('react-router').Link;

var PlaylistIndexItem = require('./playlists/index_item');

module.exports = React.createClass({
  getInitialState: function () {
    return { playlists: [] };
  },

  componentDidMount: function () {
    this.playlistListener = PlaylistStore.addListener(this.getUserPlaylists);
    var userId = parseInt(this.props.params.userId);
    ClientActions.fetchUserPlaylists(userId);
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.params.userId !== this.props.params.userId) {
      var userId = parseInt(newProps.params.userId);
      ClientActions.fetchUserPlaylists(userId);
    }
  },

  componentWillUnmount: function () {
    this.playlistListener.remove();
  },

  getUserPlaylists: function () {
    this.setState({ playlists: PlaylistStore.all() });
  },

  render: function () {
    var playFrom = {
      link: this.props.location.pathname,
      linkText: "Playing from " + this.props.params.username + "'s playlists"
    };

    return (
      <div className="song-index">
        <ul className="song-index-list">
          {
            this.state.playlists.map(function (playlist, index) {
              return (
                <PlaylistIndexItem
                  key={playlist.id}
                  playlist={playlist}
                  index={index}
                  playFrom={playFrom}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
});
