var React = require('react');
var SongStore = require('../stores/song_store');
var ClientActions = require('../actions/client_actions');

var SongIndexItem = require('./songs/index_item');

module.exports = React.createClass({
  getInitialState: function () {
    return { songs: [] };
  },
  
  componentDidMount: function () {
    this.songListener = SongStore.addListener(this.getUserSongs);
    var userId = parseInt(this.props.params.userId);
    ClientActions.fetchUserSongs(userId);
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.params.userId !== this.props.params.userId) {
      var userId = parseInt(newProps.params.userId);
      ClientActions.fetchUserSongs(userId);
    }
  },

  componentWillUnmount: function () {
    this.songListener.remove();
  },

  getUserSongs: function () {
    this.setState({ songs: SongStore.all() });
  },

  render: function () {
    return (
      <div className="song-index">
        <ul className="song-index-list">
          {
            this.state.songs.map(function (song) {
              return (<SongIndexItem key={song.id} song={song} />);
            })
          }
        </ul>
      </div>
    );
  }
});
